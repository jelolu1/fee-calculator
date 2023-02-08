import {
	ChangeEvent,
	ChangeEventHandler,
	MouseEvent,
	MouseEventHandler,
} from 'react';
import {
	calculatorFeeConstants,
	fieldValueObject,
	NumberFieldProps,
} from '../../../constants';
import utilityClasses from '../../../styles/utility.module.css';
import { BtnQuantity } from './BtnQuantity';
import styles from './NumberField.module.css';

export const NumberField = ({
	id,
	inputType,
	unit,
	setValue,
	fieldValue,
}: NumberFieldProps) => {
	const changeInputHandler: ChangeEventHandler = (e: ChangeEvent) => {
		const inputValue = Number((e.target as HTMLInputElement).value);

		setValue({
			value: Math.floor(id === 'cart' ? (inputValue * 100) / 100 : inputValue),
			modified: true,
		});
	};
	const decreaseFieldHandler: MouseEventHandler = (e: MouseEvent) => {
		e.preventDefault();

		const { cartValueStep, distanceStep, itemsStep, minNumberValue } =
			calculatorFeeConstants;

		switch (id) {
			case 'cart':
				setValue((prev: fieldValueObject) => ({
					value:
						prev.value >= cartValueStep
							? Number(prev.value) - cartValueStep
							: minNumberValue,
					modified: true,
				}));
				break;
			case 'distance':
				setValue((prev: fieldValueObject) => ({
					value:
						prev.value >= distanceStep
							? Number(prev.value) - distanceStep
							: minNumberValue,
					modified: true,
				}));
				break;
			case 'items':
				setValue((prev: fieldValueObject) => ({
					value:
						prev.value >= itemsStep
							? Number(prev.value) - itemsStep
							: minNumberValue,
					modified: true,
				}));
				break;
			default:
				break;
		}
	};

	const increaseFieldHandler: MouseEventHandler = (e: MouseEvent) => {
		e.preventDefault();

		const { cartValueStep, distanceStep, itemsStep } = calculatorFeeConstants;

		switch (id) {
			case 'cart':
				setValue((prev: fieldValueObject) => ({
					value: Number(prev.value) + cartValueStep,
					modified: true,
				}));
				break;
			case 'distance':
				setValue((prev: fieldValueObject) => ({
					value: Number(prev.value) + distanceStep,
					modified: true,
				}));
				break;
			case 'items':
				setValue((prev: fieldValueObject) => ({
					value: Number(prev.value) + itemsStep,
					modified: true,
				}));
				break;
			default:
				break;
		}
	};

	return (
		<>
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
		</>
	);
};
