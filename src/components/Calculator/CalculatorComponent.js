import { Button, Select, Slider } from "antd";
import { Option } from "antd/es/mentions";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import './index.css'

const options = {
    "Front-end Developer": 5,
    "Back-end Developer": 5,
    "Full-stack Developer": 5,
    "Mobile Developer": 10,
    "UI/UX Designer": 3,
    "Graphic Designer": 5,
    "Content Writer": 5,
    "Digital Marketer": 7,
    "Video Editor": 5,
    "Virtual Assistant": 3,
    "Accountant": 10,
    "devops": 10,

}



const marks = {
    0: '0',
    10: '10',
    15: '15',
    20: '20',
    25: '25',
    30: '30',
    40: '40',
};

export default function Calculator({ result, setResult }) {
    console.log(result)
    const [hours, setHours] = useState(null);
    const [rate, setRate] = useState(null);
    const [profession, setProfession] = useState(null)
    const [experience, setExperience] = useState(null)
    const amountRef = useRef(null);
    const navigate = useNavigate();
    const handleChange = (value) => {
        setProfession(value);
        setRate(options[value])
    }

    const handleExperienceChange = (value) => {
        setExperience(value)
    }

    const calculateResult = () => {
        const value = experience * rate * hours * 4 * 82;
        setResult(value)
        console.log(value)
    }

    const handleHoursChange = (hours) => {
        setHours(hours)
    }

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Intl.NumberFormat('en-IN').format(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }


    useEffect(() => {
        if (amountRef.current) {
            animateValue(amountRef.current, 0, result, 1000);
        }
    }, [result])
    return (
        <>
            <div className="result">
                <div className="title" style={{ color: 'green', fontWeight: 'bold', fontSize: '48px', marginTop: '10px' }}  > <span>₹</span> <span ref={amountRef}>{Intl.NumberFormat('en-IN').format(result)}</span></div>
                <div className="title">Your Monthly Income</div>
            </div>
            <Select
                showSearch
                value={profession}
                style={{ width: '100%' }}
                placeholder="Select your profession"
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                {Object.keys(options).map((option) => (<Option value={option}>{option}</Option>))}
            </Select>
            <Select
                value={experience}
                style={{ width: '100%' }}
                onChange={handleExperienceChange}
                placeholder="Select your experience">
                <Option value={1}>Beginner - 0 years</Option>
                <Option value={2}>Intermediate - 2 years</Option>
                <Option value={3}>Senior - 3 years</Option>
                <Option value={5}>Expert - 5 years</Option>
            </Select>
            <div style={{ textAlign: 'left', marginTop: '20px' }}>
                <label> How many hours do you work in a week?</label>
                <Slider onChange={handleHoursChange} marks={marks} step={null} defaultValue={0} max={40} />
            </div>
            <Button type="primary" onClick={calculateResult} style={{ marginTop: '20px' }}>Calculate</Button>

        </>
    )
}