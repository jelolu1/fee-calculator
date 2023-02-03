import { useEffect, useState } from "react";
import styles from "./Calculator.module.css";
import { CalculatorField } from "./CalculatorField";

type CalculatorProps = {
  setShowInfoModal: Function,
  setShowFeeModal: Function,
  setShowWarningModal: Function,
  setCalculatedFee: Function,
}

export type dateObject = {
  date: string, 
  time: string
}


export const Calculator = ({ setShowInfoModal, setShowFeeModal, setShowWarningModal,  setCalculatedFee  }: CalculatorProps) => {
  const [cartValue, setCartValue] = useState<number>(0);
  const [deliveryDistance, setDeliveryDistance] = useState<number>(0);
  const [numberOfItems, setNumberOfItems] = useState<number>(0);
  const [orderTime, setOrderTime] = useState<dateObject>({ date: "", time:"" });
  const [btnOn, setBtnOn] = useState<boolean>(false);

  const calculatorFields = [
    {
      id: "cart",
      title: "Cart Value",
      inputType: "number",
      unit: "€",
      setValue: setCartValue,
      fieldValue: cartValue,
    },
    {
      id: "distance",
      title: "Delivery Distance",
      inputType: "number",
      unit: "m",
      setValue: setDeliveryDistance,
      fieldValue: deliveryDistance,
    },
    {
      id: "items",
      title: "Amount of Items",
      inputType: "number",
      unit: null,
      setValue: setNumberOfItems,
      fieldValue: numberOfItems,
    },
    {
      id: "date",
      title: "Time",
      inputType: "date",
      unit: null,
      setValue: setOrderTime,
      fieldValue: orderTime,
    },
  ]
  
  const calculateFee = (cartValue: number, deliveryDistance: number, numberOfItems: number, orderTime: dateObject) =>{
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
    if(numberOfItems > 4){
      if(numberOfItems > 12) fee += 1.2
      fee += ((numberOfItems - 4) * 0.5)
    }

    /* 
      During the Friday rush (3 - 7 PM UTC), the delivery fee (the total fee including possible surcharges) will be multiplied by 1.2x. However, the fee still cannot be more than the max (15€).
    */
    const date = new Date(orderTime.date + orderTime.time)
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

    setShowFeeModal(true)
    setCalculatedFee(fee)
  }

  const submitClickHandler = (e: any) => {
    e.preventDefault();

    // Indicate user that needs to fill fields
    if (!btnOn) {
      setShowWarningModal(true)
      return
    }

    // None of the fields should be undefined or 0 (Lack of sense)
    if(cartValue && deliveryDistance && numberOfItems && orderTime.date !== "" && orderTime.time !== ""){ 
      calculateFee(cartValue, deliveryDistance, numberOfItems, orderTime)
    }
  }

  useEffect(() => {
    if(
      cartValue > 0 &&
      deliveryDistance > 0 &&
      numberOfItems > 0 &&
      orderTime.date !== "" &&
      orderTime.time !== ""
    ) {
      setBtnOn(true)
    }
    else {setBtnOn(false)}


  }, [cartValue, deliveryDistance, numberOfItems, orderTime])


  return (
    <section className={styles["calc-container"]}>
      <div className={`${styles["spacer"]} ${ styles["calc-header"]}`}>
        <button
          onClick={() => setShowInfoModal(true)}
          className={styles["btn-info"]}
        >
        i
        </button>
      </div>
      <form className={styles["calc-form"]}>
        {calculatorFields.map(field => (
          <CalculatorField
            key={field.id}
            id={field.id}
            title={field.title}
            inputType={field.inputType}
            unit={field.unit}
            setValue={field.setValue}
            fieldValue={field.fieldValue}
          />
        ))
        }
        <button
          onClick={submitClickHandler} 
          className={`${styles["calc-btn"]} ${btnOn ? styles["btn-on"]: styles["btn-off"]}`}
        >
          CALCULATE FEE
        </button>

      </form>
      
      <div className={`${styles["spacer"]} ${ styles["calc-footer"]}`}/>

      
    </section>
    
  )
}