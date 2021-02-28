import React from 'react'

type HeadingProps = {
    text: string
}

const Heading = ({ text }: HeadingProps) => {
    return (
        <section id="heading" className="heading m-auto text-center">
            <h1 className="text-xl">{text}</h1>
        </section>
    )
}

export default Heading
