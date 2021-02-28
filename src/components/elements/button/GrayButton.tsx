import React from 'react'

import "./button.css"

type ButtonProps = {
    name: string,
    onClickHandler: () => void
}

const GrayButton: React.FC<ButtonProps> = ({ name, onClickHandler }) => {
    return (
        <button
            type="button"
            className="btn text-xs font-bold uppercase"
            onClick={onClickHandler}
        >
            {name}
        </button>
    )
}

export default GrayButton
