// useEffect() = React Hook that tells React to DO THIS CODE WHEN (pick one):
// This component re-renders
// This component mounts
// The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {}) // Runs after every re-render 
// 2. useEffect(() => {}, []) // Runs only on mount
// 3. useEffect(() => {}, [value]) // Runs on mount when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import UseEffectHook1 from './UseEffectHook1.jsx';
import UseEffectHook2 from './UseEffectHook2.jsx';

function MainUseEffectHook({title="useEffect() hook", id}){    
    return (
        <>
            <h1 className="line" id={id}>{title}</h1>
            <UseEffectHook1 />
            <UseEffectHook2 />
        </>
    )
}

export default MainUseEffectHook