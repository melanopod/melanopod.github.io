import React from 'react'
import ReactDOM from 'react-dom/client'
import Page from './Page'
import './css/index.scss'

ReactDOM
.createRoot(document.getElementById('root')!)
.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
)