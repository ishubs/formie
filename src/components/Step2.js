import OKButton from './OKButton';
import Question from './Question';
export default function Step1({ setStep }) {
    return (
        <div style={{ justifyContent: 'flex-start', textAlign: 'left' }}>
            <Question setStep={setStep} step={2} title={"Your WhatsApp Number"} fieldType="tel" />
        </div>
    )
}


