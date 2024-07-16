import React from 'react'
import './CButton.css'

export const CButton = ({ content, click, clase }) => {
    return (
        <>
            <button className={clase} onClick={click}>{content}</button>
        </>
    )
}
