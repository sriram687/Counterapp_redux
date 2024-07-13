import React from 'react'
import { increment, decrement, reset } from './CounterSlice'
import { useSelector, useDispatch } from 'react-redux';



const Counter = () => {

    const count = useSelector((state) => state.Counter.count)
    const dispatch = useDispatch()


    return (
        
            <section><p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())} >increment</button>
                <button onClick={() => dispatch(decrement())}>decrement</button>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div></section>

        

    )
}

export default Counter