import React from 'react'
import Shop from './Shop'
import FilterSideBar from './FilterSideBar'

const LibraryLayout = () => {
  return (
    <div className=' flex gap-4 flex-col md:flex-row'>
      <div className=' w-64'></div>
      <div className=' my-5 mx-3'>
        <FilterSideBar/>
      </div>
      <Shop/>
    </div>
  )
}

export default LibraryLayout