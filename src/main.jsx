import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import MemoTest from "./MemoTest";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    <MemoTest></MemoTest>
  </React.StrictMode>,
)
