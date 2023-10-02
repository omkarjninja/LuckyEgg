import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ContentHead from './components/content-head';
import SecondPage from './components/content-body1';
import Info from './components/content-info';
import Products from './components/products';
import DecorText from './components/decor-text';
import Joinus from './components/joinus';
import Footer from './components/footer';
import Copyright from './components/copyright';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ContentHead></ContentHead>
      <SecondPage></SecondPage>
      <Info></Info>
      <Products></Products>
      <DecorText></DecorText>
      <Joinus></Joinus>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  );
}

export default App;
