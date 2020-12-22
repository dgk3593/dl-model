import { SettingsProvider } from "context/SettingsContext";

import { Route, HashRouter } from "react-router-dom";
import MainPage from "./MainPage/MainPage";

import "./styles/App.css";

function App() {
    return (
        <SettingsProvider>
            <HashRouter>
                <Route render={routeProps => <MainPage {...routeProps} />} />
            </HashRouter>
        </SettingsProvider>
    );
}

export const fbxSource = process.env.PUBLIC_URL;

export default App;
