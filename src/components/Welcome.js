import { Button } from "antd"


export default function Welcome({ setStep }) {
    console.log("welcome")
    return (
        <div className="welcome">
            <div className="title">Hi there!</div>
            <div className="title">Great to see you want to learn freelancing</div>
            <div className="description"></div>
            <Button className="start-btn" type="primary" size="large" onClick={() => setStep(1)}>Lets Start</Button>
        </div>
    )
}