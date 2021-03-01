import React from 'react'

import GrayButton from '../elements/button/GrayButton';


type ResultContainerControlProps = {
    uniqueResultCount?: number,
    duplicateConut?: number,
    buttonClickHandler: () => void
}

const ResultContainerControl: React.FC<ResultContainerControlProps> = ({ uniqueResultCount, duplicateConut, buttonClickHandler }) => {
    return (
        <>
            <div className="my-auto">
                <label className="leading-normal text-gray-500 text-xs">Count: {uniqueResultCount}</label>
            </div>
            <div className="my-auto">
                <label className="leading-normal text-gray-500 text-xs">Duplicates: {duplicateConut}</label>
            </div>
            <div className="my-auto ml-auto">
                <GrayButton name="Copy" onClickHandler={buttonClickHandler} />
            </div>
        </>
    )
}

export default ResultContainerControl
