import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calculator } from './components/Calculator/Calculator';
import InstructionsModal from './components/Modals/InstructionsModal';
import ResultModal from './components/Modals/ResultModal';
import { BubbleBackground } from './components/UI/BubbleBackground';
import TranslationInterface from './components/UI/TranslationInterface';

function App() {
	const [showInstructionsModal, setShowInstructionsModal] =
		useState<boolean>(false);
	const [showResultModal, setShowResultModal] = useState<boolean>(false);
	const [calculatedFee, setCalculatedFee] = useState<number>(0);
	const { t, i18n } = useTranslation();

	return (
		<>
			<TranslationInterface i18n={i18n} />
			<Calculator
				setShowInstructionsModal={setShowInstructionsModal}
				setShowResultModal={setShowResultModal}
				setCalculatedFee={setCalculatedFee}
				t={t}
			/>
			{showResultModal && (
				<ResultModal
					setShowResultModal={setShowResultModal}
					calculatedFee={calculatedFee}
					t={t}
				/>
			)}
			{showInstructionsModal && (
				<InstructionsModal
					setShowInstructionsModal={setShowInstructionsModal}
					t={t}
				/>
			)}
			<BubbleBackground />
		</>
	);
}

export default App;
