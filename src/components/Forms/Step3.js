import OKButton from './OKButton';
import Question from './Question';
export default function Step3({ setStep }) {

    return (
        <div style={{ justifyContent: 'flex-start', textAlign: 'left' }}>
            <Question setStep={setStep} step={3} title={"Your Email ID"} fieldType="email" />
        </div>
    )
}


