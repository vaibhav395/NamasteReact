import Contact from "../Contact"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Should load the contact page", ()=>{
    render(<Contact/>)

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument()
})

test("Should load the button in the contact page", ()=>{
    render(<Contact/>)

    const button = screen.getByRole("button")

    // const button = screen.getByText("Submit")

    expect(button).toBeInTheDocument()
})

test("Should load 2 input fields in the contact page", ()=>{
    render(<Contact/>)

    const inputBoxes = screen.getAllByRole("textbox")

    // const button = screen.getByText("Submit")

    expect(inputBoxes.length).toBe(2)

    // inputBoxes is the array of react elements, and it's length should be 2
})