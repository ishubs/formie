import React, { useContext, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase'
import { Button } from "antd";
import { FormDataContext } from './Step'
import { PhoneOutlined } from '@ant-design/icons'
import VerifiedIcon from '../../assets/verified_icon.png'
export default function EndScreen() {
    const { formData } = useContext(FormDataContext)
    useEffect(() => {
        submit()
    }, [])

    const submit = async () => {
        console.log(formData)
        try {
            const docRef = await addDoc(collection(db, "Free-1"), formData);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div>
            <img style={{ marginBottom: "40px" }} src={VerifiedIcon} />
            <div className="title">You have Registered Successfully</div>
            <div className="end-desc">Join the Whatsapp group for more details</div>
            {/* 
            <p className="end-desc">
                Link: Will be sent on WhatsApp
                <br />
                Time: 3:00 PM
                <br />
                Date: 15 July 2023
                <br />
                Any Queries
                <br />
                Phone: +919346009605
                <br />
                Email: shubsgiri@gmail.com
            </p> */}
            <br>
            </br>
            {/* <div style={{ margin: '20px 0px' }}>OR</div> */}

            <a style={{ textDecoration: 'none' }} href="https://chat.whatsapp.com/LZkAR5XXbgzCm9Wmev6zwA"><Button type="primary" style={{ width: '100%' }} size="large">Join Whatsapp Group</Button> </a>
            {/* <a style={{ textDecoration: 'none' }} href="tel:+919346009605"><Button icon={<PhoneOutlined />} type="primary" style={{ width: '100%' }} size="large">Call Now to Register Faster</Button> </a> */}

        </div>
    )
}