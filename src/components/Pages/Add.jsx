import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as generatedId } from 'uuid';
import PostsContext from "../../contexts/PostsContext";
import styled from "styled-components";

const StyledMain = styled.main`
  height: 730px;

h1{
  text-align: center;
}
form{
  position: relative;
  margin: 100px auto;
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  box-shadow: 0 0 4px;
}
input{
    margin-inline: 10px;
    height: 23px;
    width: 230px;
}

textarea{
    margin: 10px;
    width: 230px;
    height: 50px;
}
input.submit{
  background-color: #f8ec34;
  width: 100px;
  border-radius: 6px;
}
`;  

const Add = () => {
  const { PostsActionTypes, setPosts } = useContext(PostsContext);
  const navigate = useNavigate();

  const [formInputs, setFormInputs] = useState({
    name: '',
    image: '',
    description: ''
  });

  const inputHandler = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value
    });
  };

  const formHandler = e => {
    e.preventDefault();
    const newPost = {
      ...formInputs,
      id: generatedId()
    };
    setPosts({
      type: PostsActionTypes.add,
      data: newPost
    });
    navigate('/home');
  };

  return (
    <StyledMain>
      <h1>Pridėti naują post'ą</h1>
      <form onSubmit={formHandler}>
        <div>
          <label htmlFor="name">Pavadinimas:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formInputs.name}
            onChange={inputHandler}
          />
        </div>
        <div>
          <label htmlFor="image">Nuotrauka:</label>
          <input
            type="url"
            name="image"
            id="image"
            required
            value={formInputs.image}
            onChange={inputHandler}
          />
        </div>
        <div>
          <label htmlFor="description">Aprašymas:</label>
          <textarea
            name="description"
            id="description"
            required
            value={formInputs.description}
            onChange={inputHandler}
          ></textarea>
        </div>
        <input className="submit" type="submit" value="Pridėti" />
      </form>
    </StyledMain>
  );
};

export default Add;

