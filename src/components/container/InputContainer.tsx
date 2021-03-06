import React from 'react'
import TextArea from '../elements/TextArea';

type InputContainerProps = {
    title: string,
    desc: string,
    containerStyle: string,
    disableInput: boolean,
    textAreaValue?: string,
    textAreaPlaceholder: string,
    txtOnChangeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const InputContainer: React.FC<InputContainerProps> = (props) => {

    const { title, desc, containerStyle, disableInput, textAreaValue, textAreaPlaceholder, txtOnChangeHandler, children } = props;

    return (
        <section className={`${containerStyle} m-5 border-2 border-white shadow-xl rounded-md glass`} >
            <div className="p-2">
                <h2 className="text-white font-bold text-base">{title}</h2>
                <span className="text-white text-xs">{desc}</span>
            </div>
            <div className="p-2">
                <TextArea
                    name="InputArea"
                    disabled={disableInput}
                    value={textAreaValue}
                    onChangeHandler={txtOnChangeHandler}
                    placeholder={textAreaPlaceholder}
                />
            </div>
            <div className="p-2 flex gap-2 my-auto">
                {children}
            </div>
        </section >
    )
}

export default InputContainer;