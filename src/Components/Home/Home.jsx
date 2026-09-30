import React from 'react'

const Home = () => {
    return (
       <div className="flex flex-row h-200 bg-black text-white">
           <div className="basis-1/2 flex items-center justify-center flex-col  h-200">
               <h1 className="text-xl font-bold">Hello, I’m</h1>
               <h1 className="text-5xl font-bold">RAVI KUMAR MAHTO</h1>
               <h1 className="pt-2 text-2xl font-bold">CREATIVE FRONT-END WEB DEVELOPER</h1>
           </div>
           <div className="basis-1/2 flex items-center justify-center h-200">
               <div className="w-100 h-80 bg-gray-400 rounded-xl"></div>
           </div>
       </div>
    )
}
export default Home

