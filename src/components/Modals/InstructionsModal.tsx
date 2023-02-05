import { propsInstructionsModal } from '../../constants';
import { Modal } from '../UI/Modal';
import styles from './InstructionsModal.module.css';

export const InstructionsModal = ({
	setShowInstructionsModal,
	t,
}: propsInstructionsModal) => {
	return (
		<Modal setShowModal={setShowInstructionsModal}>
			<>
				<h2>{t('instructionsModal.title').toUpperCase()}</h2>

				<h4 className={styles['instructions-title']}>
					{t('instructionsModal.subtitle')}
				</h4>
				<ul className={styles['instructions-list']}>
					<li>
						<span>{t('cartValueTitle')}</span>
						<p>{t('instructionsModal.cartValueInstructions')}</p>
					</li>
					<li>
						<span>{t('deliveryDistance')}</span>
						<p>{t('instructionsModal.deliveryDistanceInstructions')}</p>
					</li>
					<li>
						<span>{t('numberOfItems')}</span>
						<p>{t('instructionsModal.numberOfItemsInstructions')}</p>
					</li>
					<li>
						<span>{t('orderTime')}</span>
						<p>{t('instructionsModal.orderTimeInstructions')}</p>
					</li>
				</ul>
			</>
		</Modal>
	);
};
