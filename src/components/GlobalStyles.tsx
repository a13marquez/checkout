import { createGlobalStyle } from 'styled-components';

const background = require('../../img/background.png');

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: none;
  }

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
button,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font: 100%;
}

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body{
    padding: 0;
    height: 100vh;
    background-image: url(${background});
    background-color: #212240;
    background-position: top left;
    background-size: cover;
    font-family: Avenir, "Avenir Next", "Segoe UI", sans-serif;
    font-weight: regular;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
  }
`;