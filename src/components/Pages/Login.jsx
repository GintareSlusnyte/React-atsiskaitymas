import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Login = () => {
    return ( 
        <main>
            <form onSubmit={(e) => {formSubmit(e)}}>
        <div>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            name="userName" id="userName"
            value={formInputs.userName}
            onChange={(e)=>{inputHandler(e)}}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password" id="password"
            value={formInputs.password}
            onChange={(e)=>{inputHandler(e)}}
          />
        </div>
        <input type="submit" value="Log In" />
      </form>
        </main>
     );
}
 
export default Login;