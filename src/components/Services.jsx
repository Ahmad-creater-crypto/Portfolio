const Services = () => {
  return (
    <>
     <div className="main-container py-14">

       <h1 className="text-5xl font-bold text-center underline">Services</h1>
        <div className="services-container space-x-5 px-10 flex mt-12">

            <div className="cursor-pointer hover:bg-gray-100  bg-slate-200 p-5 text-center shadow-lg rounded-xl services1 space-y-4 ">
            <i class="text-5xl fa-brands fa-aws"></i>
                <h1 className="text-4xl">Web Development</h1>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow">Check</button>
            </div> 
            <div className=" cursor-pointer space-y-3 hover:bg-gray-100 bg-slate-200 p-5 text-center shadow-lg rounded-xl">
            <i class="text-5xl fa-solid fa-mobile"></i>
            <h1 className="text-4xl">Android Development</h1>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow">Check</button>
            </div>
            <div className= "cursor-pointer  space-y-3 hover:bg-gray-100 bg-slate-200 p-5 text-center shadow-lg rounded-xl">
            <i class="text-5xl fa-solid fa-server"></i>
            <h1 className="text-4xl">Backend Development</h1>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="px-3 py-2 bg-orange-500 text-2xl  rounded-full shadow">Check</button>
            </div>
        </div>

     </div>
    
    
    </>
        
    
  );
};
export default Services;