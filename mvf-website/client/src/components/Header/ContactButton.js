import styled from "styled-components";
import { Link } from "react-router-dom";

const ContactButton = () => {
    return (
        <CustomLink to="/contact">Contact Us</CustomLink>
    );
}

const CustomLink = styled(Link)`
    background-color: #ff0000; 
    color: white;
    padding: 1rem 2rem;
    border-radius: 1rem;
    text-decoration: none;     
    font-size: 1.5rem;
    margin: 0 1rem;
    text-transform: uppercase;


    &:hover {
        background-color: black;
        transition: background-color 0.2s ease-in-out; 
    }
`;

export default ContactButton;