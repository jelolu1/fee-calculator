import { useState } from 'react';
import { propsResultModal } from '../../constants';
import utilityClasses from '../../styles/utility.module.css';
import { Modal } from '../UI/Modal';
import styles from './ResultModal.module.css';

export const ResultModal = ({
	setShowResultModal,
	calculatedFee,
	t,
}: propsResultModal) => {
	const [displayed, setDisplayed] = useState(false);

	return (
		<Modal setShowModal={setShowResultModal}>
			<>
				<h2>{t('resultModal.title').toUpperCase()}</h2>
				<span className={styles['span-result']}>
					{calculatedFee.totalFee.toFixed(2)} €
				</span>
				<button
					onClick={() => setDisplayed((prev) => !prev)}
					className={styles['display-btn']}
				>
					<svg
						className={
							displayed
								? utilityClasses['rotated']
								: utilityClasses['not-rotated']
						}
						height="48"
						width="48"
					>
						<path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z" />
					</svg>
					{t('resultModal.display').toUpperCase()}
					<svg
						className={
							displayed
								? utilityClasses['rotated']
								: utilityClasses['not-rotated']
						}
						height="48"
						width="48"
					>
						<path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z" />
					</svg>
				</button>

				<div
					className={
						displayed ? utilityClasses['open'] : utilityClasses['closed']
					}
				>
					{displayed && (
						<ul className={styles['display-list']}>
							<li>
								<div className={styles['display-element']}>
									<h4>{t('resultModal.minimumFee')}</h4>
									<span className={styles['span-result']}>
										{calculatedFee.minimumFee.toFixed(2)} €
									</span>
								</div>
							</li>
							<li>
								<div className={styles['display-element']}>
									<h4>{t('resultModal.distanceFee')}</h4>
									<span className={styles['span-result']}>
										{calculatedFee.distanceFee.toFixed(2)} €
									</span>
								</div>
							</li>
							<li>
								<div className={styles['display-element']}>
									<h4>{t('resultModal.itemsFee')}</h4>
									<span className={styles['span-result']}>
										{calculatedFee.itemsFee.toFixed(2)} €
									</span>
								</div>
							</li>
							<li>
								<div className={styles['display-element']}>
									<h4>{t('resultModal.rushHourFee')}</h4>
									<span className={styles['span-result']}>
										{calculatedFee.rushHourFee.toFixed(2)} €
									</span>
								</div>
							</li>
							<li>
								<div className={styles['display-element']}>
									<h4>{t('resultModal.excedingFee')}</h4>
									<span className={styles['span-result']}>
										{calculatedFee.exceedingFeeReduction < 0 ? 'Yes' : 'No'}
									</span>
								</div>
								{calculatedFee.exceedingFeeReduction < 0 && (
									<div className={styles['display-fee-reduction']}>
										<h4>
											{'- '}
											{t('resultModal.feeReduction')}
										</h4>
										<p className={styles['fee-reduction']}>
											{calculatedFee.exceedingFeeReduction.toFixed(2)} €
										</p>
									</div>
								)}
							</li>
							<li>
								<div className={styles['display-element']}>
									<h4>{t('resultModal.cartSuperiorOneHundred')}</h4>
									<span className={styles['span-result']}>
										{calculatedFee.totalFeeReduction < 0 ? 'Yes' : 'No'}
									</span>
								</div>
								{calculatedFee.totalFeeReduction < 0 && (
									<div className={styles['display-fee-reduction']}>
										<h4>
											{'- '}
											{t('resultModal.feeReduction')}
										</h4>
										<p className={styles['fee-reduction']}>
											{calculatedFee.totalFeeReduction.toFixed(2)} €
										</p>
									</div>
								)}
							</li>
						</ul>
					)}
				</div>
			</>
		</Modal>
	);
};
