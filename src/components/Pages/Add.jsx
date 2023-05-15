import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as generatedId } from 'uuid';
import PostsContext from "../../contexts/PostsContext";

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
    <main>
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
        <input type="submit" value="Pridėti" />
      </form>
    </main>
  );
};

export default Add;