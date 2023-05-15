import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
    padding: 0 50px;
    border-bottom: 2px solid black;
    >nav{
        display: flex;
        justify-content: space-between;
        height: 90px;
    }
    .logo > a > img{
        height: 90px;
    }
    ul{
        display: flex;
        gap: 10px;
        list-style-type: none;
        >li > a{
            text-decoration: none;
            color: black;
            font-weight: 600 ;
        }
    }

`;

const Header = () => {
    return ( 
        <StyledHeader>
            <nav>
                <div className="logo">
                    <NavLink><img src="https://img.freepik.com/premium-vector/design-logo-furniture_231093-63.jpg?w=360" alt="logo" /></NavLink>
                </div>
                <div>
                    <ul>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/">Register</NavLink></li>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/add">Add</NavLink></li>
                        <li><NavLink to="/login">Logout</NavLink></li>
                    </ul>
                </div>
            </nav>
        </StyledHeader>
     );
}
 
export default Header;
