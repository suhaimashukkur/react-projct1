import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Home from './pages/home';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    
   
    <BrowserRouter>
     <Header />
    <Routes>
      <Route path='/home' element={<Home />}></Route>

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
