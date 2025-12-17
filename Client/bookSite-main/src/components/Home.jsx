import React from 'react'
import Banner from './Banner'
import FavBooks from './FavBooks'
import BestSellBooks from './BestSellBooks'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'





  

function Home() {

  return (
    <div>
      <Banner/>
      <FavBooks/>
      <BestSellBooks/>
      <PromoBanner/>
      <OtherBooks/>
      {/* <Review/> */}
    </div>
  )
}

export default Home