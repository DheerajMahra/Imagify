import React, { useState, useRef } from 'react'
import './Navbar.css'
import { FiSearch } from "react-icons/fi";

function Navbar(props) {

    const inputEl = useRef(null)
    const [query, setQuery] = useState('')

    function handleChange(e) {
        setQuery(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(query.trim()) {
            props.handleQuery(query)
        } else {
            alert('Please search a valid image.')
        }
        setQuery('')
        window.scrollTo(0,0)
        inputEl.current.blur()
    }

    return (
        <div className="Navbar" onSubmit={handleSubmit}>
            <form className="Form">
                <FiSearch className="Form__searchIcon" />
                <input
                    className="Form__input"
                    type="text"
                    placeholder="Search free images"
                    autoFocus
                    value={query}
                    onChange={handleChange}
                    ref={inputEl}
                />
            </form>
        </div>
    )
}

export default Navbar
