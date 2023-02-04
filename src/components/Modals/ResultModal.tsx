import { useState } from 'react';
import { propsResultModal } from '../../constants';
import { Modal } from '../UI/Modal';
import styles from './ResultModal.module.css';

const ResultModal = ({
	setShowResultModal,
	calculatedFee,
	t,
}: propsResultModal) => {
	const [displayed, setDisplayed] = useState(false);

	return (
		<Modal setShowModal={setShowResultModal}>
			<>
				<h2 className={styles['calculated-fee-title']}>
					{t('resultModal.title').toUpperCase()}
				</h2>
				<span className={styles['span-fee']}>{calculatedFee.toFixed(2)} €</span>
				<div></div>
			</>
		</Modal>
	);
};

export default ResultModal;
