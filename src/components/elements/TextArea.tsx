import React from 'react'

type TextAreaProp = {
    name: string,
    disabled: boolean,
    value?: string,
    placeholder: string,
    onChangeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: React.FC<TextAreaProp> = ({ name, placeholder, disabled, value, onChangeHandler }) => {

    return (
        <textarea
            className="border-2 rounded-md p-1 w-full h-full box-border resize-none outline-none bg-transparent text-white placeholder-white"
            name={name}
            id={`txt` + name}
            disabled={disabled}
            onChange={onChangeHandler}
            value={value}
            placeholder={placeholder}
        >
        </textarea>
    )
}

export default TextArea
