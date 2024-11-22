import { useState } from "react";

const Header = ()=> {
  const[brandName,setBrandName]=useState("Ahmad Portfolio")
  const[menuLinks,setMenuLinks]=useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/about",
      id: 2,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "Portfolio",
      link: "/portfolio",
      id: 4,
    },
    {
      title: "Contact",
      link: "/contact",
      id: 5,
    },
  ]);
  const[actionButton,setactionButton]=useState({
    title: "Hire Me",
    link: "/hire-me",
    id: 6,
  })
   return( 
    <>
     <div className=" h-24 border main flex justify-between items-center px-16 bg-gray-200">
             <h1 className="text-2xl font-bold">{brandName} </h1>

         <div className="space-x-6">
            {menuLinks.map((menuLink)=>(
              <a href={menuLink.link} key={menuLink.id} className="hover:text-orange-600">{menuLink.title}</a>
            ))}
           <a href="/home" className="hover:text-orange-600">Home</a>
           {/*
          <a href="/about" className="hover:text-orange-600">About</a>
           <a href="/skills" className="hover:text-orange-600">Skills</a>
           <a href="/Portfolio" className="hover:text-orange-600">Portfolio</a>
           <a href="/contact" className="hover:text-orange-600">Contact</a>*/}
         </div>
        
         <div>
          <a href={actionButton.link} className="px-3 py-2 bg-orange-600 rounded-full shadow font-bold">{actionButton.title}</a>
         </div>


     </div>
    


    </>
   );

};
export default Header; 