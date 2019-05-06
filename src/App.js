import React from 'react';
import styled from 'styled-components';
import { font } from './util'

const Sh1 = styled.h1`
  ${font.size7};
  text-align: center;
`

const Sh2 = styled.h2`
  ${font.size4};
  text-align: center;
`
const Sp = styled.p`
  ${font.base};
`

function App() {
  return (
    <>
    <div className="App">
      <Sh1>Create a type scale using Styled Components</Sh1>
      <Sh2>

        <a href="mailto:joe@astucc.io?Subject=Your Styled Components type scale tutorial" target="_top">Get in touch</a>{" "}if you have any questions.
      </Sh2>
      <Sp>
        Read the blog post explaining how I [set up a type scale using styled components](astucc.io) or visit the [github repository]()
      </Sp>
    </div>
    </>
  );
}

export default App;
