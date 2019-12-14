import React from 'react'
import {render} from '@testing-library/react'
import Search from './Search'

test("render search field", () => {
    const {getByPlaceholderText} = render(<Search />)
    const inputSearch = getByPlaceholderText("Search books...")
    expect(inputSearch).toBeVisible()
})