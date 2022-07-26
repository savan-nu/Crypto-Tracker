import React from "react";
import App from "./App"
import "./index.css"
import { createRoot } from 'react-dom/client';
import CryptoContext from "./CryptoContext";

import 'react-alice-carousel/lib/alice-carousel.css';
const root = createRoot(document.getElementById('root'));
root.render(
    <CryptoContext>
        <App />
    </CryptoContext>
);