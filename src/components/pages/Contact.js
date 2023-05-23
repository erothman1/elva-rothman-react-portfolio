import React, { useState } from "react"
import { validateEmail } from "../utils/helper"

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const inputChangeHandler = (event) => {
        const { target } = event
        const inputType = target.name
        const inputValue = target.value

        if (inputType === "name") {
            setName(inputValue)
        } else if (inputType === "email") {
            setEmail(inputValue)
        } else {
            setMessage(inputValue)
        }
    }

    const blurHandler = (event) => {
        const { value, name } = event.target;

        if (name === "name" && value.trim() === "") {
            setErrorMessage("Oops. Name is required")
        } else if (name === "email" && value.trim() === "") {
            setErrorMessage("Oops. Email is required")
        } else if (name === "message" && value.trim() === "") {
            setErrorMessage("Oops. Message is required")
        } else {
            setErrorMessage("")
        }
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()

        if (!validateEmail(email)) {
            setErrorMessage("Oops. Invalid email.")
            return
        }

        //TODO: form still submits if a field is empty
        if (name.trim() === "") {
            setErrorMessage("Oops. Name is required")
            return
        }

        if (email.trim() === "") {
            setErrorMessage("Oops. Email is required")
            return
        }

        if (message.trim() === "") {
            setErrorMessage("Oops. Message is required")
            return
        }

        alert("Thanks for getting in touch!")

        setName("")
        setEmail("")
        setMessage("")
    }

    return (
        <div>
            <h1>Get in touch!</h1>
            <form className="form">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        value={name}
                        name="name"
                        onChange={inputChangeHandler}
                        onBlur={blurHandler}
                        type="text"
                        // placeholder="Name"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        value={email}
                        name="email"
                        onChange={inputChangeHandler}
                        onBlur={blurHandler}
                        type="email"
                        // placeholder="Email"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                        name="message"
                        onChange={inputChangeHandler}
                        onBlur={blurHandler}
                        // placeholder="Message"
                        className="form-control message"
                    >{message}</textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div className="submitButton">
                <button type="button" onClick={formSubmitHandler} className="btn btn-outline-dark">Submit</button>
                </div>
            </form>

        </div>
    )
}