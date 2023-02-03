import { Modal } from "../UI/Modal";
import styles from "./ResultModal.module.css";

type propsResultModal = {
    setShowResultModal: Function,
    calculatedFee: number
}

const ResultModal = ({setShowResultModal, calculatedFee} : propsResultModal) => {
    return (
        <Modal setShowModal={setShowResultModal}>

        <>
            <h2 className={styles["calculated-fee-title"]}>
                Calculated Fee
            </h2>
            <span className={styles["span-fee"]}>
                {calculatedFee.toFixed(2)} €
            </span>
        </>
      </Modal>
    )
}

export default ResultModal;
