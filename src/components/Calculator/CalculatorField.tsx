import { useEffect } from "react";
import { dateObject, fieldValueObject } from "./Calculator";
import styles from "./CalculatorField.module.css";

type CalculatorFieldProps = {
    id: string,
    title: string,
    inputType: string,
    unit: string | null,
    setValue: Function        
    fieldValue: fieldValueObject
}

export const CalculatorField = ({id, title, inputType, unit, setValue, fieldValue}: CalculatorFieldProps) => {

    
    const handleDecreaseClick = (e: any) => {
        e.preventDefault()
        id === "cart" && setValue((prev:fieldValueObject) => ( {value: prev.value >= 1 ? Number(prev.value) - 1 : 0, modified: true} ))
        id === "distance" && setValue((prev:fieldValueObject) => ( {value: prev.value >= 50 ? Number(prev.value) - 50 : 0, modified: true} ))
        id === "items" && setValue((prev:fieldValueObject) => ( {value: prev.value >= 1 ? Number(prev.value) - 1 : 0, modified: true} ))
    }

    const handleIncreaseClick = (e: any) => {
        e.preventDefault()
        id === "cart" && setValue((prev:fieldValueObject) => ({value: Number(prev.value) + 1, modified: true}))
        id === "distance" && setValue((prev:fieldValueObject) => ({value: Number(prev.value) + 50, modified: true}))
        id === "items" && setValue((prev:fieldValueObject) => ({value: Number(prev.value) + 1, modified: true}))
    }

    const changeInputHandler = (e: any) => {

        if(id === "cart") { 
            setValue({
                value: Math.floor(e.target.value * 100) / 100, 
                modified: true
            }) 
        }
        else if(id === "distance" || id === "items") { 
            setValue({
                value: Math.floor(e.target.value),
                modified: true
            }) 
        }
        else { 
            e.target.type === "time" && 
                setValue((prev: fieldValueObject) => {
                    typeof(prev.value) !== "number" 
                    ?
                    {
                        value: {day: prev.value.day, time: e.target.value},
                        modified: true
                    }
                    : prev
                })

            e.target.type === "date" && 

                setValue((prev: fieldValueObject) => {
                    typeof(prev.value) !== "number" 
                    ?
                    {
                        value: {day: e.target.value, time: prev.value.time},
                        modified: true
                    }
                    : prev
                })
        }
    }


    const value = (id === "cart" || id === "distance" || id === "items") ? fieldValue.value as number : fieldValue.value as dateObject
    console.log(value)
     
    return (
        <>

            { value !== undefined && typeof(value) === "number" &&
            
                <div className={styles["number-field"]}>

                    <div className={styles["div-title"]}>
                        <p>
                            {title}
                        </p>
                        {fieldValue.modified && value === 0 &&
                        <span className={styles["warning-msg"]}>
                            Higher than 0
                        </span>
                        }
                        
                    </div>
                        
                    <div className={styles["number-container"]}>
                        <button
                            className={styles["btn-quantity"]}
                            onClick={handleDecreaseClick}
                        >
                            <span className={styles["span-icon"]}>
                                <svg viewBox="0 0 16 16" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true">
                                    <path d="M14.125 7.344H1.875v1.312h12.25V7.344z"/>
                                </svg>
                            </span>
                        </button>
                        <input
                            className={styles["input-quantity"]}
                            type={inputType}
                            min="0"
                            step={id === "cart" ? 0.5 : 1}
                            onChange={changeInputHandler}
                            value={value}
                            required
                        />

                        <button
                            className={styles["btn-quantity"]}
                            onClick={handleIncreaseClick}
                        >
                            <span className={styles["span-icon"]}>
                                <svg viewBox="0 0 16 16" width="1em" height="1em" role="presentation" focusable="false" aria-hidden="true">
                                    <path d="M14.125 7.344H8.656V1.875H7.344v5.469H1.875v1.312h5.469v5.469h1.312V8.656h5.469V7.344z"/>    
                                </svg>
                            </span>
                        </button>
                    </div>
                    <p className={styles["p-unit"]}>{unit}</p>
                </div>
            }

            {value !== undefined && typeof(value) !== "number" &&
                <div className={styles["date-field"]}>
                    <p>{title}</p>
                    <input
                        className={styles["input-date"]}
                        type={"date"}
                        onChange={changeInputHandler}     
                        value={value.day}
                        required

                    />
                    <input
                        className={styles["input-date"]}
                        type={"time"}
                        onChange={changeInputHandler}     
                        value={value.time}
                        required

                    />
                </div>     
            }

        </>
    )
}

