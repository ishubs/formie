import { Button } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
export default function CancelScreen() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="title">We are Sorry to see you Go 😥</div>
            <h3>But hey Wait, If you are Cancelling for financial reasons</h3>
            <h3>we can offer you a discount</h3>
            {/* <h3>Call us at 1234567890</h3> */}
            <a style={{ textDecoration: 'none' }} href="tel:+919346009605">  <Button icon={<PhoneOutlined />} type="primary" style={{ width: '100%' }} size="large">Call Us</Button> </a>
            <Button size='large' onClick={() => navigate('/')} style={{ width: '100%', marginTop: '10px' }} >Register</Button>
        </div>
    );
}

// we are sorry to see you go
// but If you are cancelling because of the price you can try to get a discount by 
// calling, getting a call back, no i want to cancel. 
