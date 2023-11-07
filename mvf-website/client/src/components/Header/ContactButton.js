import styled from "styled-components";

const ContactButton = () => {
    return (
        <Button href="/contact">Contact Us</Button>
    );
}

const Button = styled.a`
    background-color: #00ADEF;
    color: white;
    padding: 1rem 2rem;
    border-radius: 1rem;
    text-decoration: none;
    font-size: 1.5rem;
    margin: 0 1rem;
`;

export default ContactButton;