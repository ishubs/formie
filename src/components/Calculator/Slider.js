import { Slider } from 'antd';

const marks = {
    0: '0',
    10: '10',
    15: '15',
    20: '20',
    25: '25',
    30: '30',
    40: '40',
};
export default function CustomSlider() {
    return (

        <div>
            <Slider marks={marks} step={null} defaultValue={0} max={40} />
        </div>
    )
}