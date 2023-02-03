import { useState } from 'react';
import { Calculator } from './components/Calculator/Calculator';
import InstructionsModal from "./components/Modals/InstructionsModal";
import ResultModal from "./components/Modals/ResultModal";
import { BubbleBackground } from './components/UI/BubbleBackground';

// https://github.com/woltapp/engineering-summer-intern-2023

// TODO
// Maybe change background
// Maybe change header and footer
// Add tests
// Add translation -> Change enter day format
// Add fee disclosure
// 
// ...

function App() {

  const [showInstructionsModal, setShowInstructionsModal] = useState<boolean>(false);
  const [showResultModal, setShowResultModal] = useState<boolean>(false);
  const [calculatedFee, setCalculatedFee] = useState<number>(0);

  return (
  <>
    <Calculator 
      setShowInstructionsModal={setShowInstructionsModal} 
      setShowResultModal={setShowResultModal}
      setCalculatedFee={setCalculatedFee}
    />
    {showResultModal && 
        <ResultModal setShowResultModal={setShowResultModal} calculatedFee={calculatedFee}/>
    }
    {showInstructionsModal && 
        <InstructionsModal setShowInstructionsModal={setShowInstructionsModal}/>
    }
    <BubbleBackground/>
  </>
  )

}

export default App
