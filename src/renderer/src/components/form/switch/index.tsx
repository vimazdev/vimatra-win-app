import React, { useState, useEffect } from "react";
import './switch.css';

interface SwitchProps {
    onDefault?: boolean;
    onChange?: (value: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ onDefault = false, onChange }) => {
    const [active, setActive] = useState(onDefault);

    useEffect(() => {
        setActive(onDefault);
    }, [onDefault]);

    const handleSwitch = () => {
        const newState = !active;
        setActive(newState);
        onChange?.(newState);
    };

    return (
        <div
            className={`content_switch ${active ? 'active' : ''}`}
            onClick={handleSwitch}
        >
            <div className="circle_action"></div>
        </div>
    );
};

export default Switch;
