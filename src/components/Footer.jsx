import React from 'react'
import footer_img from "../assets/images/ooter.png"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className="max-w-[1170px] mx-auto pt-20">
                <Link to={'https://trustwallet.com/'}><img className='pointer-events-none' src={footer_img} alt="" /></Link>
            </div>
        </div>
    )
}

export default Footer