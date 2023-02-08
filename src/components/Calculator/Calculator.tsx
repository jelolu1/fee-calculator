import { MouseEventHandler, useEffect, useState } from 'react';
import { CalculatorProps, DateObject, fieldValueObject } from '../../constants';
import utilityClasses from '../../styles/utility.module.css';
import { calculateFee } from './calculateFee';
import styles from './Calculator.module.css';
import { DateField } from './Field/DateField';
import { FieldLayout } from './Field/FieldLayout';
import { NumberField } from './Field/NumberField';

export const Calculator = ({
	setShowInstructionsModal,
	setShowResultModal,
	setCalculatedFee,
	t,
}: CalculatorProps) => {
	const [cartValue, setCartValue] = useState<fieldValueObject>({
		value: 0,
		modified: false,
	});
	const [deliveryDistance, setDeliveryDistance] = useState<fieldValueObject>({
		value: 0,
		modified: false,
	});
	const [numberOfItems, setNumberOfItems] = useState<fieldValueObject>({
		value: 0,
		modified: false,
	});
	const [orderDate, setOrderTime] = useState<fieldValueObject>({
		value: new DateObject('', ''),
		modified: false,
	});
	const [btnOn, setBtnOn] = useState<boolean>(false);

	const calculatorFields = [
		{
			id: 'cart',
			title: t('cartValue'),
			inputType: 'number',
			unit: '€',
			setValue: setCartValue,
			fieldValue: cartValue,
		},
		{
			id: 'distance',
			title: t('deliveryDistance'),
			inputType: 'number',
			unit: 'm',
			setValue: setDeliveryDistance,
			fieldValue: deliveryDistance,
		},
		{
			id: 'items',
			title: t('numberOfItems'),
			inputType: 'number',
			unit: null,
			setValue: setNumberOfItems,
			fieldValue: numberOfItems,
		},
		{
			id: 'date',
			title: t('orderTime'),
			inputType: 'date',
			unit: null,
			setValue: setOrderTime,
			fieldValue: orderDate,
		},
	];

	const submitClickHandler: MouseEventHandler = (e: any) => {
		e.preventDefault();

		if (!btnOn) return;
		if (
			typeof cartValue.value !== 'number' ||
			typeof deliveryDistance.value !== 'number' ||
			typeof numberOfItems.value !== 'number' ||
			typeof orderDate.value === 'number'
		)
			return;

		calculateFee(
			cartValue.value,
			deliveryDistance.value,
			numberOfItems.value,
			orderDate.value,
			setShowResultModal,
			setCalculatedFee
		);
	};

	useEffect(() => {
		if (
			cartValue.value > 0 &&
			deliveryDistance.value > 0 &&
			numberOfItems.value > 0 &&
			(orderDate.value as DateObject).day !== '' &&
			(orderDate.value as DateObject).time !== ''
		) {
			setBtnOn(true);
		} else {
			setBtnOn(false);
		}
	}, [cartValue, deliveryDistance, numberOfItems, orderDate]);

	return (
		<main className={styles['calculator-container']}>
			<div className={`${styles['spacer']} ${styles['calculator-header']}`}>
				<button
					onClick={() => setShowInstructionsModal(true)}
					className={styles['btn-instructions']}
				>
					i
				</button>
			</div>
			<form className={styles['calculator-form']}>
				{calculatorFields.map((field) => {
					return (
						<FieldLayout
							key={field.id}
							title={field.title}
							fieldValue={field.fieldValue}
							inputType={field.inputType}
							t={t}
						>
							<>
								{field.inputType === 'number' && (
									<NumberField
										id={field.id}
										inputType={field.inputType}
										unit={field.unit}
										setValue={field.setValue}
										fieldValue={field.fieldValue}
									/>
								)}
								{field.inputType === 'date' && (
									<DateField
										id={field.id}
										setValue={field.setValue}
										fieldValue={field.fieldValue}
									/>
								)}
							</>
						</FieldLayout>
					);
				})}
				<button
					onClick={submitClickHandler}
					className={`${styles['calculator-btn']} ${
						btnOn ? utilityClasses['btn-on'] : utilityClasses['btn-off']
					}`}
				>
					{t('calculateFee').toUpperCase()}
				</button>
			</form>

			<div className={`${styles['spacer']} ${styles['calculator-footer']}`} />
		</main>
	);
};
