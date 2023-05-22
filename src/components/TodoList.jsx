import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { TODOACTIONS } from "../store/todo/todoReducer";
const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editTodo, setEditeTodo] = useState();
  const [editFormVisibility, setEditFormVisibility] = useState(0);

  const enebled = todo.trim().length > 0;
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todo,
      completed: false,
    };
    setTodo("");
    dispatch({ type: TODOACTIONS.ADD_TODO, payload: todoObj });
  };
  const todos = useSelector((state) => state.todo);

  const removeTodoHandler = (id) => {
    dispatch({ type: TODOACTIONS.REMOVE_TODO, payload: id });
  };
  const deleteAllHandler = () => {
    dispatch({ type: TODOACTIONS.DELETE_ALL });
  };
  const handleCheckBox = (id) => {
    dispatch({ type: TODOACTIONS.COMPLETE, payload: id });
  };

  const handleEditClick = (todo) => {
    setEditFormVisibility(todo.id);
    setEditeTodo(todo);
    setEditValue(todo.todo);
  };
  const editINputChangeHandler = (e) => {
    setEditValue(e.target.value);
  };
  const cancelUpdate = () => {
    setEditFormVisibility(null);
  };

  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    };
    dispatch({ type: TODOACTIONS.EDIT_TODO, payload: editedObj });
    setEditFormVisibility(null);
  };
  return (
    <Container>
      <h1>TODO APP</h1>
      <div>
        <StyledInput
          value={todo}
          type="text"
          placeholder="Write your task....."
          onChange={inputChangeHandler}
        />
        <Button onClick={handleSubmit} disabled={!enebled}>
          ADD TODO
        </Button>
        <Button3 onClick={deleteAllHandler}>Delete All</Button3>
      </div>

      {todos.map((item, index) => (
        <StyledUl key={index}>
          <li>
            <CheckBox
              type="checkbox"
              checked={item.completed}
              onChange={() => handleCheckBox(item.id)}
            ></CheckBox>
            {item.id === editFormVisibility ? (
              <div>
                <EditeInput
                  type="text"
                  value={editValue || ""}
                  onChange={editINputChangeHandler}
                />
              </div>
            ) : (
              <div>
                <p
                  style={
                    item.completed === true
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                >
                  {item.todo}
                </p>
              </div>
            )}

            <div>
              {item.id === editFormVisibility ? (
                <Button2 onClick={editSubmit}>Save</Button2>
              ) : null}

              {item.id === editFormVisibility ? (
                <Button3 onClick={cancelUpdate}>Cancel</Button3>
              ) : (
                <Button2 onClick={() => handleEditClick(item)}>Edit</Button2>
              )}
              <Button onClick={() => removeTodoHandler(item.id)}>Delete</Button>
            </div>
          </li>
        </StyledUl>
      ))}
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  align-self: center;
  h1 {
    color: aliceblue;
    font-size: 40px;
    font-weight: 900;
  }
`;
const EditeInput = styled.input`
  width: 300px;
  border: none;
  padding: 10px;
  outline: none;
  color: #0e0d0d;
  font-size: 30px;
`;
const StyledInput = styled.input`
  width: 300px;
  padding: 10px;
  color: #141515;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  border: 5px;
  background-color: #ac0395;
  color: aliceblue;
  border-radius: 10px;
  margin-left: 20px;
  :hover {
    background-color: #fa03d9;
  }
  :disabled {
    opacity: 70%;
  }
`;
const StyledUl = styled.ul`
  border: 2px solid white;
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  border-radius: 10px;
  background-color: #06855b;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-size: 30px;
    font-weight: 900;
  }
  p {
    max-width: 400px;
    margin: 0;
  }
`;

const Button2 = styled.button`
  padding: 10px;
  font-size: 20px;
  border: 5px;
  background-color: #1b145e;
  color: aliceblue;
  border-radius: 10px;
  :hover {
    background-color: #1320dc;
  }
`;
const Button3 = styled.button`
  padding: 10px;
  font-size: 20px;
  border: 5px;
  background-color: #640605;
  color: aliceblue;
  border-radius: 10px;
  margin-left: 40px;
  :hover {
    background-color: #d20606;
  }
`;

const CheckBox = styled.input`
  width: 50px;
  height: 50px;
  padding: 10px;
`;
