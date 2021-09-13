import React from "react";
import { createData, deleteData, updateData } from "../actions";
import { Button, Card } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";

const Display = props => {
  const data = useSelector(state => state.crudOperation);
  const dispatch = useDispatch();

  const fetchData = () => {
    return data.map((user) => {
        return(
          <Card style={{ width: "10rem" }}>
            <Card.Img variant="top" src={user.avatar} />
            <Card.Body>
              <Card.Title>
                {user.first_name} {user.last_name}
              </Card.Title>
              <Card.Text>{user.email}</Card.Text>
              <Button variant="primary" onClick={props.update}>Update</Button>
              <Button variant="secondary" onClick={props.deleteData(user.id)} >Delete</Button>
            </Card.Body>
          </Card>
        )
    });
  };

  return (
    <div>
        <div>
          <Button onClick={props.create}>Create Data</Button>
        </div>
        <div style={{ display: "grid",gridTemplateColumns: "repeat(6,1fr)",gridGap: "10px",}}>
          {fetchData()}
        </div>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        crud: state.crudOperation
    }
}

const mapDispatchToProps = dispatch => {
  return{
    deleteData: (array) => dispatch(deleteData(array)),
    create: ()=>dispatch(createData()),
    update: ()=>dispatch(updateData())
}}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
