import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    padding: 20px 50px;
    border-top: 2px solid black;
    height: 100px;
    .copyright{
        font-weight: 400;
        font-size: 13px;
    }

`;

const Footer = () => {
    return ( 
        <StyledFooter>
            <div className='copyright'>
                ©2023 by create_react_app.com, Inc.
            </div>
            <NavLink to="https://www.tiktok.com/"><FontAwesomeIcon icon={faTiktok} /></NavLink>
            <NavLink to="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></NavLink>
            <NavLink to="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} /></NavLink>
            <NavLink to="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></NavLink>
        </StyledFooter>
     );
}
 
export default Footer;