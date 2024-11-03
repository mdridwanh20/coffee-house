import React from 'react'
import BannerImg from '../assets/banner.jpg';

export default function Banner() {
    return (
        <div>
            <div className=''>
                <img className='h-[600px] w-full object-cover ' src={BannerImg} alt="" />
            </div>
        </div>
    )
}
