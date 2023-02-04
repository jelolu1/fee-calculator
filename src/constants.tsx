/* Calculate Fee Constants */

export namespace calculatorFeeConstants {
	export const minCartValue: number = 10;
	export const minDistance: number = 1000;
	export const minDistanceFee: number = 2;
	export const extraDistanceInterval: number = 500;
	export const nonChargedItems: number = 4;
	export const itemFee: number = 0.5;
	export const limitBulkFee: number = 12;
	export const bulkFee: number = 1.2;
	export const rushDay: number = 5;
	export const startRushHour: number = 15;
	export const endRushHour: number = 19;
	export const rushHourExtra: number = 0.2;
	export const maxFee: number = 15;
	export const freeDeliveryMinimum: number = 100;
}

/* Input Steps Constants*/

export namespace calculatorFeeConstants {
	export const cartValueStep: number = 1;
	export const distanceStep: number = 50;
	export const itemsStep: number = 1;
	export const minNumberValue: number = 0;
}

/* Custom Interfaces */

interface calculatedFeeInterface {
	minimumFee: number;
	distanceFee: number;
	itemsFee: number;
	rushHourFee: number;
	exceedingFeeReduction: number;
	totalFeeReduction: number;
	totalFee: number;
}

interface dateObjectInterface {
	day: string;
	time: string;
}

export class dateObject implements dateObjectInterface {
	day: string;
	time: string;
	constructor(day: string, time: string) {
		this.day = day;
		this.time = time;
	}
}

export interface fieldValueObject {
	value: dateObject | number;
	modified: boolean;
}

/* Prop Interfaces */

export interface TranslationInterfaceProps {
	i18n: any;
}

export interface CalculatorProps {
	setShowInstructionsModal: Function;
	setShowResultModal: Function;
	setCalculatedFee: Function;
	t: Function;
}

export interface CalculatorFieldProps {
	id: string;
	title: string;
	inputType: string;
	unit: string | null;
	setValue: Function;
	fieldValue: fieldValueObject;
	t: Function;
}

export interface ModalProps {
	children: JSX.Element;
	setShowModal: Function;
}

export interface propsResultModal {
	setShowResultModal: Function;
	calculatedFee: calculatedFeeInterface;
	t: Function;
}

export interface propsInstructionsModal {
	setShowInstructionsModal: Function;
	t: Function;
}
