import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Form, Row } from 'react-bootstrap'
import Select from 'react-select'
import LoadingSpinner from '../COMPONENTS/LoadingSpinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { empRegister } from '../services/allApi';
import {useNavigate} from 'react-router-dom'
import {registerContext} from '../COMPONENTS/ContextShare'


function Register() {

  const navigate=useNavigate()

  const {registerData,setregisterdata}=useContext(registerContext)

  


  const [spinner,setspinner]=useState(true)

  //state for preview of imageon top
  const[preview,setPreview]=useState('https://cdn-icons-png.flaticon.com/512/3135/3135715.png')

  //state for status
  const[status,setStatus]=useState("Active")

  //to update status
  const updateStatus=(e)=>{
    setStatus(e.value)

  }

  //state for image
  const [image,setImage]=useState('')

  //to update image
  const updateImage=(e)=>{
    setImage(e.target.files[0])
    
  }

  //state for holding user input data
  const [userData,setuserData]=useState({
    fname:'',
    lname:'',
    email:'',
    mobile:'',
    gender:'',
    location:''
    
  })

  //function for submiting
  const OnSubmit=async(e)=>{
    //to prevent auto refresh
    e.preventDefault()

    //destructuring
    const {fname,lname,email,mobile,location,gender}=userData

    //validation
    if(fname===''){

      toast.error('First name required')

    }
    else if(lname===''){

      toast.error('lastname name required')

    }
    else if(email===''){

      toast.error('email  required')

    }
    else if(mobile===''){

      toast.error('mobile number required')

    }
    else if(gender===''){

      toast.error('gender required')

    }
    else if(image===''){

      toast.error('Image required')

    }
    else if(location===''){

      toast.error('location required')

    }
    else{
     //make api call

      //headerconfig
  const headerconfig={
    "Content-Type":"multipart/form-data"

  }


  //body-formdata
  const data=new FormData()
  data.append('user_profile',image)
  data.append('fname',fname)
  data.append('lname',lname)
  data.append('email',email)
  data.append('mobile',mobile)
  data.append('status',status)
  data.append('gender',gender)
  data.append('location',location)
  


//api call
const response= await empRegister(data,headerconfig)
if(response.status===200){
  //reset all states
  setuserData({...userData,fname:'',
  lname:'',
  email:'',
  mobile:'',
  gender:'',
  location:''})
  setStatus('Active')
  setImage('')

  //assigning data to contextshare
  setregisterdata(response.data)
  

  //navigation
  navigate('/')
   
}
else if(response.response.status===406){
  toast.error(`${response.response.data}`)
  
}
else{
  toast.error(`Error`)

}








    }


  }

 

  //to update userData when user enter input using html
  const userDetails=(e)=>{
    const {name,value}=e.target
    setuserData({...userData,[name]:value})

  }
 

  
//status options
  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
    
  ]
 

  useEffect(()=>{
     if(image){
      //update profile pic
      setPreview(URL.createObjectURL(image))
      


     }
     
    
    




    setTimeout(()=>{
        setspinner(false)
    },2000)

},[image])
  return (
    <>

    {spinner?
      <div>
      <LoadingSpinner/>
    </div>:

    <div className='container '>
      <h2 className='mt-3 text-center'>Register Employee Details</h2>
      <Card className='p-3'>
        <div className="text-center mt-2 mb-2">
          <img style={{borderRadius:'50%'}} width={'50px'} height={'50px'} src={preview} alt="" />
        </div>
        <Form>
          <Row>
            {/* first name */}
         <Form.Group className='col-lg-6 mb-2'>
         <Form.Label>First Name</Form.Label>
        <Form.Control onChange={userDetails} name='fname' value={userData.fname} type="text" placeholder="First Name" />
         </Form.Group> 

         {/* Last name */}
         <Form.Group className='col-lg-6 mb-2'>
         <Form.Label>Last Name</Form.Label>
        <Form.Control onChange={userDetails} name='lname' value={userData.lname} type="text" placeholder="Last Name" />
         </Form.Group>

         {/* email */}
         <Form.Group className='col-lg-6 mb-2'>
         <Form.Label>Email</Form.Label>
        <Form.Control onChange={userDetails} name='email' value={userData.email} type="text" placeholder="Email" />
         </Form.Group>

         {/* mobile */}
         <Form.Group className='col-lg-6 mb-2'>
         <Form.Label>Mobile Number</Form.Label>
        <Form.Control onChange={userDetails} name='mobile' value={userData.mobile} type="number" placeholder="Mobile Number" />

        {/* gender */}
         </Form.Group>
         <Form.Group className='col-lg-6 mb-2'>
         <Form.Label>Gender</Form.Label>
        <Form.Check
         type={'radio'} label={'Male'} name='gender' onChange={userDetails}   value={'Male'} 
          />
           <Form.Check
         type={'radio'} label={'Female'} name='gender' onChange={userDetails}  value={'Female'}
          />


                 {/*status  */}
         </Form.Group>
         <Form.Group className='col-lg-6 mb-2'>
         <Form.Label>Select Employee Status</Form.Label>
         <Select onChange={updateStatus} defaultInputValue={status}   className='text-dark' options={options} />
         </Form.Group>

         {/* for file upload */}
         <Form.Group className='col-lg-6 mb-2'>
         <Form.Label>Choose profile Piccture</Form.Label>
        <Form.Control onChange={updateImage} name='user_profile' required type="file"  />
         </Form.Group>

         {/* employee location */}
         <Form.Group className='col-lg-6 mb-2'>
         <Form.Label>Enter Employee Location</Form.Label>
        <Form.Control onChange={userDetails} name='location' value={userData.location} type="text" placeholder="Location" />
         </Form.Group>


        {/* button */}
         <Button onClick={OnSubmit} className='btn btn-primary mt-3'>Submit</Button>

          </Row>
        </Form>
      </Card>
      <ToastContainer position='top-center'/>


    </div> }

    <ToastContainer position='top-center'/>

   



    </>
  )
}

export default Register