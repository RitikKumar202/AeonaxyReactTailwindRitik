import { useEffect, useState } from 'react';
import InterestPage from './components/steps/InterestPage';
import LearningPaths from './components/steps/LearningPaths';
import LoadingPage from './components/steps/LoadingPage';
import MathComfortLevelPage from './components/steps/MathComfortLevelPage';
import PersonalizationPage from './components/steps/PersonalizationPage';
import QuotesPage from './components/steps/QuotesPage';
import WelcomePage from './components/steps/WelcomePage';
import { MdArrowBackIos } from 'react-icons/md';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPersonalizationOption, setSelectedPersonalizationOption] = useState(null);
  const [selectedInterestOption, setSelectedInterestOption] = useState(null);
  const [selectedMathsLevelOption, setSelectedMathsLevelOption] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentStep === 6) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setCurrentStep(7);
      }, 3000);
    }
  }, [currentStep]);

  const handleNextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  return (
    <div className='font-Poppins'>
      <div className='relative top-2 md:top-4 lg:top-4 container mx-auto flex items-center justify-center'>
        {currentStep > 1 && currentStep < 6 && (
          <div className='hover:cursor-pointer absolute left-2 lg:left-[62px] top-[12px]' onClick={handlePreviousStep}>
            <MdArrowBackIos />
          </div>
        )}
        {currentStep < 6 && (
          <div className="w-[85%] bg-[#e8e8e8] h-[6px] mt-4 rounded-md">
            <div className={`bg-[#119D7D] h-[6px] rounded-md`} style={{ width: `${(currentStep / 5) * 100}%` }}></div>
          </div>
        )}
      </div>
      <div className='w-full h-screen mt-10 lg:mt-0 flex flex-col items-center justify-evenly'>
        <div className="flex flex-col items-center justify-center">
          {currentStep === 1 && (
            <PersonalizationPage
              isLoading={isLoading}
              currentStep={currentStep}
              handleNextStep={handleNextStep}
              selectedOption={selectedPersonalizationOption}
              setSelectedOption={setSelectedPersonalizationOption}
            />
          )}
          {currentStep === 2 && (
            <InterestPage
              isLoading={isLoading}
              currentStep={currentStep}
              handleNextStep={handleNextStep}
              selectedOption={selectedInterestOption}
              setSelectedOption={setSelectedInterestOption}
            />
          )}
          {currentStep === 3 && <WelcomePage isLoading={isLoading} currentStep={currentStep} handleNextStep={handleNextStep} />}
          {currentStep === 4 && (
            <MathComfortLevelPage
              isLoading={isLoading}
              currentStep={currentStep}
              handleNextStep={handleNextStep}
              selectedOption={selectedMathsLevelOption}
              setSelectedOption={setSelectedMathsLevelOption}
            />
          )}
          {currentStep === 5 && <QuotesPage isLoading={isLoading} currentStep={currentStep} handleNextStep={handleNextStep} />}
          {isLoading && <LoadingPage />}
          {currentStep === 7 && <LearningPaths />}
        </div>
      </div>
    </div>
  );
}

export default App;
