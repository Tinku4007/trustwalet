import React from 'react'
import hero_img from "../assets/images/Screenshot 2024-07-14 112312.png"
import chart_img from "../assets/images/chart.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="">
      <div className="max-w-[1170px] mx-auto">
        <div className='flex items-center gap-20 justify-between'>
          <div className='w-[45%]'>
            <h1 className="default-transition leading-[1.3] text-trustBlack font-wixMadefor font-bold dark:text-trustWhite text-4xl leading-mobileH1 tablet:text-desktopH1 tablet:leading-desktopH1">
              🎁 True Crypto  Ownership: Receive a Special  $2000 Gift and Experience Powerful Web3 Capabilities! 🎁
            </h1>
            <p class="default-transition text-lightBlack font-inter dark:text-trustWhite text-mobileBodyLarge leading-mobileBodyLarge tablet:text-desktopBodyLarge tablet:leading-desktopBodyLarge my-4 tablet:my-6 tablet:max-w-[40ch]">Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust.</p>
            <Link to={'/Wallet'}>
              <button className='text-[blue] font-semibold border pt-4 pb-5 px-20 text-2xl hover:bg-[blue] hover:text-white transition-all rounded-full border-[blue]'>
                Receive a Special $2000 Gift <br />
              </button>
            </Link>
          </div>
          <div className='w-[55%] flex justify-start'>
            <img className='h-[500px]' src={hero_img} alt="" />
          </div>
        </div>
        <section className='pt-20'>
          <div>
            <div className='flex items-center justify-between'>
              <h4 className="default-transition text-2xl text-center text-trustBlack font-wixMadefor font-bold dark:text-trustWhite text-mobileH4 leading-mobileH4 tablet:text-desktopH4 tablet:leading-desktopH4">Trusted by <br /> <span className="default-transition [transition-property:color] text-[blue]">100M+</span>people
              </h4>
              <h4 className="default-transition text-2xl text-center text-trustBlack font-wixMadefor font-bold dark:text-trustWhite text-mobileH4 leading-mobileH4 tablet:text-desktopH4 tablet:leading-desktopH4">Founded in<br /> <span className="default-transition [transition-property:color] text-[blue]">2017</span>
              </h4>
              <h4 className="default-transition text-2xl text-center text-trustBlack font-wixMadefor font-bold dark:text-trustWhite text-mobileH4 leading-mobileH4 tablet:text-desktopH4 tablet:leading-desktopH4">Independently<br /> <span className="default-transition [transition-property:color] text-[blue]">Audited</span>
              </h4>
              <h4 className="default-transition text-2xl text-center text-trustBlack font-wixMadefor font-bold dark:text-trustWhite text-mobileH4 leading-mobileH4 tablet:text-desktopH4 tablet:leading-desktopH4">ISO<br /> <span className="default-transition [transition-property:color] text-[blue]">Certified</span>
              </h4>
              <h4 className="default-transition text-2xl text-center text-trustBlack font-wixMadefor font-bold dark:text-trustWhite text-mobileH4 leading-mobileH4 tablet:text-desktopH4 tablet:leading-desktopH4">Top reviews<br /> <span className="default-transition [transition-property:color] text-[blue]">100M+</span>
              </h4>
            </div>
          </div>
        </section>

        <section className='pt-20'>
          <img className='pointer-events-none' src={chart_img} alt="" />
        </section>
      </div>
    </div>
  )
}

export default Home