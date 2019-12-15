import React from 'react'
import {render} from '@testing-library/react'
import Login from '../components/Login'


test("Login username input is available in dom", () => {
    const {getByPlaceholderText} = render(<Login />)
    const input  = getByPlaceholderText("username")
    expect(input).toBeInTheDocument()
})

test("Login password input is available in dom", () => {
    const {getByPlaceholderText} = render(<Login />)
    const input  = getByPlaceholderText("password")
    expect(input).toBeInTheDocument()
})