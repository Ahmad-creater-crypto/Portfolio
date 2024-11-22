import { useState } from "react";
import BannerImage  from "../assets/bi3.png.jpg";
const About = () => {
  const[data,setData]=useState({
    image:BannerImage,
    title:"Web Developer & App Developer ",
    desc1: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    desc2:`lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    actionButton:{
      title:"Read More...",
      link:"/read more"
    }
  });  
  return (
   <>
    <div className="main-container bg-gray-100 border py-16">
           <h1 className="text-center pb-16 text-4xl underline font-bold">About Me</h1>
          <div className="container flex items-center">
            <div className="w-full flex justify-center">
          <img className="rounded-full shadow-lg" src={data.image} alt="" />
            </div>
           <div className="w-full  flex justify-center">
            <div className="space-y-5 w-2/3">
            <h1 className="text-5xl font-semibold">{data. title}</h1>
             <p>{data.desc1}</p>
             <p>{data.desc2}</p>
             <button className="bg-orange-500 px-3 py-2 rounded-full text-2xl shadow-lg">{data.actionButton.title}</button>
            </div>
           </div> 
          </div>
    </div>


   </>
  );
};
export default About;