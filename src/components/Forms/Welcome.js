import { Button } from "antd"


export default function Welcome({ setStep }) {
    console.log("welcome")
    return (
        <div className="welcome">
            <div className="top">
                <div className="title" style={{ color: 'blue' }}>Did you know?</div>
                <div className="title">Freelancers Make an average of $20 / hour</div>
            </div>
            <div clasName="main">
                <div className="title" style={{ fontWeight: "bolder" }}>Hi there!</div>
                <div className="title" style={{ fontWeight: "bolder" }}>It's Great to see you taking your first step</div>
                <Button className="start-btn" type="primary" size="large" onClick={() => setStep(1)}>Lets Start</Button>
            </div>
            <div className="bottom">
                <div>What will you learn?</div>
                <div>
                    At the End of the Masterclass
                    You will be able to start your freelancing career
                    and Get paid per hour for your skills
                </div>
                <Button onClick={() => { window.open('https://ishubs.notion.site/Join-Now-f06b375eca704a42918dbb5fd81501d0?pvs=4', '_blank') }}>Give me more details</Button>
            </div>
        </div>
    )
}