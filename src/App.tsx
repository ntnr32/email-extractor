import React, { useState } from 'react';

import InputContainer from './components/container/InputContainer';
import InputContainerControl from './components/controls/InputContainerControl';
import ResultContainerControl from './components/controls/ResultContainerControl';
import Layout from './components/layouts/Layout';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

    const defaultDelimeter = ";";

    const [inputText, setInputText] = useState("");
    const [resultText, setResultText] = useState("");
    const [delimeter, setDelimeter] = useState(defaultDelimeter);
    // TODO: Implement Remove duplicates
    const [removeDuplicates, setRemoveDuplicates] = useState(false);

    const txtOnChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => setInputText(e.target.value);
    const delimeterOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setDelimeter(e.target.value);
    const duplicateOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setRemoveDuplicates(e.target.checked);

    const extractClickHandler = () => {
        debugger;
        if (inputText) {
            const matchedText = inputText.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
            const matchedTextLength = matchedText?.length || 0;
            if (matchedText && matchedTextLength > 0) {
                const finalText = matchedText.join(delimeter || defaultDelimeter);
                setResultText(finalText)
            } else {
                toast("No Match Found ❗");
            }
        } else {
            toast("Enter some text to extract");
        }
    }

    const copyClickHandler = () => {
        if (resultText) {
            if (navigator && navigator.clipboard) {
                navigator.clipboard.writeText(resultText);
                toast("Copied to clipboard ❕");
            } else {
                toast("Clipboard not supported");
            }
        }
        else {
            toast("Extract data first");
        }
    }

    return (

        <React.Fragment>
            <Layout>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <InputContainer
                    title="Paste you input data"
                    desc="Insert the list of email address"
                    containerStyle="left-container"
                    disableInput={false}
                    textAreaPlaceholder="John Smith <john@example.com>; Rachel Smith <rachal@exmaple.com>"
                    txtOnChangeHandler={txtOnChangeHandler}
                >
                    <InputContainerControl
                        delimeterValue={delimeter}
                        buttonClickHandler={extractClickHandler}
                        delimeterOnChangeHandler={delimeterOnChangeHandler}
                        duplicateOnChangeHandler={duplicateOnChangeHandler}
                    />
                </InputContainer>

                <InputContainer
                    title="Delimeter separated email addresses"
                    desc="Extracted email addresses with specified delimeter"
                    containerStyle="right-container"
                    disableInput={true}
                    textAreaValue={resultText}
                    textAreaPlaceholder="Delimeter separated email addresses"
                    txtOnChangeHandler={txtOnChangeHandler}
                >
                    <ResultContainerControl
                        buttonClickHandler={copyClickHandler}
                    />
                </InputContainer>
            </Layout>
        </React.Fragment>
    )
}

export default App;
