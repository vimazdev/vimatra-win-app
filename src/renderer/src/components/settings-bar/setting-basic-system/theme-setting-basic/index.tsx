import { useThemeStore } from "@renderer/store/theme";
import Switch from "@renderer/components/form/switch";
import { useTranslation } from 'react-i18next';

const ThemeSettingBasic = () => {
    const { t } = useTranslation();
    let abrev = "setting.basic.section-theme"
    const { theme, toggleTheme } = useThemeStore();
    return (
        <div className="setting">
            <h5>{t(`${abrev}.t-theme`)}</h5>
            <p>{t(`${abrev}.p-description`)}</p>

            <div className="switch_theme">
                <span>{t(`${abrev}.b-dark`)}</span>
                <Switch onDefault={theme === 'dark' ? false : true} onChange={(val) => toggleTheme()} />
                <span>{t(`${abrev}.b-light`)}</span>
            </div>
        </div>
    )
}

export default ThemeSettingBasic;