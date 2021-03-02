import React from 'react'

type CheckBoxProps = {
    label: string,
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, onChangeHandler }) => {
    return (
        <label className="flex gap-2 leading-normal ">
            <span className="text-white text-xs">{label}</span>
            <input
                type="checkbox"
                className="h-5 w-5"
                onChange={onChangeHandler}
            />
        </label>
    )
}

export default CheckBox
