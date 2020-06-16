import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Navbar from '../navbar/Navbar'
import Feed from '../feed/Feed'
import Loader from '../loader/Loader'

function App() {

    const [query, setQuery] = useState('workspace')
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function getData(query) {

        setIsLoading(true)

        const res = await axios(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${encodeURIComponent(query)}&per_page=21`)

        const imgs = res.data.hits

        if(imgs.length) {
            setData(imgs)
            setIsLoading(false)
        }else{
            alert('No results found.')
            setIsLoading(false)
        }
    }

    function handleQuery(newQuery) {
        setQuery(newQuery)
    }

    useEffect(function() {
        getData(query)
    }, [query])

    return (
        <div className="App">
            {isLoading && <Loader />}
            <Navbar handleQuery={handleQuery}/>
            <Feed imgs={data}/>
        </div>
    );
}

export default App;
