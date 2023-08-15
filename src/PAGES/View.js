import React, { useEffect, useState } from 'react'
import './View.css'
import { Card, Row } from 'react-bootstrap'
import LoadingSpinner from '../COMPONENTS/LoadingSpinner'

function View() {
  const [spinner,setspinner]=useState(true)
 

  useEffect(()=>{
    setTimeout(()=>{
        setspinner(false)
    },2000)

},[])
  return (
    <>
{spinner?
    <div>
      <LoadingSpinner/>
    </div>:


    <div className='d-flex justify-content-center'>
        <div className='cardview text-center'>
            <Card style={{width:'600px'}} className='shadow col-lg-6 mx-auto'>
             <Card.Body>
                <Row>
                  <div className='col'>
                    <img height={'130px'} width={'130px'} className='image' src="https://w7.pngwing.com/pngs/69/512/png-transparent-computer-icons-contact-monochrome-silhouette-internet-thumbnail.png" alt="" />
                    
                  </div>
                </Row>
                <div>
                <h3>Max miller</h3>
                <h5><i class='fa-solid fa-envelope text-primary'></i>:max@gmail.com</h5>
                <h5><i class='fa-solid fa-mobile text-danger'></i>:9123712893</h5>
                <h5><i class='fa-solid fa-venus-mars text-warning'></i>:max@gmail.com</h5>
                <h5><i class='fa-solid fa-location-dot text-info'></i>:max@gmail.com</h5>
                <h5><i class='fa-solid fa-chart-line text-success'></i>:max@gmail.com</h5>
                </div>
             </Card.Body>
            </Card>
    
        </div>
    </div>}
    </>
  )
}

export default View