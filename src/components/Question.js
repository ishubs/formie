import OKButton from "./OKButton"
import { useState, useContext } from "react"
import { FormDataContext } from "./Step"
export default function Question({ fieldType, title, setStep, step, }) {
    const [placeholder, setPlaceholder] = useState('')
    const { formData, setFormData } = useContext(FormDataContext)

    useState(() => {
        if (fieldType == 'name')
            setPlaceholder('Shubham Giri')
        else if (fieldType === 'email')
            setPlaceholder('shubsgiri@gmail.com')
        else if (fieldType === 'tel')
            setPlaceholder('9346009605')
    }, [step])


    const handleChange = (e) => {
        setFormData({
            formData,
            // [fieldType]: e.target.value
            [fieldType]: e.target.value
        })
    }

    return (
        <>
            <div className="title">{title}</div>
            <div style={{ marginTop: '40px' }}>
                <div style={{ marginTop: "20px" }}>
                    <input value={formData[fieldType]} onChange={handleChange} type={fieldType} size='large' className='input-field ' placeholder={placeholder} />
                </div>
                <OKButton setStep={setStep} disabled={!(formData[fieldType]?.length > 0)} step={step} />
            </div>
        </>
    )
}