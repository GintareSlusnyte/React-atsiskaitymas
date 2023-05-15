import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UsersContext from "../../contexts/UsersContext";
import { compareSync } from 'bcryptjs';

const StledMain = styled.main`
    height: calc(100vh - 250px);

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
  height: 23px;
  width: 230px;
}
a > input{
  background-color: #fbcc00;
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
    const { users, setCurrentUser} = useContext(UsersContext);

    const navigate = useNavigate();

    const inputHandler = e => {
        setFormInputs({
            ...formInputs,
            [e.target.email]:e.target.value
        });
        setFailedLogIn(false);
    }

    const formSubmit = e => {
        e.preventDefault();
        const loggedInUser = users.find(user => user.email === formInputs.email && compareSync(formInputs.password, user.password));
    
        if(loggedInUser){
          setCurrentUser(loggedInUser);
          navigate('/home');
        } else {
          setFailedLogIn(true);
        }
      }

    return ( 
        <StledMain>
            <form onSubmit={(e) => {formSubmit(e)}}>

                <input
                    type="text"
                    name="email" id="email"
                    value={formInputs.email}
                    onChange={(e)=>{inputHandler(e)}}
                    placeholder="Email"
                />

                <input
                    type="password"
                    name="password" id="password"
                    value={formInputs.password}
                    onChange={(e)=>{inputHandler(e)}}
                    placeholder="Password"
                />
    
                <NavLink to="/home"><input type="submit" value="Log In" /></NavLink>
      </form>
      {
        failedLogIn &&
        <h1
        style={{ color:'red' }}
        >
            Neteisingi prisijungimo duomenys
        </h1>
      }
        </StledMain>
     );
}
 
export default Login;