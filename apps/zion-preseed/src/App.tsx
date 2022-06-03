import { css } from 'styled-components';
import { introData } from './Components/Datas/intro';
import Container from './Components/Sezioni/Container';
import { DARK } from './js/colori';

const dynamic = css`
grid-area: titolo;
color: ${DARK};
`

function App() {
  return (
    <>
      <Container />
      {/* <introData.Wrapper>
        <introData.Page>
          <introData.Titolo div={{dynamic}} tipo={2}/>
        </introData.Page>
      </introData.Wrapper> */}
    </>
  );
}

export default App;
