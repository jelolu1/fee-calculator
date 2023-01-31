import { useRef } from 'react';
import styles from './calcField.module.css';

type CalcFieldProps = {
    title: string,
    inputType: string,
    unit: string | null,
    setValue: Function        

}


export const CalcField = (props: CalcFieldProps) => {


    return (
        <div className={`${styles['calc-field']} ${props.inputType === "datetime-local" ? styles['calc-field-date'] : ""}`}>
            <p>{props.title}</p>
            {
                props.inputType==="number" 
                && <input
                    className={styles['input-value']}
                    type={props.inputType}
                    min="0"
                    onChange={(e) => props.setValue(e.target.value)}
                />

            }
            {
                props.inputType==="datetime-local" 
                && <input
                    className={`${styles['input-value']} ${styles['input-date']}`}
                    type={props.inputType}
                    onChange={(e) => props.setValue(e.target.value)
                    }
                />
            }
            {
                props.unit 
                ? <p>{props.unit}</p>
                : <p></p>
            }

        </div>
    )
}

