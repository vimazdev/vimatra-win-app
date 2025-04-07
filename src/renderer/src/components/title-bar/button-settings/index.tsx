// import React from 'react'
import { MdOutlineSettings } from "react-icons/md";
import { useSettingBarStore } from "@renderer/store/settingsbarStore";

const ButtonSettings = () => {
    const { isOpen, setOpenBar } = useSettingBarStore();

    return (
        <div className="buttonSetting">
            <button onClick={() => setOpenBar(!isOpen)}><MdOutlineSettings /></button>
        </div>
    )
}

export default ButtonSettings