import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UsersContext from "../../contexts/UsersContext";

const StyledMain = styled.main`
    height: 730px;

    h1 {
        text-align: center;
    }

    form {
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

    input {
        height: 23px;
        width: 230px;
    }

    a > input {
        background-color: #f8ec34;
        width: 100px;
        border-radius: 6px;
    }
`;

const Login = () => {
    const [formInputs, setFormInputs] = useState({
        email: '',
        password: ''
    });
    const [failedLogIn, setFailedLogIn] = useState(false);
    const { users, setCurrentUser } = useContext(UsersContext);

    const navigate = useNavigate();

    const inputHandler = (e) => {
        console.log('Input changed:', e.target.name, e.target.value);
        setFormInputs({
          ...formInputs,
          [e.target.name]: e.target.value
        });
        setFailedLogIn(false);
      };

      const formSubmit = (e) => {
        e.preventDefault();
        const loggedInUser = users.find(
          (user) =>
            user.email === formInputs.email && user.password === formInputs.password
        );
      
        if (loggedInUser) {
          setCurrentUser(loggedInUser);
          navigate('/home');
        } else {
          setFailedLogIn(true);
        }
      };

    return (
        <StyledMain>
            <h1>Prisijungti</h1>
            <form onSubmit={formSubmit}>
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={formInputs.email}
                    required
                    onChange={(e)=>{inputHandler(e)}}
                    placeholder="Email"
                />

                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formInputs.password}
                    required
                    onChange={(e)=>{inputHandler(e)}}
                    placeholder="Password"
                />
                
                    <NavLink to="/home">
                        <input type="submit" value="Log In" />  
                    </NavLink>
            </form>

                {
                    failedLogIn &&
                    <h1
                      style={{ color:'red' }}
                    >
                      Neteisingi prisijungimo duomenys
                    </h1>
                  }
        </StyledMain>
    );
};

export default Login;