import { useEffect, useState } from 'react';
import {
	calculatorFeeConstants,
	CalculatorProps,
	dateObject,
	fieldValueObject,
} from '../../constants';
import styles from './Calculator.module.css';
import { CalculatorField } from './CalculatorField';

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
		value: new dateObject('', ''),
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

	const calculateFee = (
		cValue: number,
		dDistance: number,
		nItems: number,
		oDate: dateObject
	) => {
		let fee = 0;
		const {
			minCartValue,
			minDistance,
			minDistanceFee,
			extraDistanceInterval,
			nonChargedItems,
			itemFee,
			limitBulkFee,
			bulkFee,
			rushDay,
			startRushHour,
			endRushHour,
			rushHourExtra,
			maxFee,
			freeDeliveryMinimum,
		} = calculatorFeeConstants;

		if (cValue < minCartValue) {
			fee += minCartValue - cValue;
		}

		dDistance <= minDistance
			? (fee += minDistanceFee)
			: (fee += Math.ceil(dDistance / extraDistanceInterval));

		if (nItems > nonChargedItems) {
			fee += (nItems - nonChargedItems) * itemFee;
			if (nItems > limitBulkFee) fee += bulkFee;
		}

		const date = new Date(oDate.day + oDate.time);
		const weekDay = date.getUTCDay();
		const hour = date.getHours();
		if (weekDay === rushDay && hour >= startRushHour && hour <= endRushHour) {
			fee *= rushHourExtra;
		}

		if (fee > maxFee) fee = maxFee;

		if (cValue >= freeDeliveryMinimum) fee = 0;

		setShowResultModal(true);
		setCalculatedFee(fee);
	};

	const submitClickHandler = (e: any) => {
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
			orderDate.value
		);
	};

	useEffect(() => {
		if (
			cartValue.value > 0 &&
			deliveryDistance.value > 0 &&
			numberOfItems.value > 0 &&
			(orderDate.value as dateObject).day !== '' &&
			(orderDate.value as dateObject).time !== ''
		) {
			setBtnOn(true);
		} else {
			setBtnOn(false);
		}
	}, [cartValue, deliveryDistance, numberOfItems, orderDate]);

	return (
		<section className={styles['calc-container']}>
			<div className={`${styles['spacer']} ${styles['calc-header']}`}>
				<button
					onClick={() => setShowInstructionsModal(true)}
					className={styles['btn-info']}
				>
					i
				</button>
			</div>
			<form className={styles['calc-form']}>
				{calculatorFields.map((field) => (
					<CalculatorField
						key={field.id}
						id={field.id}
						title={field.title}
						inputType={field.inputType}
						unit={field.unit}
						setValue={field.setValue}
						fieldValue={field.fieldValue}
						t={t}
					/>
				))}
				<button
					onClick={submitClickHandler}
					className={`${styles['calc-btn']} ${
						btnOn ? styles['btn-on'] : styles['btn-off']
					}`}
				>
					{t('calculateFee').toUpperCase()}
				</button>
			</form>

			<div className={`${styles['spacer']} ${styles['calc-footer']}`} />
		</section>
	);
};
