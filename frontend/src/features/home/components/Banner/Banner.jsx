import React from 'react'
import banner from '../../../../assets/image/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <img src={banner} alt="banner" />
            <div className='banner-content'>
                <div className='banner-text'>
                    <p>Elevate Your Style<br />
                        Timeless Fashion, Sustainable<br />
                        Choices</p>
                </div>
                <button>Shop Now</button>
            </div>
        </div>
    )
}

export default Banner