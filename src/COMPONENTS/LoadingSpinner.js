import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

function LoadingSpinner() {
  return (
    <div style={{width:'100%',height:'80vh'}} className='d-flex justify-content-center align-items-center'>
        
    <Spinner animation="grow" variant="danger" /> Loading....
</div>
  )
}

export default LoadingSpinner