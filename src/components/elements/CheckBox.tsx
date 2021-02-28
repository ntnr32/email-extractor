import React from 'react'

type CheckBoxProps = {
    label: string,
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, onChangeHandler }) => {
    return (
        <label className="flex gap-2 leading-normal">
            <span className="text-gray-700 text-xs">{label}</span>
            <input
                type="checkbox"
                className="h-5 w-5 text-gray-600"
                onChange={onChangeHandler}
            />
        </label>
    )
}

export default CheckBox
