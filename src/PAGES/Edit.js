import React from 'react'
import { Button, Card, Form, Row } from 'react-bootstrap'
import Select from 'react-select'

function Edit() {
 
  
//status options
const options = [
  { value: 'Active', label: 'Active' },
  { value: 'Inactive', label: 'Inactive' },
  
]
return (
  <>

  <div className='container '>
    <h2 className='mt-3 text-center'>Update Employee Details</h2>
    <Card className='p-3'>
      <div className="text-center mt-2 mb-2">
        <img width={'50px'} height={'50px'} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
      </div>
      <Form>
        <Row>
          {/* first name */}
       <Form.Group className='col-lg-6 mb-2'>
       <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="First Name" />
       </Form.Group> 

       {/* Last name */}
       <Form.Group className='col-lg-6 mb-2'>
       <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Last Name" />
       </Form.Group>

       {/* email */}
       <Form.Group className='col-lg-6 mb-2'>
       <Form.Label>Email</Form.Label>
      <Form.Control type="text" placeholder="Email" />
       </Form.Group>

       {/* mobile */}
       <Form.Group className='col-lg-6 mb-2'>
       <Form.Label>Mobile Number</Form.Label>
      <Form.Control type="number" placeholder="Mobile Number" />

      {/* gender */}
       </Form.Group>
       <Form.Group className='col-lg-6 mb-2'>
       <Form.Label>Gender</Form.Label>
      <Form.Check
       type={'radio'} label={'Male'} name='gender' value={'Male'} 
        />
         <Form.Check
       type={'radio'} label={'Female'} name='gender' value={'Female'}
        />
               
       </Form.Group>
       <Form.Group className='col-lg-6 mb-2'>
       <Form.Label>Select Employee Status</Form.Label>
       <Select  className='text-dark' options={options} />
       </Form.Group>

       {/* for file upload */}
       <Form.Group className='col-lg-6 mb-2'>
       <Form.Label>Choose profile Piccture</Form.Label>
      <Form.Control name='user_profile' required type="file"  />
       </Form.Group>

       {/* employee location */}
       <Form.Group className='col-lg-6 mb-2'>
       <Form.Label>Enter Employee Location</Form.Label>
      <Form.Control type="text" placeholder="Location" />
       </Form.Group>

       <Button className='btn btn-primary mt-3'>Submit</Button>

        </Row>
      </Form>
    </Card>


  </div>



  </>
)
}

export default Edit