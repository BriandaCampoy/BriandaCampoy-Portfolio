import Header from '@components/Header';
import Nav from '@components/Nav';
import MainData from '@components/MainData';
import ElementHeader from '../Components/ElementHeader';
function Home() {
  return (
    <>
      <Header>
          <ElementHeader/>
      </Header>
      <Nav />
      <MainData/>
    </>
  );
}
export default Home;

