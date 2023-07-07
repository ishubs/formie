export default function OKButton({ setStep, step, ...props }) {
    const handleOnclick = () => {
        setStep(step + 1)
    }
    console.log(props)
    return (
        <button onClick={handleOnclick} className="ok-btn" {...props}>
            <span style={{ fontSize: '16px' }}>Ok</span>
            <span style={{ marginLeft: '8px' }}> <Tick /> </span>
        </button>
    )
}

const Tick = () => {
    return (
        <svg fill="white" height="13" width="16"><path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path></svg>
    )
}