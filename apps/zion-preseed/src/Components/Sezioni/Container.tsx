import ScrollButton from '../Compositori/ScrollButton';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

export default function Container() {
  return (
    <>
      <Header></Header>
      <Body></Body>
      <ScrollButton></ScrollButton>
      <Footer></Footer>
    </>
  );
}
