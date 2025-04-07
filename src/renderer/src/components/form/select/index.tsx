import React, { useState, useRef, useEffect } from 'react';
import { MdArrowDropDown } from "react-icons/md";

interface CustomSelectProps {
    options: { [key: string]: string };
    defaultValue?: string;
    onChange: (value: string) => void;
    icon?: boolean;
}

const Select: React.FC<CustomSelectProps> = ({ options, defaultValue, onChange, icon }) => {
    const [open, setOpen] = useState(false);
    const [selectedKey, setSelectedKey] = useState(defaultValue || Object.keys(options)[0]);
    const ref = useRef<HTMLDivElement>(null);

    const handleSelect = (key: string) => {
        setSelectedKey(key);
        onChange(String(key));
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="form-select">
            <div onClick={() => setOpen(!open)}>
                {options[selectedKey]}
                {icon ? <div className={`select-icon ${open ? 'open' : ''}`}><MdArrowDropDown /></div> : null}
            </div>

            <ul className={open ? 'active' : ''}>
                {Object.entries(options).map(([key, label]) => (
                    <li key={key} onClick={() => handleSelect(String(key))}>
                        {label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Select;
