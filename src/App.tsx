import { useState } from 'react';
import styles from "./App.module.css";
import { Calculator } from './components/Calculator/Calculator';
import { BubbleBackground } from './components/UI/BubbleBackground';
import { Modal } from './components/UI/Modal';

// https://github.com/woltap33p/engineering-summer-intern-2023

// TODO
// Maybe change background
// Maybe change header and footer
// Add tests
// Add translation -> Change enter day format
// Add fee disclosure
// 
// ...


function App() {

  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [showFeeModal, setShowFeeModal] = useState<boolean>(false);
  const [showWarningModal, setShowWarningModal] = useState<boolean>(false);
  const [calculatedFee, setCalculatedFee] = useState<number>(0);

  return (
  <>
    <Calculator 
      setShowInfoModal={setShowInfoModal} 
      setShowFeeModal={setShowFeeModal}
      setShowWarningModal={setShowWarningModal}
      setCalculatedFee={setCalculatedFee}
    />
    {
      showInfoModal && 
      <Modal setShowModal={setShowInfoModal}>
        <>
          <h2>Fee Calculator Instructions</h2>
          <p>
            To calculate the delivery fee you need to enter the following data:
            <ul className={styles["instructions-list"]}>
              <li>
                <span>Cart Value</span> 
                <p>Value of the shopping cart in euros.</p>
              </li>
              <li>
                <span>Delivery Distance</span>
                <p>The distance between the store and customer’s location in meters.</p>
              </li>
              <li>
                <span>Number of Items</span>
                <p>The number of items in the shopping cart.</p>
              </li>
              <li>
                <span>Order time</span>
                <p>The date (Including time) when the order is being made.</p>
              </li>
            </ul>
          </p>
        </>
        
      </Modal>
    }
    {
      showFeeModal && 
      <Modal setShowModal={setShowFeeModal}>
        <>
          <h2 className={styles["calculated-fee-title"]}>
            Calculated Fee
          </h2>
          <span className={styles["span-fee"]}>
            {calculatedFee.toFixed(2)} €
          </span>
        </>

      </Modal>
    }
    {
      showWarningModal && 
      <Modal setShowModal={setShowWarningModal}>
        <>
            <h2>Please fill all the fields:</h2>
            <ul  className={styles["warning-list"]}>
              <li>
                <span>Cart Value</span>
                <p>Higher than 0.</p></li>
              <li>
                <span>Delivery Distance</span> 
                <p>Higher than 0.</p>
              </li>
              <li>
                <span>Number of Items</span>
                <p>Higher than 0.</p>
              </li>
              <li>
                <span>Order Date</span>
                <p>Select day, month and year</p>
              </li>
              <li>
                <span>Order Time</span>
                <p>Select hour, minutes and PM/AM</p>
              </li>
            </ul>
        </>

      </Modal>
    }
    
    <BubbleBackground/>
  </>
  )

}

export default App
