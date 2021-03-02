import React from 'react'

import "./button.css"

type ButtonProps = {
    name: string,
    className?: string,
    onClickHandler: () => void
}

const Button: React.FC<ButtonProps> = ({ name, className, onClickHandler }) => {
    return (
        <button
            type="button"
            className={`btn text-white text-xs font-bold uppercase animate-shake`}
            onClick={onClickHandler}
        >
            {name}
        </button>
    )
}

export default Button
