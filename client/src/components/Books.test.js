import React from 'react'
import {render} from '@testing-library/react'
import Books from './Books'


test("Check if books are available", () => {
    const {getByText} = render(<Books />)
    const containerElement = getByText("Books availables")
    expect(containerElement).toBeInTheDocument()
})