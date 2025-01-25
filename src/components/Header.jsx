import React from 'react'
import logo from '../assets/images/images.png'
import ham from '../assets/images/Screenshot 2025-01-25 173012.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
        <div className='p-7 desktop'>
            <div className="container mx-auto">
                <div className='flex items-center justify-between'>
                   <Link to={'/'}><img className='h-14' src={logo} alt="" /></Link>
                    <nav>
                        <ul className='flex gap-10 items-center'>
                            <li><Link to={'/'}>Wallet</Link></li>
                            <li><Link to={'https://trustwallet.com/swap'}>Features</Link></li>
                            <li><Link to={'https://developer.trustwallet.com/developer'}>Build</Link></li>
                            <li><Link to={'https://support.trustwallet.com/en/support/home'}>Support</Link></li>
                            <li><Link to={'https://trustwallet.com/about-us'}>About</Link></li>
                            <Link to={"https://trustwallet.com/download"} className='flex items-center gap-5'>
                                <div>
                                    <button className='bg-[blue] text-white font-semibold border pt-1 pb-2 px-4 rounded-3xl border-[blue]'>Download</button>
                                </div>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

        <header className='px-5 mobile py-4 flex items-center justify-between'>
            <div>
        <svg width="39" height="43" viewBox="0 0 39 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.710815 6.67346L19.4317 0.606445V42.6064C6.05944 37.0059 0.710815 26.2727 0.710815 20.207V6.67346Z" fill="#0500FF"></path><path d="M38.1537 6.67346L19.4329 0.606445V42.6064C32.8051 37.0059 38.1537 26.2727 38.1537 20.207V6.67346Z" fill="url(#paint0_linear_524_75868undefined)"></path><defs><linearGradient id="paint0_linear_524_75868undefined" x1="33.1809" y1="-2.33467" x2="19.115" y2="42.0564" gradientUnits="userSpaceOnUse"><stop offset="0.02" stop-color="#0000FF"></stop><stop offset="0.08" stop-color="#0094FF"></stop><stop offset="0.16" stop-color="#48FF91"></stop><stop offset="0.42" stop-color="#0094FF"></stop><stop offset="0.68" stop-color="#0038FF"></stop><stop offset="0.9" stop-color="#0500FF"></stop></linearGradient></defs></svg>
        </div>
        <div>
           <Link to={"https://trustwallet.com/"}><img className='w-[70px]' src={ham} alt="ham" /></Link>
        </div>
        </header>

        </>
    )
}

export default Header