import React from 'react'
import ReactDOM from 'react-dom'
import './ComparePopUp.css'

const ComparePopUp = (props) => {
    const { text } = props;
    const createMarkup = (html) => {
        return { __html: html };
    }

    return ReactDOM.createPortal(
        <div className="comparePopUp">
            <div className="content">
                <p className="p" dangerouslySetInnerHTML={createMarkup(text)}>
                </p>
            </div>
        </div>,
        document.getElementById('home')
    )
}

export default ComparePopUp
