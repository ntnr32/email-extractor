import * as React from 'react';
import { useRef, useState } from 'react';

const SingleContent = () => {

    const [emailTexts, setEmailTexts] = useState("")
    const [extractedEmails, setExtractedEmails] = useState("");
    const eventHandler = () => {
        const extractedText = emailTexts.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        const extractTextLength = extractedText?.length || 0;
        if (extractTextLength > 0 && extractedText) {
            setExtractedEmails(extractedText.join(';').toString())
        }
    }

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="px-5 py-24 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Email Extractor</h1>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-100 p-8 rounded">
                                <textarea onChange={(e) => setEmailTexts(e.target.value)} name="inputContent" id="txtInputContent" rows={10} className="w-full h-full focus:outline-none"></textarea>
                                <button type='button'
                                    onClick={() => eventHandler()}
                                >
                                    Extract
                                </button>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-100 p-8 rounded">
                                <textarea name="" id="" rows={10}
                                    className="w-full h-full focus:outline-none" disabled value={extractedEmails}>
                                </textarea>
                                <p className="leading-relaxed mb-6">Here are the list of emails</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleContent;