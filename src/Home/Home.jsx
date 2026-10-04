import React from 'react'

const Home = () => {
  return (
    <div className="flex w-screen h-180 ">
      <div className="flex flex-col justify-center items-center w-1/2 bg-amber-950  ">
        <span>Hello i'm</span>
        <span>RAVI KUMAR MAHTO</span>
        <span>Java full stack developer</span>
      </div>
      <div className=" relative w-1/2 bg-amber-950 overflow-hidden " >
        <div className=" absolute w-full h-full bg-amber-800 rotate-60 left-70 rounded-xl">1</div>
        <div className=" absolute h-2/5 w-2/3 bg-amber-50 rounded-xl top-60"></div>
      </div>
    </div>
  )
}

export default Home