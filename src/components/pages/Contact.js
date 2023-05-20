import React, { useState } from "react"
import { validateEmail } from "../utils/helper"

export default function Contact() {
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ message, setMessage ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")

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

    const formSubmitHandler = (event) => {
        event.preventDefault()

        if (!validateEmail(email)) {
            setErrorMessage("Oops. Invalid email.")
            return
        }

        //setErrorMessage that field is required when cursor goes out of input field 

        alert("Thanks for getting in touch!")

        setName("")
        setEmail("")
        setMessage("")
    }

    return (
        <div>
            <h1>Get in touch!</h1>
            <form className="form">
                <input
                    value={name}
                    name="name"
                    onChange={inputChangeHandler}
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={inputChangeHandler}
                    type="email"
                    placeholder="Email"
                />
                <input
                    value={message}
                    name="message"
                    onChange={inputChangeHandler}
                    type="text"
                    placeholder="Message"
                />
                <button type="button" onClick={formSubmitHandler}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}