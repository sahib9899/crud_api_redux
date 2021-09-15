import React, { useState } from "react";
import { createData, deleteData, updateData } from "../actions";
import { Button, Card, Modal } from "react-bootstrap";
import { connect } from "react-redux";

const Display = (props) => {
   const [show, setShow] = useState(false);
   const [updateUser, setUpdateUser] = useState({});
  const data = props.data;

  const updateForm = (user) => {
    console.log('user',user)
    setShow(true);
    setUpdateUser(user);
  }

  const fetchData = () => {
    console.log('h d',data)
    return data.map((user) => {
      return (
        <Card style={{ width: "10rem" }}>
          <Card.Img variant="top" src={user.avatar} />
          <Card.Body>
            <Card.Title>
              {user.first_name} {user.last_name}
            </Card.Title>
            <Card.Text>{user.email}</Card.Text>
            <Button variant="primary" onClick={()=> updateForm(user)}>
              Update
            </Button>
            <Button
              variant="secondary"
              onClick={() => props.deleteData(user.id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      );
    });
  };

  return (
    <>
    <div>
      <div>
      <Button onClick={props.createData}>Create Data</Button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6,1fr)",
          gridGap: "10px",
        }}
      >
        {fetchData()}
      </div>
    </div>
    {
      <Modal show={show} >
      <Modal.Header >
        <Modal.Title>Update user data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>First Name: </label> &nbsp;
        <input type={Text} className='mt-1' value={updateUser.first_name} onChange={(e)=>{setUpdateUser({...updateUser, first_name:e.target.value})}} /><br />
        <label>Last Name: </label> &nbsp;
        <input type={Text} className='mt-1' value={updateUser.last_name} onChange={(e)=>{setUpdateUser({...updateUser, last_name:e.target.value})}} /><br />
        <label>Enter Email: </label>&nbsp;&nbsp;
        <input type={Text} className='mt-1' value={updateUser.email} onChange={(e)=>{setUpdateUser({...updateUser, email:e.target.value})}}  />

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>setShow(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{props.updateData(updateUser);setShow(false)}} >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.crudOperation,
  };
};

const mapDispatchToProps = {
  createData,
  deleteData,
  updateData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
