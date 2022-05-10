import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const Input = () => {
  return (
    <form className='input'>
        <label>
          Student Name:
        </label>
        <input type="text" />
        <Link to="/output"><input type="submit" value="Submit" /></Link>
    </form>
  )
}

export default Input