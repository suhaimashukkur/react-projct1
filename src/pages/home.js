import React, { useState } from 'react';
import Banner from '../components/homebanner/homebanner'
import BrandName from '../components/brandName/brandName';
import ThreeCards from '../components/threeCards/threeCards';
import GridLatestWork from '../components/grid-latestWork/gridLatestWork';
import GridTestimonial from '../components/gridTestimonial/gridTestimonial';
import Footer from '../components/footer/footer';
import ContactModal from '../contactModal/contactModal';

function Home() {
  const[modal,setModal] = useState(false)
  return (
    
    <div className='home-page'> 
    <ContactModal setModal = {setModal} modal = {modal}/>
    <Banner setModal = {setModal}/>
    <BrandName />
    <ThreeCards />
    <GridLatestWork />
    <GridTestimonial />
    <Footer />
    </div>
  )
}

export default Home