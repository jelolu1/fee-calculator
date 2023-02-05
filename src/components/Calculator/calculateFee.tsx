import {
	calculatedFeeInterface,
	calculatorFeeConstants,
	DateObject,
} from '../../constants';

export const calculateFee = (
	cValue: number,
	dDistance: number,
	nItems: number,
	oDate: DateObject,
	setShowResultModal: Function,
	setCalculatedFee: Function
) => {
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

	const fee: calculatedFeeInterface = {
		minimumFee: 0,
		distanceFee: 0,
		itemsFee: 0,
		rushHourFee: 0,
		exceedingFeeReduction: 0,
		totalFee: 0,
		totalFeeReduction: 0,
	};

	if (
		cValue === 0 ||
		dDistance === 0 ||
		nItems === 0 ||
		oDate.day === '' ||
		oDate.time === ''
	)
		return fee;

	if (cValue < minCartValue) {
		fee.minimumFee = minCartValue - cValue;
	}

	fee.distanceFee =
		dDistance <= minDistance
			? minDistanceFee
			: Math.ceil(dDistance / extraDistanceInterval);

	if (nItems > nonChargedItems) {
		fee.itemsFee = (nItems - nonChargedItems) * itemFee;
		if (nItems > limitBulkFee) fee.itemsFee += bulkFee;
	}

	fee.totalFee = fee.minimumFee + fee.distanceFee + fee.itemsFee;

	const date = new Date(oDate.day + ';' + oDate.time);
	const weekDay = date.getUTCDay();
	const hour = date.getHours();
	const minutes = date.getMinutes();

	if (
		weekDay === rushDay &&
		hour >= startRushHour &&
		(hour < endRushHour || (hour === endRushHour && minutes === 0))
	) {
		fee.rushHourFee = Math.floor(fee.totalFee * rushHourExtra * 100) / 100;
	}

	fee.totalFee += fee.rushHourFee;

	if (fee.totalFee > maxFee) {
		fee.exceedingFeeReduction = maxFee - fee.totalFee;
		fee.totalFee = maxFee;
	}

	if (cValue >= freeDeliveryMinimum) {
		fee.totalFeeReduction = -fee.totalFee;
		fee.totalFee = 0;
	}

	setShowResultModal(true);
	setCalculatedFee(fee);
};
