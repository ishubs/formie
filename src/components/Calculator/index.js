import React, { useState } from "react";
import "./index.css";
import Calculator from "./CalculatorComponent";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
export default function CalculatorScreen() {

    const [result, setResult] = useState(0)
    const navigate = useNavigate();

    return (
        <>
            <div className="calculator">
                <h1>Freelance Income Calculator</h1>
                <Calculator result={result} setResult={setResult} />
                {result > 0 && <div style={{ position: 'fixed', bottom: '40px', margin: '0 auto', left: 0, right: 0 }}>
                    <div>Wondering If this is actually possible? </div>
                    <Button onClick={() => navigate('/')} type="primary" style={{ marginTop: '20px' }}>Learn How</Button>
                </div>}
            </div>
        </>
    );
}




