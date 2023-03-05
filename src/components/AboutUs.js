import React from 'react'
import Navbar from './Navbar'

function AboutUs() {
  return (
    <>
      <Navbar/>
      <div className='' style={{height: '100vh'}}>
        <div className='px-5 py-3 h-50 d-flex align-items-end'style={{backgroundColor: '#ffdc22'}}>  
          <h1>FOREVER HUNGRY</h1>
        </div>
        <div className='h-50 bg-aboutus'>
          <div className='px-4 px-md-5 py-3 d-inline-block'>
            <div className='row'>
              <p className='text-white col-md-9 col-lg-6 p-0 m-0 font-aboutus'>
                Berangkat dari sebuah kultur darah muda yang memiliki ketertarikan dengan gaya hidup
                yang bebas dalam berekspresi, Foreverhungry hadir untuk meerangkul teman-teman
                yang kerap gelisah dalam menyampaikan suara ke muka umum. Foreverhungry hadir
                dengan beragam visual yang berusaha menggambarkan suara kaum muda-mudi
                dalam merespon setiap unsur kehidupan serta momen yang terjadi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs