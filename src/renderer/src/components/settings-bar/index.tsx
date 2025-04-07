import { useEffect, useState } from "react";
import { useSettingBarStore } from "@store/settingsbarStore";
import { useTranslation } from 'react-i18next';
import SettingBasicSystem from "./setting-basic-system";
import './styles.css';

const SettingsBar = () => {
    const { t } = useTranslation();
    const settingbar = document.getElementById('settingBar');
    const { isOpen, setOpenBar } = useSettingBarStore();
    const [shouldRender, setShouldRender] = useState(isOpen);
    const [animationClass, setAnimationClass] = useState('');
    const [route, setRoute] = useState('basic');

    useEffect(() => {
        if (settingbar) {
            const handleClick = (e: MouseEvent) => {
                if (e.target === settingbar) {
                    setOpenBar(false);
                }
            };
            settingbar.addEventListener('click', handleClick);
            return () => settingbar.removeEventListener('click', handleClick);
        }
    }, [settingbar, setOpenBar]);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            setTimeout(() => setAnimationClass('fade-in'), 10);
        } else {
            setAnimationClass('fade-out');
            setTimeout(() => setShouldRender(false), 300);
        }
    }, [isOpen]);

    const routes: Record<string, { component: JSX.Element, label: string }> = {
        basic: { component: <SettingBasicSystem />, label: t('setting.basic.label') },
    };

    if (!shouldRender) return null;

    return (
        <div id="settingBar" className={`setting-bar ${animationClass}`}>
            <div className="container-setting">
                <div className="title">
                    <h4>{t('setting.title')}</h4>
                </div>

                <div className="content_setting">
                    <nav>
                        {Object.entries(routes).map(([key, { label }]) => (
                            <button
                                key={key}
                                onClick={() => setRoute(key)}
                                className={`${route === key ? 'active' : ''}`}
                            >
                                {label}
                            </button>
                        ))}
                    </nav>

                    <div className="view-content_setting">
                        {routes[route]?.component || <h2>❌ Página no encontrada - {route}</h2>}
                    </div>
                </div>
                <footer className="footer">
                    <button className="close" onClick={() => setOpenBar(false)}>{t('setting.b-close')}</button>
                </footer>
            </div>
        </div>
    );
};

export default SettingsBar;
