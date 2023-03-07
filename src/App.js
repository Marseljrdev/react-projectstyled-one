import "./App.css";
import {
  Header,
  Section,
  Column,
  Main,
  Row,
  RowReverse,
  Footer,
} from "./components/styled";
import {
  RiComputerLine,
  RiStackLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import iphone from "./assets/iphone.jpg";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";
import { useState } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <button className="accent" onClick={() => setIsDarkTheme(!isDarkTheme)}>
          {isDarkTheme == false ? <BsFillMoonFill /> : <BsSun />}
        </button>
        <Header>Meu centesimo projeto react</Header>
        <Section>
          <Column>
            <RiComputerLine color="#fff" size={50} />
            <h3>Somente para desktop</h3>
            <span>Vamos aprender, como utilizar um frameworks</span>
          </Column>
          <Column>
            <RiStackLine color="#fff" size={50} />
            <h3>Criado com components</h3>
            <span>Utilizamos o styled components</span>
          </Column>
          <Column>
            <RiCheckboxCircleLine color="#fff" size={50} />
            <h3>Facil aproveitamento</h3>
            <span>Estamos no caminho</span>
          </Column>
        </Section>
        <Main>
          <Row>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <img src={iphone} />
          </Row>
          <RowReverse>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <img src={iphone} />
          </RowReverse>
          <Row>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <img src={iphone} />
          </Row>
        </Main>
        <Header>Contato</Header>
        <Footer>
          <Column>
            <span>about contact terms of use privacy pollicy</span>
            <i>Your website 2020. All rigths reserved.</i>
          </Column>

          <Row>
            <img src={facebook} />
            <img src={twitter} />
            <img src={instagram} />
          </Row>
        </Footer>
    </ThemeProvider>
  );
}

export default App;
