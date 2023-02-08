import { ChangeEvent, ChangeEventHandler } from 'react';
import {
	DateFieldProps,
	DateObject,
	fieldValueObject,
} from '../../../constants';
import utilityClasses from '../../../styles/utility.module.css';
import styles from './DateField.module.css';

export const DateField = ({ setValue, fieldValue }: DateFieldProps) => {
	const changeInputHandler: ChangeEventHandler = (e: ChangeEvent) => {
		const inputValue = (e.target as HTMLInputElement).value;
		const dateType = (e.target as HTMLInputElement).type;

		setValue((prev: fieldValueObject) => {
			switch (dateType) {
				case 'time':
					const prevDay = (prev.value as DateObject).day;
					return {
						value: {
							day: prevDay,
							time: inputValue,
						},
						modified: prev.modified || (prevDay !== '' && inputValue !== ''),
					};
				case 'date':
					const prevTime = (prev.value as DateObject).time;
					return {
						value: {
							day: inputValue,
							time: prevTime,
						},
						modified: prev.modified || (prevTime !== '' && inputValue !== ''),
					};
				default:
					return prev as fieldValueObject;
			}
		});
	};

	return (
		<div className={styles['date-field']}>
			<input
				className={`${styles['input-date']} ${
					fieldValue.modified && (fieldValue.value as DateObject).day === ''
						? utilityClasses['input-error']
						: ''
				}`}
				type={'date'}
				onChange={changeInputHandler}
				value={(fieldValue.value as DateObject).day}
				required
			/>
			<input
				className={`${styles['input-date']} ${
					fieldValue.modified && (fieldValue.value as DateObject).time === ''
						? utilityClasses['input-error']
						: ''
				}`}
				type={'time'}
				onChange={changeInputHandler}
				value={(fieldValue.value as DateObject).time}
				required
			/>
		</div>
	);
};
