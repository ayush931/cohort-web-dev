import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Button from './Button.jsx'
import TodoData from './TodoData.jsx'
import Cleanup from './Cleanup.jsx'
import ChildrenComponent from './ChildrenComponent.jsx'
import Keys from './Keys.jsx'
import ClassComponent from './ClassComponent.jsx'
import Lifecycle from './Lifecycle.jsx'
import ErrorBoundaries from './ErrorBoundaries.jsx'
import MyComponent from './ClassLifecycle.jsx'
import UseEffect from './UseEffect.jsx'
import UseStates from './UseStates.jsx'
import UseEffectD from './UseEffectD.jsx'
import Todos from './Todos.jsx'
import { Fragment } from 'react'
import SinglePage from './SinglePage.jsx'
import UseRef from './useRef.jsx'
import Clock from './Clock.jsx'
import Bulb from './Bulb.jsx'
import UseContext from './useContext.jsx'
import Recoil from './useContexts.jsx'
import UseContexts from './useContexts.jsx'
import CustomHook from './CustomHook.jsx'
import { UsePrev } from './usePrev.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App />
    <Header />
    <Button />
    <TodoData />
    <Cleanup />
    <ChildrenComponent />
    <Keys />
    <ClassComponent />
    <Lifecycle />
    <MyComponent />
    <UseEffect />
    <UseStates />
    <UseEffectD />
    <Todos />
    <ErrorBoundaries />
    <Fragment /> */}
    {/* <SinglePage /> */}
    {/* <UseRef /> */}
    {/* <Clock /> */}
    {/* <Bulb /> */}
    {/* <UseContext /> */}
    {/* <UseContexts /> */}
    {/* <Recoil /> */}
    {/* <CustomHook /> */}
    <UsePrev />
    </>
)
