import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
    border-bottom: 2px solid black;
    >nav{
        display: flex;
        justify-content: space-between;
        height: 100px;
    }
    .logo > a > img{
        height: 100px;
    }

`;

const Header = () => {
    return ( 
        <StyledHeader>
            <nav>
                <div className="logo">
                    <NavLink><img src="https://t4.ftcdn.net/jpg/03/59/58/21/360_F_359582124_yNqODaj57vwEazXSbmuK10z3qeOvThdI.jpg" alt="logo" /></NavLink>
                </div>
                <div>
                    <ul>
                        <li><NavLink>Login</NavLink></li>
                        <li><NavLink to="/">Register</NavLink></li>
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>Add</NavLink></li>
                        <li><NavLink>Logout</NavLink></li>
                    </ul>
                </div>
            </nav>
        </StyledHeader>
     );
}
 
export default Header;
