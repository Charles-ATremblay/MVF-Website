import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

const NavBar = () => {
    return (
        <Container>
            <NavOptions>
                <NavOption><StyledLink to="/about">About</StyledLink></NavOption>
                <NavOption><StyledLink to="/sponsors">Sponsors</StyledLink></NavOption>
                <NavOption>
                    <TeamDropdown>
                        <StyledLink to="/team">Team <BsChevronDown /></StyledLink>
                        <TeamSubmenu>
                            <StyledLink to="/team/23-24">23-24</StyledLink>
                            {/* Add more team links as needed */}
                        </TeamSubmenu>
                    </TeamDropdown>
                </NavOption>
                <NavOption><StyledLink to='/projects'>Projects</StyledLink></NavOption>
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
    border-radius: 5px; 
    width: 100%; 
    text-align: center; 
    padding: 10px; 
`;

const TeamDropdown = styled.div`
    position: relative;

    &:hover {
        ${TeamSubmenu} {
            display: block;
            transition: display 0.2s ease-in-out;
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
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: #ff0000;
    }
`;

export default NavBar;