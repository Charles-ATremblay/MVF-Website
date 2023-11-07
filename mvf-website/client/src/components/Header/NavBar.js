import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Container>
            <NavOptions>
                <NavOption><Link to="/about">About</Link></NavOption>
                <NavOption><Link to="/sponsors">Sponsors</Link></NavOption>
                <NavOption><TeamDropdown>
                <Link to="/team">Team</Link>
                <TeamSubmenu>
                    <Link to="/team/23-24">23-24 Team</Link>
                    
                </TeamSubmenu>
            </TeamDropdown></NavOption>
            <NavOption><Link to='/projects'>Projects</Link></NavOption>
            </NavOptions>
                        
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const TeamSubmenu = styled.div`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;
`;

const TeamDropdown = styled.div`
    position: relative;

    /* Add styles for the dropdown menu */
    &:hover {
        & ${TeamSubmenu} {
            display: block;
        }
    }
`;

const NavOptions = styled.ul`
    display: flex;
    flex-direction: row;

    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const NavOption = styled.li`
    margin: 0 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: white;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: #ff0000;
    }
`;


export default NavBar;
