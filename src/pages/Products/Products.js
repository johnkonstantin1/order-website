import React from 'react'
import "./Products.css"
function Products() {
  return (
    <>
      <section className='hero-section'>
        <div className='card-container'>
            <div className='card'>
                <div className='card-background'>
                    <img src='/images/flowers1.jpg'/>
                </div>
                <div className='content'>
                    <div className='card-category'>3D design</div>
                    <h1>Great workout</h1>
                </div>
            </div>
            <div className='card'>
                <div className='card-background'>
                    <img src='/images/japan1.jpg'/>
                </div>
                <div className='content'>
                    <div className='card-category'>3D design</div>
                    <h1>Great workout</h1>
                </div>
            </div>
            <div className='card'>
                <div className='card-background'>
                    <img src='/images/japan2.jpg'/>
                </div>
                <div className='content'>
                    <div className='card-category'>3D design</div>
                    <h1>Great workout</h1>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Products
