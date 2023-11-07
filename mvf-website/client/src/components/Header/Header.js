import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import ContactButton from "./ContactButton";


const Header = () => {
    return (
        <Container>
            <Link to="/"><Logo src="/MVFSLogo.svg" alt="VFS Logo" /></Link>
            <NavAndButton>
                <NavBar />
                <ContactButton />
            </NavAndButton>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    color: white;
`;

const NavAndButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.img`
    height: 5rem;
`;

export default Header;