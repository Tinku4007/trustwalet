import React from 'react'
import logo from '../assets/images/images.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='p-7'>
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
    )
}

export default Header