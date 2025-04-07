import { VscChromeMinimize } from "react-icons/vsc";
import { MdCropSquare } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { ipc } from '../../../ipc'

const ButtonWindows = () => {

    return (
        <div className="ButtonWindows">
            <button onClick={() => ipc.minimize()}><VscChromeMinimize /></button>
            <button onClick={() => ipc.maximize()}><MdCropSquare /></button>
            <button onClick={() => ipc.close()} className="close"><IoMdClose /></button>
        </div>
    )
}

export default ButtonWindows;