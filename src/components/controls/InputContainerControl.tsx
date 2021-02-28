import React from 'react'

import GrayButton from '../elements/button/GrayButton';
import CheckBox from '../elements/CheckBox';
import SingleCharInput from '../elements/SingleCharInput';

type InputContainerControlProps = {
    delimeterValue: string,
    buttonClickHandler: () => void,
    delimeterOnChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    duplicateOnChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputContainerControl: React.FC<InputContainerControlProps> = ({ delimeterValue, buttonClickHandler, delimeterOnChangeHandler, duplicateOnChangeHandler }) => {
    return (
        <>
            <div className="my-auto">
                <SingleCharInput label="Delimeter" value={delimeterValue} onChangeHandler={delimeterOnChangeHandler} />
            </div>
            <div className="my-auto">
                <CheckBox label="Remove Duplicate" onChangeHandler={duplicateOnChangeHandler} />
            </div>
            <div className="my-auto ml-auto">
                <GrayButton name="Extract" onClickHandler={buttonClickHandler} />
            </div>
        </>
    )
}

export default InputContainerControl
