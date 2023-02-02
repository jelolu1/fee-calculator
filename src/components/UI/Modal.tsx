import styles from "./Modal.module.css"

type ModalProps = {
    children: JSX.Element,
    setShowModal: Function,
}

export const Modal = ({children, setShowModal}: ModalProps) => {

    return( 
    <div className={styles["modal"]} >
        <div className={styles["modal-container"]} >
            <header className={styles["modal-header"]}>
                <button
                    className={styles["btn-close"]}
                    onClick={() => { setShowModal(false)} }
                >
                    X
                </button>
            </header>

            <div className={styles["modal-children"]}>
                {children}

            </div>
        </div>
        <div className={styles["modal-bg"]} onClick={() => setShowModal(false)}></div>
    </div>
    )
}