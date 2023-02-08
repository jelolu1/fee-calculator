import { propsBtnQuantity } from '../../../constants';
import styles from './BtnQuantity.module.css';

export const BtnQuantity = ({ clickHandler, direction }: propsBtnQuantity) => {
	return (
		<button className={styles['btn-quantity']} onClick={clickHandler}>
			<span className={styles['span-icon']}>
				<svg viewBox="0 0 16 16" width="1em" height="1em">
					{direction === 'decrement' && (
						<path d="M14.125 7.344H1.875v1.312h12.25V7.344z" />
					)}
					{direction === 'increment' && (
						<path d="M14.125 7.344H8.656V1.875H7.344v5.469H1.875v1.312h5.469v5.469h1.312V8.656h5.469V7.344z" />
					)}
				</svg>
			</span>
		</button>
	);
};
