import LangSettingBasic from "./lang-setting-basic";
import ThemeSettingBasic from "./theme-setting-basic";

const SettingBasicSystem = () => {
    return (
        <section className="content_container-setting">
            <LangSettingBasic />
            <ThemeSettingBasic />
        </section>
    )
}

export default SettingBasicSystem;