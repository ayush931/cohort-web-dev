import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseEffect from './UseEffect.jsx'
import UseEffectD from './UseEffectD.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <UseEffect />
    <UseEffectD />
  </>,
)
