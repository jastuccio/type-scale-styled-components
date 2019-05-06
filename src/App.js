import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { font } from './util'

const Sh1 = styled.h1`
  ${font.size7};
  text-align: center;
`

const Sh2 = styled.h2`
  ${font.size4};
  text-align: center;
  padding-bottom: 1rem;
`
const Sp = styled.p`
  ${font.size1};
  line-height: 1.9;
  text-align: justify;
  hyphens: auto;
  max-width: 35em;
  margin: 2.5rem auto;
  word-wrap: break-word;
  overflow-wrap: break-word;


}
`

const Sfooter = styled.p`
  ${font.small};
  margin-top: 5rem;
  text-align: center;
`

function App() {
  return (
    <>
      <GlobalStyles />
        <div className="App">
          <Sh1>Create a type scale using Styled Components</Sh1>

          <Sp>Recently I dove in and started learning Styled Components. I like it overall, even though it is 'Y.A.F.T.' in the endless stack of modern web development.  This is a quick demonstration of how I set up a type scale for React and Gatsby projects. Creating a type scale will improve your workflow and prevent inconsistencies in your work flow.</Sp>
          <Sp>The minimal styling of this example is intentional. I wanted the code to have the bare minimum styling to make the font sizing easy to find. More information can be found in the blog post explaining how I {" "}
            <a href="https://astucc.io" target="_blank" rel="noopener noreferrer">
            set up a type scale using styled components</a>
            {" "} or you can visit the {" "}<a href="https://github.com/jastuccio/type-scale-styled-components" target="_blank" rel="noopener noreferrer">github repository</a>
          </Sp>
          <Sp>
            <a href="mailto:joe@astucc.io?Subject=Your Styled Components type scale tutorial" target="_top">Get in touch</a>{" "}if you have any questions.
          </Sp>
          <Sfooter>
              Adapted from the type scale discussed in <a href="https://refactoringui.com" target="_blank" rel="noopener noreferrer">'Refactoring UI'</a>{" "}by Adam Wathan and Steve Schoger
          </Sfooter>
        </div>
      </>
    );
}

export default App;
