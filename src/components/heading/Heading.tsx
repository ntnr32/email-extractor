import React from 'react'
import Typewriter from 'typewriter-effect';

type HeadingProps = {
    text: string
}

const Heading = ({ text }: HeadingProps) => {
    return (
        <section id="heading" className="heading m-auto text-center">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(text)
                        .deleteAll()
                        .start();
                }}
                options={{
                    wrapperClassName: "text-2xl text-white uppercase font-bold",
                    autoStart: true,
                    loop: true
                }}
            />
        </section>
    )
}

export default Heading
