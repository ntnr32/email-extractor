import React from 'react'

import GrayButton from '../elements/button/GrayButton';

type ResultContainerControlProps = {
    buttonClickHandler: () => void
}

const ResultContainerControl: React.FC<ResultContainerControlProps> = ({ buttonClickHandler }) => {
    return (
        <>
            <div className="my-auto ml-auto">
                <GrayButton name="Copy" onClickHandler={buttonClickHandler} />
            </div>
        </>
    )
}

export default ResultContainerControl
