import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { CalcField } from './components/calc/CalcField';
import { BubbleBackground } from './components/UI/BubbleBackground';

// https://github.com/woltap33p/engineering-summer-intern-2023

type calculateFeeType = {
  cartValue: number,
  deliveryDistance: number,
  numberOfItems: number,
  orderTime: string
}


// TODO
// Add instructions
// Maybe change background
// Maybe change header and footer
// Change date
// Review units field
// Implement calculation
// New display result way
// ...


function App() {

  const [cartValue, setCartValue] = useState<number>(0);
  const [deliveryDistance, setDeliveryDistance] = useState<number>(0);
  const [numberOfItems, setNumberOfItems] = useState<number>(0);
  const [orderTime, setOrderTime] = useState<string>("");
  const [calculatedFee, setCalculatedFee] = useState<number | undefined>(undefined);
  const [btnOn, setBtnOn] = useState<boolean>(false);



  const calculateFee = (cartValue: number, deliveryDistance: number, numberOfItems: number, orderTime: string) =>{
    let fee = 0

    /* 
      If the cart value is less than 10€, a small order surcharge is added to the delivery price. The surcharge is the difference between the cart value and 10€. For example if the cart value is 8.90€, the surcharge will be 1.10€. 
    */
    if(cartValue < 10) { fee += 10 - cartValue }

    /* 
      A delivery fee for the first 1000 meters (=1km) is 2€. If the delivery distance is longer than that, 1€ is added for every additional 500 meters that the courier needs to travel before reaching the destination. Even if the distance would be shorter than 500 meters, the minimum fee is always 1€.
      Example 1: If the delivery distance is 1499 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m => 3€
      Example 2: If the delivery distance is 1500 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m => 3€
      Example 3: If the delivery distance is 1501 meters, the delivery fee is: 2€ base fee + 1€ for the first 500 m + 1€ for the second 500 m => 4€
    */
    if(deliveryDistance <= 1000) { fee += 2 }
    else { fee += (Math.ceil(deliveryDistance / 500)) }

    /* 
      If the number of items is five or more, an additional 50 cent surcharge is added for each item above and including the fifth item. An extra "bulk" fee applies for more than 12 items of 1,20€
      Example 1: If the number of items is 4, no extra surcharge
      Example 2: If the number of items is 5, 50 cents surcharge is added
      Example 3: If the number of items is 10, 3€ surcharge (6 x 50 cents) is added
      Example 4: If the number of items is 13, 5,70€ surcharge is added ((9 * 50 cents) + 1,20€)
    */



    /* 
      During the Friday rush (3 - 7 PM UTC), the delivery fee (the total fee including possible surcharges) will be multiplied by 1.2x. However, the fee still cannot be more than the max (15€).
    */
    const date = new Date(orderTime)
    const weekDay = date.getUTCDay()
    const hour = date.getHours()
    if(weekDay === 5 && hour >= 15 && hour <= 19)  { fee *= 1.2 }

    /* 
      The delivery fee can never be more than 15€, including possible surcharges.
    */
    if(fee > 15) fee = 15;

    /* 
      The delivery is free (0€) when the cart value is equal or more than 100€.
    */
    if(cartValue >= 100) fee = 0;

    setCalculatedFee(fee)
  }

  const submitClickHandler = (e: any) => {
    e.preventDefault();

    // Indicate user that needs to fill fields
    if (!btnOn) return;

    // None of the fields should be undefined or 0 (Lack of sense)
    if(cartValue && deliveryDistance && numberOfItems && orderTime !== ""){ 
      calculateFee(cartValue, deliveryDistance, numberOfItems, orderTime)
    }
  }

  useEffect(() => {
    if(
      cartValue > 0 &&
      deliveryDistance > 0 &&
      numberOfItems > 0 &&
      orderTime !== ""
    ) setBtnOn(true)
    else setBtnOn(false)


  }, [cartValue, deliveryDistance, numberOfItems, orderTime])


  return (



    <section className={styles['calc-container']}>
      <div className={`${styles["spacer"]} ${ styles["calc-header"]}`}/>
      <form className={styles['calc-form']}>
        <CalcField
          id="cart"
          title='Cart Value'
          inputType='number'
          unit='€'
          setValue={setCartValue}
          fieldValue={cartValue}
        />
        <CalcField
          id="distance"
          title='Delivery Distance'
          inputType='number'
          unit='Meters'
          setValue={setDeliveryDistance}
          fieldValue={deliveryDistance}

        />
        <CalcField
          id="items"
          title='Amount of Items'
          inputType='number'
          unit='Items'
          setValue={setNumberOfItems}
          fieldValue={numberOfItems}

        />
        <CalcField
          id="date"
          title='Time'
          inputType='datetime-local'
          unit={null}
          setValue={setOrderTime}
          fieldValue={orderTime}
        />


        <button
          onClick={submitClickHandler} 
          className={`${styles['calc-button']} ${btnOn ? styles['btn-on']: styles['btn-off']}`}
        >
          Calculate Fee
        </button>

        {calculatedFee !== undefined &&
          <p>Delivery Fee: <span>{calculatedFee.toFixed(2)}</span></p>
        }
      </form>
      
      <div className={`${styles["spacer"]} ${ styles["calc-footer"]}`}/>
    </section>



    
  )
}

export default App
