// import { Layout } from "antd";
import Layout from "../../components/Layout";
import './index.css'
import { Button } from "antd";
import { useState } from "react";
import Users from "../../assets/users.png"
import Calculator from "../../components/Calculator/CalculatorComponent";
import { useNavigate } from "react-router-dom";
import { Collapse } from 'antd';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export default function LandingPage() {
    const navigate = useNavigate();
    const [result, setResult] = useState(0)
    const [expandIconPosition, setExpandIconPosition] = useState('start');
    const onPositionChange = (newExpandIconPosition) => {
        setExpandIconPosition(newExpandIconPosition);
    };
    const handlePayNow = () => {
        submit({ button: "pay_now" })
    }

    const submit = async (data) => {
        try {
            const docRef = await addDoc(collection(db, "leads-3"), data);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div className="landing-page">
            <div className="app-bar">
                <div className="logo">
                    FWS
                </div>
            </div>
            <div className="content">
                <div className="banner-text">
                    Learn How To make ₹500/hr using your skills
                </div>
                <div className="more-info">
                    Kickstart your Freelancing career with the masterclass. Gain all the knowledge collected over 5 years of freelancing in just 2 hours. Learn how to get your first client, how to price your services, how to get paid and much more.
                </div>
                <div className="main-cta-container">
                    {/* <a href="//api.whatsapp.com/send?phone=919346009605&text=Hi there I would Like To join the Masterclass"> */}
                    <Button className="main-cta" onClick={() => navigate('/register')}>
                        <span className="text">Start your freelance Journey</span>
                    </Button>
                    {/* </a> */}
                </div>
                <div className="users">
                    <img src={Users} />
                    <div class="users-tite">
                        40+ people  have already Registered
                    </div>
                    <div className="users-desc">
                        in the freelance masterclass on how to make ₹500 / hour as a freelancer
                    </div>
                </div>
                <div className="starts-on">
                    <div className="title">Starts This Saturday On</div>
                    <div className="title blue">15 July, 3:00 PM</div>
                </div>
                <div className="what-you-will-learn">
                    <div className="title">What You Will Learn</div>
                    <div>
                        <div className="item-list">
                            {deliverables.map((item) => {
                                return (
                                    <div className="item">
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="landing-calculator">
                    <div className="title">How Much Can You Earn as a Freelancer?</div>
                    <div className="calculator">
                        <Calculator result={result} setResult={setResult} />
                    </div>
                </div>
                <div className="faq">
                    <div className="title">FAQ</div>
                    <div className="faq-list">
                        <Collapse
                            collapsible="header"
                            defaultActiveKey={['1']}
                            onChange={onChange}
                            expandIconPosition={expandIconPosition}
                            items={faqs}
                        />
                    </div>
                </div>
                <div className="ending-note">
                    <div className="title">What are you waiting for?</div>
                    <div style={{ marginTop: "10px" }}>Register Before It's Too Late</div>
                </div>
            </div>

            {/* <div className="testimonials">
                <div className="title">Testimonials</div>
                <div className="testimonial-list">
                    <div className="testimonial">
                        <div className="testimonial-text">
                            <div className="testimonial-title">
                                "I was able to get my first client in 3 days"
                            </div>
                            <div className="testimonial-desc">
                                "I was able to get my first client in 3 days after joining the Freelance Masterclass. I was able to get my first client in 3 days after joining the Freelance Masterclass."
                            </div>
                        </div>
                        <div className="testimonial-author">
                            <div className="testimonial-author-name">
                                Sharan
                            </div>
                            <div className="testimonial-author-desc">
                                Freelancer
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="footer">
                {/* <div className="gurantee">
                    100% Money
                    Back Guarantee
                </div> */}
                <div className="cta">
                    {/* <a href="//api.whatsapp.com/send?phone=919346009605&text=Hi there I would Like To join the Masterclass"> */}
                    <Button className="footer-cta" onClick={() => navigate('/register')}>
                        <span className="text" >Register Now for Free</span>
                    </Button>
                    {/* </a> */}
                </div>
            </div>
        </div>
    )

}

const deliverables = [
    '✅  Get your profile approved on top freelancing platforms like Upwork, Fiverr, Freelancer, etc',
    '✅  Get your first client in 7 days With the Strategies provided',
    '✅ Client proposal Generation AI tool To Generate Client Proposals within no time',
    '✅ Auto Form filler Chrome extension To Apply for countless proposals',
    '✅ Access to Private Network of Top- Freelancers and contracts',

]

const faqs = [
    {
        key: '1',
        label: 'Support even after masterclass?',
        children: <div>Absolutely Yes ! We will guide you in every way possible</div>,
    },
    {
        key: '2',
        label: 'Who is this masterclass for?',
        children: <div>This masterclass will be most benefecial for University students (Pursuing any degree), Graduates with work experience, Any one Who is looking to start a freelancing career</div>,
    },
    {
        key: '3',
        label: 'Who is this masterclass not for?',
        children: <div>This Masterclass is not for people with no skills. It is better to acquire in-demand skills before applying to the masterclass </div>,
    },
    {
        key: '4',
        label: 'What is 100% money back policy?',
        children: <div>We will refund you 100% of the amount you paid if you are unable to achieve the results projected here, even if you follow all the instructions provided in the masterclass</div>,
    },
];