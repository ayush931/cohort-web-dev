import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Button from './Button.jsx'
import TodoData from './TodoData.jsx'
import Cleanup from './Cleanup.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <Header /> */}
    {/* <Button /> */}
    <TodoData />
    <Cleanup />
  </>
)
