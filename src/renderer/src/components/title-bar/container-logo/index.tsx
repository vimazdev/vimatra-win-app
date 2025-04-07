import logo from '@assets/icon.png'
const LogoContainer = () => {
    const nameApp = window.appInfo.name;
    const versionApp = window.appInfo.version;

    return (
        <div className="titleLogo">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <h5>{nameApp} v{versionApp}</h5>
            </div>

        </div>
    )
}

export default LogoContainer;