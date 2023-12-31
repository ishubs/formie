import React, { useState, createContext } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Welcome from './Welcome';
import EndScreen from './EndScreen'
import CancelScreen from './CancelScreen'
import Step4 from './Step4';
import './forms.css';
export const FormDataContext = createContext(null);

export default function Step() {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ name: '', email: '', tel: '' })

    const Currentstep = (step) => {
        switch (step) {
            // case 0:
            // return <Welcome setStep={setStep} />;
            case 1:
                return <Step1 setStep={setStep} />;
            case 2:
                return <Step2 setStep={setStep} />;
            case 3:
                return <Step3 setStep={setStep} />;
            // case 4:
            //     return <Step4 setStep={setStep} />;
            case 4:
                return <EndScreen />;
            case 'cancel':
                return <CancelScreen />
            default:
                return null;
        }
    }


    return (
        <div className='section-wrapper'>
            <FormDataContext.Provider value={{ formData, setFormData }}>
                <div className='section'>
                    {Currentstep(step)}
                </div>
            </FormDataContext.Provider>
        </div>
    )
}