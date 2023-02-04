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
				<span className={styles['span-fee']}>
					{calculatedFee.totalFee.toFixed(2)} €
				</span>
				<button
					onClick={() => setDisplayed((prev) => !prev)}
					className={styles['display-btn']}
				>
					<svg
						className={displayed ? styles['rotated'] : styles['not-rotated']}
						height="48"
						width="48"
					>
						<path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z" />
					</svg>
					{t('resultModal.display').toUpperCase()}
					<svg
						className={displayed ? styles['rotated'] : styles['not-rotated']}
						height="48"
						width="48"
					>
						<path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z" />
					</svg>
				</button>
				<div className={displayed ? styles['open'] : styles['closed']}>
					<ul className={styles['display-list']}>
						<li>
							<div className={styles['div-display-element']}>
								<span>{t('resultModal.minimumFee')}</span>
								<span className={styles['span-result']}>
									{calculatedFee.minimumFee.toFixed(2)} €
								</span>
							</div>
						</li>
						<li>
							<div className={styles['div-display-element']}>
								<span>{t('resultModal.distanceFee')}</span>
								<span className={styles['span-result']}>
									{calculatedFee.distanceFee.toFixed(2)} €
								</span>
							</div>
						</li>
						<li>
							<div className={styles['div-display-element']}>
								<span>{t('resultModal.itemsFee')}</span>
								<span className={styles['span-result']}>
									{calculatedFee.itemsFee.toFixed(2)} €
								</span>
							</div>
						</li>
						<li>
							<div className={styles['div-display-element']}>
								<span>{t('resultModal.rushHourFee')}</span>
								<span className={styles['span-result']}>
									{calculatedFee.rushHourFee.toFixed(2)} €
								</span>
							</div>
						</li>
						<li>
							<div className={styles['div-display-element']}>
								<span>{t('resultModal.excedingFee')}</span>
								<span className={styles['span-result']}>
									{calculatedFee.exceedingFeeReduction < 0 ? 'Yes' : 'No'}
								</span>
							</div>
							{calculatedFee.exceedingFeeReduction < 0 && (
								<div className={styles['div-fee-reduction']}>
									<p>{t('resultModal.feeReduction')}</p>
									<p className={styles['fee-reduction']}>
										{calculatedFee.exceedingFeeReduction.toFixed(2)} €
									</p>
								</div>
							)}
						</li>
						<li>
							<div className={styles['div-display-element']}>
								<span>{t('resultModal.cartSuperiorOneHundred')}</span>
								<span className={styles['span-result']}>
									{calculatedFee.totalFeeReduction < 0 ? 'Yes' : 'No'}
								</span>
							</div>
							{calculatedFee.totalFeeReduction < 0 && (
								<div className={styles['div-fee-reduction']}>
									<p>{t('resultModal.feeReduction')}</p>
									<p className={styles['fee-reduction']}>
										{calculatedFee.totalFeeReduction.toFixed(2)} €
									</p>
								</div>
							)}
						</li>
					</ul>
				</div>
			</>
		</Modal>
	);
};

export default ResultModal;
