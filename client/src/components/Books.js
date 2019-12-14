import React from 'react'

const Books = ({books}) => {
    return (
        <section>
            <h1>Books availables</h1>
            <ul>
                {
                books.map(book => (
                    
                        <li key={book.id}>
                            {typeof book.volumeInfo.imageLinks !== "undefined" && <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />}
                            <h3>{book.volumeInfo.title}</h3>
                            <h5>{book.volumeInfo.authors}</h5>
                            <p>{book.volumeInfo.description}</p>
                        </li>
                ))
                }
            </ul>
        </section>
    )
}

export default Books