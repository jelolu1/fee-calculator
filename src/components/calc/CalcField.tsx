import up from '../../assets/up.svg';
import styles from './calcField.module.css';

type CalcFieldProps = {
    id: string,
    title: string,
    inputType: string,
    unit: string | null,
    setValue: Function        
    fieldValue: number | string
}


export const CalcField = (props: CalcFieldProps) => {

    
    const handleDecreaseClick = (e: any) => {
        e.preventDefault()
        props.id === "cart" && props.setValue((prev:number) => prev >= 1 ? Number(prev) - 1 : 0)
        props.id === "distance" && props.setValue((prev:number) => prev >= 50 ? Number(prev) - 50 : 0)
        props.id === "items" && props.setValue((prev:number) => prev >= 1 ? Number(prev) - 1 : 0)
    }

    const handleIncreaseClick = (e: any) => {
        e.preventDefault()
        props.id === "cart" && props.setValue((prev:number) => Number(prev) + 1)
        props.id === "distance" && props.setValue((prev:number) => Number(prev) + 50)
        props.id === "items" && props.setValue((prev:number) => Number(prev) + 1)
    }

    const changeInputHandler = (e: any) => {
        if(props.id === "cart") { props.setValue(Math.floor(e.target.value * 100) / 100) }
        else if(props.id === "distance" || props.id === "items") { props.setValue(Math.floor(e.target.value)) }
        else { props.setValue(e.target.value) }
    }
    
    return (
        <div className={`${styles['calc-field']} ${props.inputType === "datetime-local" ? styles['calc-field-date'] : ""}`}>

            {props.inputType==="number" &&
            
                <div className={styles["number-field"]}>
                    <p>{props.title}</p>
                        
                    <div className={styles['number-container']}>
                        <button
                            className={styles['btn-quantity']}
                            onClick={handleDecreaseClick}
                        >
                            <span className={styles['span-icon']}>
                                <svg viewBox="0 0 16 16" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true">
                                    <path d="M14.125 7.344H1.875v1.312h12.25V7.344z"/>
                                </svg>
                            </span>
                        </button>
                        <input
                            className={styles['input-quantity']}
                            type={props.inputType}
                            min="0"
                            step={props.id === "cart" ? 0.5 : 1}
                            onChange={changeInputHandler}
                            value={props.fieldValue}
                        />
                        <button
                            className={styles['btn-quantity']}
                            onClick={handleIncreaseClick}
                        >
                            <span className={styles['span-icon']}>
                                <svg viewBox="0 0 16 16" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true">
                                    <path d="M14.125 7.344H8.656V1.875H7.344v5.469H1.875v1.312h5.469v5.469h1.312V8.656h5.469V7.344z"/>    
                                </svg>
                            </span>

                        </button>

                        

                    </div>
                    <p>{props.unit}</p>
                </div>
                    
            }

            {props.inputType==="datetime-local" &&
                <div className={styles["date-field"]}>
                    <p>{props.title}</p>
                    <input
                        className={`${styles['input-date']}`}
                        type={props.inputType}
                        onChange={changeInputHandler}     
                        value={props.fieldValue}

                    />
                </div>
                    
                    
            }

        </div>
    )
}

