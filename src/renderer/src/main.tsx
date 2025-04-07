import React, { useEffect } from 'react';
import './styles/main.css';
import ReactDOM from 'react-dom/client';
import TitleBar from "./components/title-bar";
import { useThemeStore } from '@store/theme';
import App from './App';
import './i18n'

const Main = () => {
    const theme = useThemeStore((state) => state.theme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <>
            <TitleBar />
            <App />
        </>
    );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Main />
);
