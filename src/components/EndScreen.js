import React, { useContext, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from './../firebase'
import { FormDataContext } from './Step'
export default function EndScreen() {
    const { formData } = useContext(FormDataContext)
    useEffect(() => {
        submit()
    }, [])

    const submit = async () => {
        console.log(formData)
        try {
            const docRef = await addDoc(collection(db, "leads"), formData);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div>
            <div className="title" style={{ color: 'blue' }}>Did you know?</div>
            <div className="title">Freelancers Make an average of $20 / hour</div>
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
            </p>
        </div>
    )
}