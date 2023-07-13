import { BrowserRouter as Router } from "react-router-dom";
import React, { Suspense } from "react";
import { AuthProvider } from "./hooks/useAuth";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import ReactDOM from "react-dom/client";
import Loader from "./layouts/Loader";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/style.scss";

const { store, persistor } = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <React.StrictMode>
                <Suspense fallback={<Loader />}>
                    <Router>
                        <AuthProvider>
                            <App />
                        </AuthProvider>
                    </Router>
                </Suspense>,
            </React.StrictMode>
        </PersistGate>
    </Provider>
);
