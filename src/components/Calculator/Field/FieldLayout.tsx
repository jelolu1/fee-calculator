import { useEffect, useState } from 'react';
import { DateObject, FieldLayoutProps } from '../../../constants';
import styles from './FieldLayout.module.css';

export const FieldLayout = ({
	children,
	title,
	fieldValue,
	inputType,
	t,
}: FieldLayoutProps) => {
	const [showError, setShowError] = useState(false);

	useEffect(() => {
		switch (inputType) {
			case 'number':
				setShowError(fieldValue.modified && fieldValue.value === 0);
				break;
			case 'date':
				const value = fieldValue.value as DateObject;
				setShowError(
					fieldValue.modified && (value.day === '' || value.time === '')
				);

				break;
			default:
		}
	}, [fieldValue]);

	return (
		<div className={styles['calculator-field']}>
			<div className={styles['div-title']}>
				<label>{title}</label>
				{showError && (
					<span>
						{inputType === 'number' ? t('errorMsgNumber') : t('errorMsgDate')}
					</span>
				)}
			</div>
			{children}
		</div>
	);
};
