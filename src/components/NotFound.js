import React from 'react';
import { useLocation } from 'react-router-dom'

export default function NotFound() {
  return (
      <div className='text-danger'>
        <h2>There is no match for the URL path "{useLocation().pathname}"</h2>
        <h3>Kindly check the entered URL for any errors</h3>
      </div>
    )
}