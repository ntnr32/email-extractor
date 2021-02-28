import React from 'react'

type SingleCharInputProps = {
    label: string,
    value: string
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SingleCharInput: React.FC<SingleCharInputProps> = ({ label, value, onChangeHandler }) => {
    // TODO: Read from config

    return (
        <label className="flex gap-2 leading-normal text-gray-500">
            <span className="text-xs">{label}</span>
            <input
                type="text"
                size={1}
                maxLength={1}
                className="p-1 border border-black rounded-sm w-5 h-5 text-xl outline-none"
                onChange={onChangeHandler}
                value={value}
            />
        </label>
    )
}

export default SingleCharInput
