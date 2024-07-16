import React from 'react'

export const CButton = ({ content, click }) => {
    return (
        <>
            <button onClick={click}>{content}</button>
        </>
    )
}
