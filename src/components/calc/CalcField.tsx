import styles from './calcField.module.css';

type CalcFieldProps = {
    title: string,
    inputType: string,
    unit: string | null
}

export const CalcField = (props: CalcFieldProps) => {

    return (
        <div className={styles['calc-field']}>
            <p>{props.title}</p>
            {
                props.inputType==="number" 
                ? <input className={styles['input-value']} type={props.inputType} min="0"></input>
                : <input className={`${styles['input-value']} ${styles['input-calendar']}`} type={props.inputType} ></input>
            }
            {
                props.unit 
                ? <p>{props.unit}</p>
                : <p></p>
            }

        </div>
    )
}

