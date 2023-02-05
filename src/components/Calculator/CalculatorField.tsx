import {
	ChangeEvent,
	ChangeEventHandler,
	MouseEvent,
	MouseEventHandler,
} from 'react';
import {
	calculatorFeeConstants,
	CalculatorFieldProps,
	DateObject,
	fieldValueObject,
} from '../../constants';
import utilityClasses from '../../styles/utility.module.css';
import { BtnQuantity } from './BtnQuantity';
import styles from './CalculatorField.module.css';

export const CalculatorField = ({
	id,
	title,
	inputType,
	unit,
	setValue,
	fieldValue,
	t,
}: CalculatorFieldProps) => {
	const decreaseFieldHandler: MouseEventHandler = (e: MouseEvent) => {
		e.preventDefault();

		const { cartValueStep, distanceStep, itemsStep, minNumberValue } =
			calculatorFeeConstants;
		id === 'cart' &&
			setValue((prev: fieldValueObject) => ({
				value:
					prev.value >= cartValueStep
						? Number(prev.value) - cartValueStep
						: minNumberValue,
				modified: true,
			}));
		id === 'distance' &&
			setValue((prev: fieldValueObject) => ({
				value:
					prev.value >= distanceStep
						? Number(prev.value) - distanceStep
						: minNumberValue,
				modified: true,
			}));
		id === 'items' &&
			setValue((prev: fieldValueObject) => ({
				value:
					prev.value >= itemsStep
						? Number(prev.value) - itemsStep
						: minNumberValue,
				modified: true,
			}));
	};

	const increaseFieldHandler: MouseEventHandler = (e: MouseEvent) => {
		e.preventDefault();

		const { cartValueStep, distanceStep, itemsStep } = calculatorFeeConstants;

		id === 'cart' &&
			setValue((prev: fieldValueObject) => ({
				value: Number(prev.value) + cartValueStep,
				modified: true,
			}));
		id === 'distance' &&
			setValue((prev: fieldValueObject) => ({
				value: Number(prev.value) + distanceStep,
				modified: true,
			}));
		id === 'items' &&
			setValue((prev: fieldValueObject) => ({
				value: Number(prev.value) + itemsStep,
				modified: true,
			}));
	};

	const changeInputHandler: ChangeEventHandler = (e: ChangeEvent) => {
		const inputValue = (e.target as HTMLInputElement).value;
		const dateType = (e.target as HTMLInputElement).type;

		if (inputType === 'number') {
			id === 'cart'
				? setValue({
						value: Math.floor(Number(inputValue) * 100) / 100,
						modified: true,
				  })
				: setValue({
						value: Math.floor(Number(inputValue)),
						modified: true,
				  });
		} else {
			dateType === 'time'
				? setValue((prev: fieldValueObject) => {
						const prevDay = (prev.value as DateObject).day;
						return {
							value: { day: prevDay, time: inputValue },
							modified: prev.modified || (prevDay !== '' && inputValue !== ''),
						};
				  })
				: setValue((prev: fieldValueObject) => {
						const prevTime = (prev.value as DateObject).time;
						return {
							value: { day: inputValue, time: prevTime },
							modified: prev.modified || (prevTime !== '' && inputValue !== ''),
						};
				  });
		}
	};

	return (
		<>
			{inputType === 'number' && typeof fieldValue.value === 'number' && (
				<div className={styles['calculator-field']}>
					<div className={styles['div-title']}>
						<label>{title}</label>
						{fieldValue.modified && fieldValue.value === 0 && (
							<span> {t('errorMsgNumber')}</span>
						)}
					</div>

					<div className={styles['number-container']}>
						<BtnQuantity
							clickHandler={decreaseFieldHandler}
							direction="decrement"
						/>
						<input
							className={`${styles['input-quantity']} ${
								fieldValue.modified && fieldValue.value === 0
									? utilityClasses['input-error']
									: ''
							}`}
							type={inputType}
							min="0"
							step={id === 'cart' ? 0.5 : 1}
							onChange={changeInputHandler}
							value={fieldValue.value as number}
							required
						/>
						<BtnQuantity
							clickHandler={increaseFieldHandler}
							direction="increment"
						/>
					</div>
					<p className={styles['p-unit']}>{unit}</p>
				</div>
			)}

			{inputType === 'date' && typeof fieldValue.value !== 'number' && (
				<div
					className={`${styles['calculator-field']} ${styles['date-field']}`}
				>
					<div className={styles['div-title']}>
						<label>{title}</label>
						{fieldValue.modified &&
							(fieldValue.value.day === '' || fieldValue.value.time === '') && (
								<span>{t('errorMsgDate')}</span>
							)}
					</div>
					<input
						className={`${styles['input-date']} ${
							fieldValue.modified && fieldValue.value.day === ''
								? utilityClasses['input-error']
								: ''
						}`}
						type={'date'}
						onChange={changeInputHandler}
						value={fieldValue.value.day}
						required
					/>
					<input
						className={`${styles['input-date']} ${
							fieldValue.modified && fieldValue.value.time === ''
								? utilityClasses['input-error']
								: ''
						}`}
						type={'time'}
						onChange={changeInputHandler}
						value={fieldValue.value.time}
						required
					/>
				</div>
			)}
		</>
	);
};
