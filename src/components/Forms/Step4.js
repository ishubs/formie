import { Button, notification } from 'antd';
import OKButton from './OKButton';
import Question from './Question';
import { useContext, useEffect } from 'react';
import { FormDataContext } from './Step';
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
export default function Step3({ setStep }) {

    useEffect(() => {
        setTimeout(() => {
            openNotificationWithIcon()
        }, 4000)

        setTimeout(() => {
            openNotificationWithIcon()
        }, 16000)

    }, [])

    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type) => {
        api['success']({
            message: `${generateRandomName()} Registered`,
            description:
                '',
        });
    };

    const { formData } = useContext(FormDataContext)

    const handlePayNow = () => {
        submit({ ...formData, button: "pay_now" }).then(() => {
            window.open('https://wa.me/+919346009605?text=I%20Would%20like%20to%20join%20the%20masterclass')
        })
    }

    const handleGiveMeACall = () => {
        submit({ ...formData, button: "call_back" }).then(() => {
            setStep(5)
        })
    }


    const submit = async (data) => {
        console.log(formData)
        try {
            const docRef = await addDoc(collection(db, "leads-1"), data);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    const handleCancel = () => {
        submit({ ...formData, button: "cancel" }).then(() =>
            setStep('cancel'))
    }

    return (
        <>
            {contextHolder}
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                <div>
                    <div className='title' style={{ textAlign: 'center', marginBottom: '50px' }}> Don't Miss a chance to Learn How to make a minimum of Rs 500 / hour as a beginner</div>
                </div>
                <div>
                    <div style={{ textAlign: 'center' }}>The Price of this course is Rs 197</div>
                    <div className='title' style={{ textAlign: 'center', marginTop: '30px' }}>We have limited seats</div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center', marginTop: '30px', flexDirection: 'column', gap: '10px' }}>
                        <Button type="primary" style={{ width: '100%' }} size="large" onClick={() => handlePayNow()}>Pay ₹197</Button>
                        <Button size='large' style={{ width: '100%' }} onClick={() => handleGiveMeACall()} >Give me a call back</Button>
                    </div>
                </div>
                <div style={{ position: 'absolute', bottom: '60px', textAlign: 'center', width: '100%', right: '0', left: '0' }}>
                    <div>I cannot pay this Amount</div>
                    <Button style={{ marginTop: '20px' }}
                        onClick={handleCancel}
                    >Cancel</Button>
                </div>
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