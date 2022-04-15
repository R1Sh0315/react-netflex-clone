import NavBar from './components/navbar/navebar';
import MainContainComponent from './components/body/body';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <MainContainComponent></MainContainComponent>
      <Footer></Footer>
    </div>
  );
}

export default App;
