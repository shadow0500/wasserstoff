import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Carousel, initTE } from "tw-elements";
import {
  RecoilRoot
} from 'recoil';
initTE({ Carousel });

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </RecoilRoot>
)
