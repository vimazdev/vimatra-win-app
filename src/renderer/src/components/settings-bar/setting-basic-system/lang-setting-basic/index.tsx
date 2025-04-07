import Select from "@renderer/components/form/select";
import { useLangStore } from "@renderer/store/lang";
import { useTranslation } from 'react-i18next';

const LangSettingBasic = () => {
    const { t } = useTranslation();
    let abrev = "setting.basic.section-lang"
    const { language, setLanguage } = useLangStore();

    return (
        <div className="setting_lang setting">
            {/* <div className="logo-setting"><LuLanguages /></div> */}
            <h5>{t(`${abrev}.t-lang`)}</h5>
            <p>{t(`${abrev}.p-description`)}</p>

            <Select
                options={{ "es": "Español", "en": "English" }}
                defaultValue={language}
                onChange={(val) => setLanguage(val as 'en' | 'es')}
                icon={true}
            />
        </div>
    );
};

export default LangSettingBasic;
