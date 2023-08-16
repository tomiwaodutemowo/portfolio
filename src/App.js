
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "./components/Navbar"
import Header from "./components/Header";
import About from "./components/About";
import Services from './components/services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';





export default function App() {
  return (
    <>
<Navbar/>
<Header/>
<About/>
<Services/>
<Portfolio/>
<Contact/>
<Footer/>


    </>
  );
}   