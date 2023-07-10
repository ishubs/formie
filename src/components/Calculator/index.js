import { Button, Select } from "antd";
import Slider from "./Slider";
import { Option } from "antd/es/mentions";
import "./index.css";
import { useState } from "react";
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

export default function Calculator() {
    const [calculated, setCalculated] = useState(false);
    const [hours, setHours] = useState(null);
    const [rate, setRate] = useState(null);
    const [profession, setProfession] = useState(null)

    return (
        <>
            {calculated ? <MonthlyIncome hours={hours} rate={rate} /> : <Calci setProfession={setProfession} profession={profession} hours={hours} rate={rate} setHours={setHours} setRate={setRate} />}
        </>
    );
}

const MonthlyIncome = ({ hours, rate }) => {
    return (
        <div className="monthly-income">
            <div className="title">Monthly Income</div>
            <div className="value">₹ {hours * rate * 4}</div>
        </div>
    )
}

const Calci = ({ hours, rate, setRate, setHours, profession, setProfession }) => {
    const handleChange = (value) => {
        // console.log(`selected ${value}`);
        setProfession(value);
    }

    const handleExperienceChange = (value) => {
        // console.log(`selected ${value}`);
        setRate(value);
    }

    return <div className="calculator">
        <h1>Freelance Income Calculator</h1>
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
            value={rate}
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
            <Slider />
        </div>
        <Button type="primary" style={{ marginTop: '20px' }}>Calculate</Button>
    </div>
}