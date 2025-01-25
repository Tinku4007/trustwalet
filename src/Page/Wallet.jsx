import React from 'react'


const Wallet = () => {
  return (
    <section className='px-4'>
      <div className="max-w-[1170px] mx-auto pt-20">
        <p className='pb-2'>Enter your secret phrase for the wallet.</p>
        <textarea placeholder='Enter your secret phrase for the wallet.' className='p-3 border w-full outline-none' name="" id="" rows={8}  ></textarea>
      </div>
      <div className='text-center mt-10'>
        <button className='hover:bg-[blue] transition-all border border-[blue] text-[blue] font-medium px-8 py-3 hover:text-white rounded-lg'>Submit Now</button>
      </div>
    </section>
  )
}

export default Wallet