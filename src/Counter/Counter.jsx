import React, { useState } from 'react'
import { Title } from '../components/Title/Title'
import { CButton } from '../components/CButton/CButton'

export const Counter = ({ initialState=0 }) => {
    //Declaracion de variables, funciones y codigo js
    const title = "Counter"

    // let initValue = 0;
    const [initValue, setInitValue] = useState(initialState)

    function decrement() {
        console.log('decrement');
        if (initValue === 0) {
            return alert('No puede diminuir menos de cero')
        }
        setInitValue(initValue - 1)
        console.log(initValue)
    }

    function increment() {
        console.log('increment');
        setInitValue(initValue + 1)
        console.log(initValue)
    }

    function reset() {
        setInitValue(0)
    }

    return (
        <>
            <Title nombre="Counter" />
            <CButton content="decrement" click={decrement} clase="button-danger" />
            <div>{initValue}</div>
            <CButton content="increment" click={increment} clase="button-success" />
            <div></div>
            <CButton content="reset" click={reset} clase="button-reset" />
        </>
    )
}
