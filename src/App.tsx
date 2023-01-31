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


function App() {

  const [cartValue, setCartValue] = useState<number>(0);
  const [deliveryDistance, setDeliveryDistance] = useState<number>(0);
  const [numberOfItems, setNumberOfItems] = useState<number>(0);
  const [orderTime, setOrderTime] = useState<string>("");
  const [btnOn, setBtnOn] = useState<boolean>(false);



  const calculateFee = (cartValue: number, deliveryDistance: number, numberOfItems: number, orderTime: string) =>{
    
  }

  const submitClickHandler = (e: any) => {
    e.preventDefault();

    // Indicate user that needs to fill fields
    if (!btnOn) return;

    calculateFee(cartValue, deliveryDistance, numberOfItems, orderTime)

  }

  useEffect(() => {
    if(
      cartValue !== undefined &&
      deliveryDistance !== undefined &&
      numberOfItems !== undefined &&
      orderTime !== undefined
    ) setBtnOn(true)
    else setBtnOn(false)


  }, [cartValue, deliveryDistance, numberOfItems, orderTime])


  return (



    <section className={styles['calc-container']}>
      <div className={`${styles["spacer"]} ${ styles["calc-header"]}`}/>
      <form className={styles['calc-form']}>
        <CalcField
          title='Cart Value'
          inputType='number'
          unit='€'
          setValue={setCartValue}
          fieldValue={cartValue}
        />
        <CalcField
          title='Delivery Distance'
          inputType='number'
          unit='Meters'
          setValue={setDeliveryDistance}
          fieldValue={deliveryDistance}

        />
        <CalcField
          title='Amount of Items'
          inputType='number'
          unit='Items'
          setValue={setNumberOfItems}
          fieldValue={numberOfItems}

        />
        <CalcField
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

        <p>Delivery Fee: </p>
      </form>
      
      <div className={`${styles["spacer"]} ${ styles["calc-footer"]}`}/>
    </section>



    
  )
}

export default App
