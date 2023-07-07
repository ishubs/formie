import OKButton from './OKButton';
import Question from './Question';
import { useContext } from 'react';
import { FormDataContext } from './Step';
export default function Step1({ setStep }) {
    return (
        <div style={{ justifyContent: 'flex-start', textAlign: 'left' }}>
            <Question setStep={setStep} step={1} title={"Your Name"} fieldType="name" />
        </div>
    )
}


