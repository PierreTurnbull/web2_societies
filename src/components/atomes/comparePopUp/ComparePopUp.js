import React from 'react'
import './ComparePopUp.css'

const ComparePopUp = (props) => {
    const { text } = props;
    const createMarkup = (html) => {
        return { __html: html };
    }

    return (
        <div className="comparePopUp" onClick={props.onClick}>
            <i
                className="material-icons"
                style={{
                    margin: "0 auto",
                    marginBottom: "32px",
                    display: "table",
                    textAlign: "center",
                    padding: "10px",
                    background: "white",
                    borderRadius: "50%",
                    color: "black"
                }}
            >
                close
            </i>
            <div className="content">
                <p className="p" dangerouslySetInnerHTML={createMarkup(text)}>
                </p>
            </div>
        </div>
    )
}

export default ComparePopUp
