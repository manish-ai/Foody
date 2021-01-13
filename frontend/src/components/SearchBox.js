import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <form onSubmit={submitHandler} >
      {/* <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button> */}

      <input type="search" className=" search  ml-auto col-xs-3" name='q' onChange={(e) => setKeyword(e.target.value)} id="ser" placeholder="What Are You Looking For?" />
      <button className="btn btn-sm search-button mr-auto " type='submit' ><i className="fa fa-search text-white fa-lg" aria-hidden="true"></i></button>

    </form>
  )
}

export default SearchBox
