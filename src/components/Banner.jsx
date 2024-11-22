import BannerImage from "../assets/bi2.png.jpg";
const Banner = () => {
  return (
    <div className="main-container flex items-center">
            <div className=" w-full flex justify-center">
           <div className="w-2/3 ms-3" >         
              <h3 className="text-3xl font-semibold">Hi,I am</h3>
              <h1 className=" mt-4 text-5xl font-bold">Ahmad Hassan Khan</h1>
              <h2 className=" mt-4 text-2xl font-bold">I am a Frontend Developer</h2>
              <p className="mt-3">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

               <div className="icons-container flex space-x-5">
                <a className=" hover:bg-orange-500 border cursor-pointer w-14 h-14 rounded-full flex justify-center items-center ">
              <i class="fa-brands text-4xl fa-facebook"></i>
                 </a>
                 <a className=" hover:bg-orange-500 border cursor-pointer w-14 h-14 rounded-full flex justify-center items-center ">
                 <i class="fa-brands text-4xl fa-instagram"></i>
                 </a>
               <a className=" hover:bg-orange-500 border cursor-pointer w-14 h-14 rounded-full flex justify-center items-center ">        
                 <i class="fa-brands text-4xl fa-youtube"></i>
              </a>
              <a className=" hover:bg-orange-500 border cursor-pointer  w-14 h-14 rounded-full flex justify-center items-center ">
              <i class="fa-brands text-4xl fa-linkedin"></i>
  
              </a>
                
               
               </div>


              <br/>
              <a className=" text-2xl px-3 py-2 bg-orange-500 rounded-full shadow-lg " href="/contact">Contact me</a>
            </div>
            </div>
           <div className=" w-full flex justify-center mb-20">
           <img className="rounded-full shadow-lg w-fit" src={BannerImage}  />
           </div>

    </div>
  );
};
export default Banner;