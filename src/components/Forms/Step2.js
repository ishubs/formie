import OKButton from './OKButton';
import Question from './Question';
import { Button, notification } from 'antd';
import { useEffect } from 'react';
export default function Step1({ setStep }) {
    useEffect(() => {
        setTimeout(() => {
            openNotificationWithIcon()
        }, 4000)


    }, [])

    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type) => {
        api['success']({
            message: `${generateRandomName()} Registered`,
            description:
                '',
        });
    };
    return (
        <>
            {contextHolder}
            <div style={{ justifyContent: 'flex-start', textAlign: 'left' }}>
                <Question setStep={setStep} step={2} title={"Your WhatsApp Number"} fieldType="tel" />
            </div>
        </>
    )
}



// Array of Indian boy names with last names
const boyNames = [
    'Aarav Patel', 'Vivaan Sharma', 'Advait Singh', 'Arjun Gupta', 'Atharva Kumar', 'Aryan Verma',
    'Ishaan Mishra', 'Reyansh Joshi', 'Vihaan Malhotra', 'Aadi Choudhary',
    // Add more boy names with last names here
];

// Array of Indian girl names with last names
const girlNames = [
    'Aanya Patel', 'Anika Sharma', 'Ananya Singh', 'Diya Gupta', 'Ishani Kumar', 'Mira Verma',
    'Neha Mishra', 'Riya Joshi', 'Sara Malhotra', 'Siya Choudhary',
    // Add more girl names with last names here
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random name from the provided arrays
function generateRandomName() {
    const isGirl = Math.random() < 0.5;
    const namesArray = isGirl ? girlNames : boyNames;
    const randomIndex = getRandomInt(0, namesArray.length - 1);
    return namesArray[randomIndex];
}