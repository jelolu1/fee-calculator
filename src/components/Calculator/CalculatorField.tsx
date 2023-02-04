import { ChangeEvent, MouseEvent } from 'react';
import {
	calculatorFeeConstants,
	CalculatorFieldProps,
	dateObject,
	fieldValueObject,
} from '../../constants';
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
	const handleDecreaseClick = (e: MouseEvent) => {
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

	const handleIncreaseClick = (e: MouseEvent) => {
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

	const changeInputHandler = (e: ChangeEvent) => {
		const inputValue = (e.target as HTMLInputElement).value;
		const dateType = (e.target as HTMLInputElement).type;

		if (typeof inputValue === 'number') {
			id === 'cart'
				? setValue({
						value: Math.floor(inputValue * 100) / 100,
						modified: true,
				  })
				: setValue({
						value: Math.floor(inputValue),
						modified: true,
				  });
		} else {
			dateType === 'time'
				? setValue((prev: fieldValueObject) => {
						const prevDay = (prev.value as dateObject).day;
						return {
							value: { day: prevDay, time: inputValue },
							modified: prev.modified || (prevDay !== '' && inputValue !== ''),
						};
				  })
				: setValue((prev: fieldValueObject) => {
						const prevTime = (prev.value as dateObject).time;
						return {
							value: { day: inputValue, time: prevTime },
							modified: prev.modified || (prevTime !== '' && inputValue !== ''),
						};
				  });
		}
	};

	return (
		<>
			{typeof fieldValue.value === 'number' && (
				<div className={styles['number-field']}>
					<div className={styles['div-title']}>
						<p>{title}</p>
						{fieldValue.modified && fieldValue.value === 0 && (
							<span> {t('errorMsgNumber')}</span>
						)}
					</div>

					<div className={styles['number-container']}>
						<button
							className={styles['btn-quantity']}
							onClick={handleDecreaseClick}
						>
							<span className={styles['span-icon']}>
								<svg
									viewBox="0 0 16 16"
									width="1em"
									height="1em"
									role="presentation"
									focusable="false"
									aria-hidden="true"
								>
									<path d="M14.125 7.344H1.875v1.312h12.25V7.344z" />
								</svg>
							</span>
						</button>
						<input
							className={styles['input-quantity']}
							type={inputType}
							min="0"
							step={id === 'cart' ? 0.5 : 1}
							onChange={changeInputHandler}
							value={fieldValue.value}
							required
						/>
						<button
							className={styles['btn-quantity']}
							onClick={handleIncreaseClick}
						>
							<span className={styles['span-icon']}>
								<svg
									viewBox="0 0 16 16"
									width="1em"
									height="1em"
									role="presentation"
									focusable="false"
									aria-hidden="true"
								>
									<path d="M14.125 7.344H8.656V1.875H7.344v5.469H1.875v1.312h5.469v5.469h1.312V8.656h5.469V7.344z" />
								</svg>
							</span>
						</button>
					</div>
					<p className={styles['p-unit']}>{unit}</p>
				</div>
			)}

			{typeof fieldValue.value !== 'number' && (
				<div className={styles['date-field']}>
					<div className={styles['div-title']}>
						<p>{title}</p>
						{fieldValue.modified &&
							(fieldValue.value.day === '' || fieldValue.value.time === '') && (
								<span>{t('errorMsgDate')}</span>
							)}
					</div>
					<input
						className={styles['input-date']}
						type={'date'}
						onChange={changeInputHandler}
						value={fieldValue.value.day}
						required
					/>
					<input
						className={styles['input-date']}
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
