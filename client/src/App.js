import React, {useEffect, useState} from 'react';
import Books from './components/Books'
import Search from './components/Search'
import useDebounce from './components/hooks/useDebounce'
import {getBooks} from './services/books'


function App() {
  const [books, setBooks] = useState([])
  const [totalBooks, setTotalBooks] = useState(0)
  const [searchTerm, setSearchTerm] = useState("Lord of the ring")

  const debounceSearchTerm = useDebounce(searchTerm, 500)

  useEffect( () => {
    async function fetchData(searchTerm){
      try {
         const bookResults = await getBooks(searchTerm)
          
          return bookResults.data.data;
      } catch (error) {
          throw error;
      }
    };

    if(debounceSearchTerm) {
      fetchData(debounceSearchTerm)
        .then(response => {
          setBooks(response.items)
          setTotalBooks(response.totalItems)
        })
    } else {
      fetchData()
      .then(response => {
        setBooks(response.items)
        setTotalBooks(response.totalItems)
      })
    }
    
  }, [debounceSearchTerm])


  const onHandleSearch = (e) => setSearchTerm(e.target.value)
  return (
    <div className="App">
        <Search onChange={onHandleSearch}/>
        <Books books={books}/>
    </div>
  );
}

export default App;
