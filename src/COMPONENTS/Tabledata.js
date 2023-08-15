import React from 'react'
import { Card, Row,Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';


function Tabledata(fullData) {
  console.log(fullData);
  return (
    <>
   <Row>
    <Col ></Col>
    <Col className='text-center' xl={10}>
    <Card>
        <Table striped="columns" responsive>
                      <thead className='head bg-primary'>
                        <tr>
                          <th>No.</th>
                          <th >Full Name</th>
                          <th>Email</th>
                          <th>Mobile</th>
                          
                          <th>Status</th>
                          <th>Profile</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>

                        {
                          fullData.fullData.map((item,index)=>(
                            <tr>
                            <td>{index+1}</td>
                            <td>{item.fname }&nbsp;{item.lname}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>
                            <Dropdown>
                                <Dropdown.Toggle variant={item.status=="Active"?"success":"danger"} id="dropdown-basic">
                                             {item.status}
                               </Dropdown.Toggle>
  
        
                             </Dropdown>
                              
  
                            </td>
                            <td><img style={{borderRadius:'50%'}} width={'50px'} height={'50px'} src="https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-avatar-icon-abstract-user-login-icon-png-image_3917181.jpg" alt="" /></td>
                            <td><DropdownButton variant='sucess' id="dropdown-basic-button" title=":">
                                   <Link style={{textDecoration:'none'}} to={'/view/1'}> <Dropdown.Item href='/view/1' ><i style={{color:'red'}} class="fa-solid fa-eye me-2"></i>View</Dropdown.Item></Link>
                                    <Link style={{textDecoration:'none'}} to={'/edit/1'}> <Dropdown.Item href='/edit/1' ><i style={{color:'darkgreen'}} class="fa-solid fa-pen me-2"></i>Edit</Dropdown.Item></Link>
                                       <Dropdown.Item href="#/action-3"><i style={{color:'orange'}} class="fa-solid fa-trash me-2"></i>Delete</Dropdown.Item>
                                 </DropdownButton>
                                 </td>
                            
                          </tr>


                          ))
                        }
                       
                        
                     
                      </tbody>
                    </Table>
    </Card>
    </Col>
    <Col ></Col>
  
   </Row>
    </>
  )
}

export default Tabledata