import { MouseEvent, useEffect, useState } from 'react';
import { TranslationInterfaceProps } from '../../constants';
import styles from './TranslationInterface.module.css';

const lngsList = {
	en: { nativeName: 'English' },
	de: { nativeName: 'Deutsch' },
	sp: { nativeName: 'Spanish' },
};

const TranslationInterface = ({ i18n }: TranslationInterfaceProps) => {
	const [currentLng, setCurrentLng] = useState<string>('en');

	const clickHandler = (e: MouseEvent) => {
		e.preventDefault();
		setCurrentLng((e.target as HTMLInputElement).id);
	};

	useEffect(() => {
		i18n.changeLanguage(currentLng);
	}, [currentLng]);

	return (
		<div className={styles['translation-container']}>
			{Object.keys(lngsList).map((lng) => {
				return (
					<button
						key={lng}
						id={lng}
						onClick={clickHandler}
						className={currentLng === lng ? styles['active'] : ''}
						disabled={currentLng === lng}
					>
						{lng.toLocaleUpperCase()}
					</button>
				);
			})}
		</div>
	);
};

export default TranslationInterface;
