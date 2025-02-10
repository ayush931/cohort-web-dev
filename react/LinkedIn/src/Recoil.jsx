import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'

const count = atom({
    key: 'countState', // unique ID (with respect to other atoms/selectors)
    default: 0 // default value (initial value)
})

function Parent () {
    return (
        <RecoilRoot>
            <Increase />
            <Decrease />
            <Value />
        </RecoilRoot>
    )
}

function Increase () {
    const setCount = useSetRecoilState(count)
    return <button onClick={() => setCount(count => count + 1)}>Increase</button>
}

function Decrease () {
    const setCount = useSetRecoilState(count)
    return <button onClick={() => setCount(count => count - 1)}>Decrease</button>
}

function Value () {
    const countValue = useRecoilValue(count)
    return <p>Count: {countValue}</p>
}

function Recoil () {
    return (
        <div>
            <Parent />
        </div>
    )
}

export default Recoil