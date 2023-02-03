import { useEffect, useState } from "react";
import styles from "./Calculator.module.css";
import { CalculatorField } from "./CalculatorField";

type CalculatorProps = {
  setShowInstructionsModal: Function,
  setShowResultModal: Function,
  setCalculatedFee: Function,
}

export interface dateObject {
  day: string, 
  time: string
}



export interface fieldValueObject {
  value: dateObject | number, 
  modified: boolean
}




export const Calculator = ({ setShowInstructionsModal, setShowResultModal,  setCalculatedFee  }: CalculatorProps) => {
  const [cartValue, setCartValue] = useState<fieldValueObject>({value: 0, modified: false});
  const [deliveryDistance, setDeliveryDistance] = useState<fieldValueObject>({value: 0, modified: false});
  const [numberOfItems, setNumberOfItems] = useState<fieldValueObject>({value: 0, modified: false});
  const [orderDate, setOrderTime] = useState<fieldValueObject>({value: { day: "", time:"" }, modified: false });
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
      fieldValue: orderDate,
    },
  ]
  
  const calculateFee = (cValue: number, dDistance: number, nItems: number, oDate: dateObject) =>{
    let fee = 0


    if(cValue < 10) { fee += 10 - cValue }


    if(dDistance <= 1000) { fee += 2 }
    else { fee += (Math.ceil(dDistance / 500)) }


    if(nItems > 4){
      if(nItems > 12) fee += 1.2
      fee += ((nItems - 4) * 0.5)
    }

  
    const date = new Date(oDate.day + oDate.time)
    const weekDay = date.getUTCDay()
    const hour = date.getHours()
    if(weekDay === 5 && hour >= 15 && hour <= 19)  { fee *= 1.2 }

 
    if(fee > 15) fee = 15;


    if(cValue >= 100) fee = 0;

    setShowResultModal(true)
    setCalculatedFee(fee)
  }

  const submitClickHandler = (e: any) => {
    e.preventDefault();

    if (!btnOn) return
    if(typeof(cartValue.value) !== "number" || typeof(deliveryDistance.value) !== "number" || typeof(numberOfItems.value) !== "number" || typeof(orderDate.value) === "number") return

    calculateFee(cartValue.value, deliveryDistance.value, numberOfItems.value, orderDate.value)
  }

  useEffect(() => {

    if(typeof(cartValue.value) !== "number" || typeof(deliveryDistance.value) !== "number" || typeof(numberOfItems.value) !== "number" || typeof(orderDate.value) === "number") return

    if(
      cartValue.value > 0 &&
      deliveryDistance.value > 0 &&
      numberOfItems.value > 0 &&
      orderDate.value.day !== "" &&
      orderDate.value.time !== ""
    ) {
      setBtnOn(true)
    }
    else {setBtnOn(false)}

  }, [cartValue, deliveryDistance, numberOfItems, orderDate])


  return (
    <section className={styles["calc-container"]}>
      <div className={`${styles["spacer"]} ${ styles["calc-header"]}`}>
        <button
          onClick={() => setShowInstructionsModal(true)}
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