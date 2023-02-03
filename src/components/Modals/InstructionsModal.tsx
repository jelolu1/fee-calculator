import { Modal } from "../UI/Modal";
import styles from "./InstructionsModal.module.css";

type propsResultModal = {
    setShowInstructionsModal: Function
}

const InstructionsModal = ({setShowInstructionsModal} : propsResultModal) => {
    return (
    <Modal setShowModal={setShowInstructionsModal}>
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
    )
}

export default InstructionsModal;