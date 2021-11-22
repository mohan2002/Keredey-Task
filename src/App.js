import './App.css';
import Banner from './Components/Banner';
import Books from './Components/Books';
import Footer from './Components/Footer';
import Press from './Components/Press';
import Subscription from './Components/Subscription';
import Navbar from './Navbar Comp/Navbar';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
        <Banner/>
        <Subscription/>
        <Books/>
        <Press/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
