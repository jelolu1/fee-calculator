import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { CalcField } from './components/calc/CalcField';

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

    <main className={styles['calc-container']}>
      <header className={styles['calc-header']}>
      </header>
      <form className={styles['calc-form']}>
        <CalcField
          title='Cart Value'
          inputType='number'
          unit='€'
          setValue={setCartValue}
        />
        <CalcField
          title='Delivery Distance'
          inputType='number'
          unit='Meters'
          setValue={setDeliveryDistance}
        />
        <CalcField
          title='Amount of Items'
          inputType='number'
          unit='Items'
          setValue={setNumberOfItems}
        />
        <CalcField
          title='Time'
          inputType='datetime-local'
          unit={null}
          setValue={setOrderTime}
        />


        <button
          onClick={submitClickHandler} 
          className={`${styles['calc-button']} ${btnOn ? styles['btn-on']: styles['btn-off']}`}
        >
          Calculate Fee
        </button>

        <p>Delivery Fee: </p>
      </form>
      <footer  className={styles['calc-footer']}>
      </footer>
      
    </main>
    
  )
}

export default App
