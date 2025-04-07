import ButtonSettings from './button-settings';
import ButtonWindows from './button-windows';
import LogoContainer from './container-logo';
import './titlebar.css';

const TitleBar = () => {
    return (
        <div className="titleBar">
            <LogoContainer />
            <ButtonSettings />
            <ButtonWindows />
        </div>
    )
}

export default TitleBar;