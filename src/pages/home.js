import React from 'react';
import Banner from '../components/homebanner/homebanner'
import BrandName from '../components/brandName/brandName';
import ThreeCards from '../components/threeCards/threeCards';
import GridLatestWork from '../components/grid-latestWork/gridLatestWork';
import GridTestimonial from '../components/gridTestimonial/gridTestimonial';
import Footer from '../components/footer/footer';

function home() {
  return (
    
    <div> 
    <Banner />
    <BrandName />
    <ThreeCards />
    <GridLatestWork />
    <GridTestimonial />
    <Footer />
    </div>
  )
}

export default home