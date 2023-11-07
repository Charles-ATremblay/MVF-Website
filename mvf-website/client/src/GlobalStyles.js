import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
body, html, h1, h2, h3, p, ul, li {
  margin: 0;
  padding: 0;
}

/* Set a base font size and font family */
body {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
}

/* Define colors and other global styles */
:root {
  --primary-color: #0071A0;
  --secondary-color: #F26D21;
}

/* Add custom styles for specific elements or classes as needed */

/* Apply a global background color or image */
body {
  background-color: #f5f5f5;
}

`;
 
export default GlobalStyle;