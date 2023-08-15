import React, { useContext,useEffect, useState } from 'react'
import { Alert, Col, Row } from 'react-bootstrap'
import Tabledata from '../COMPONENTS/Tabledata'
import { useNavigate } from 'react-router-dom'

import LoadingSpinner from '../COMPONENTS/LoadingSpinner'
import {registerContext} from '../COMPONENTS/ContextShare'
import { alldata } from '../services/allApi'




function Home() {

    const [spinner,setspinner]=useState(true)

    //state for all accounts
    const [allaccounts,setaccount]=useState([])

    const {registerData,setregisterdata}=useContext(registerContext)

    console.log(registerData);


    //function to display all details

    const alldetails=async()=>{
      const response= await  alldata()
      setaccount(response.data)
    }
    

    const navigate= useNavigate()

    const navigation=()=>{
        //navigation to register
        navigate('/register')

    }
    

    useEffect(()=>{
        setTimeout(()=>{
            setspinner(false)
        },2000)

        alldetails()

    },[])
  return (
    <>

    {
        registerData?<Alert key={'success'} variant='success' dismissible onClose={()=>setregisterdata('')}>{registerData.fname.toUpperCase()} Successfully Registered</Alert>:''
    }



   <div>
        {/* top part */}
        <div className='top_div mt-5 d-flex justify-content-between'>
            <div className='first_div ms-5'>
                <div>
                    <Row>
                        <Col xl={8} md={10} sm={12}>
                       <input placeholder='Search' type="text" className='form-control col-2 border' />
                       
                        </Col>
                        <Col xl={4} md={10} sm={12}>
                        <button className='btn btn-info'>Search</button>
                        </Col>
                    
        
                    </Row>
                    
                </div>
        
            </div>
            <div className='second_div me-5'>
                <button onClick={navigation} className='btn btn-warning'><i class="fa-solid fa-user-plus"></i>ADD</button>
    
            </div>
        
        </div>
    
        {
        spinner?
            <div>
            <LoadingSpinner/>
        </div>:
    
        
    
        
    
       <div>
            <div className='mt-3'>
                {/* table */}
                <Tabledata fullData={allaccounts}/>
                
            </div>
       </div>
        }
    
       
    
   </div>
    </>
  )
}

export default Home