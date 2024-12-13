import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Home from './pages/home';
import Work from './pages/work';
import About from './pages/about'
import Contact from './pages/contact';

import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'

function App() {
  return (
    
   
    <BrowserRouter>
     <Header />
    <Routes>
      <Route path='*' element={ <Navigate to ='/home'/>} />
      <Route path='/home' element={<Home />}></Route>
      <Route path='/work' element={<Work />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
    </BrowserRouter>
     );
    
    {/* <Banner />
    <BrandName />
    <ThreeCards />
    <GridLatestWork />
    <GridTestimonial />
    <Footer /> */}
    

  
  
 
}

export default App;
