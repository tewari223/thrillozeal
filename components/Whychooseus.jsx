import Image from "next/image";
import React from "react";

const Whychooseus = () => {
  const city = [
    {
      title: "Nainital",
      image1: "/images/Frame4.svg",
      image2: "/images/pin.svg",
    },

    {
      title: "Dehradun", 
      image1: "/images/Frame4.svg",
      image2: "/images/pin.svg",
    },

    {
      title: "Shimla",
      image1: "/images/Frame4.svg",
      image2: "/images/pin.svg",
    },
    {
      title: "Goa",
      image1: "/images/Frame4.svg",
      image2: "/images/pin.svg",
    }, 
  ];
  return (
    <div className="bg-blue-800">
      <div className="flex justify-center items-center pb-[420px]">
        <Image
          src="/images/img.svg"
          alt="ijmg"
          width={1000}
          height={1000}
          className="w-auto h-[550px] "
        />
      </div>

      <div className="flex justify-center items-center bg-[url('/images/grass.svg')] bg-cover bg-center object-cover h-[50vh] relative">
        <div className="bg-green-800 w-[1250px]  rounded-3xl -top-[450px] absolute">
          <div className="w-[1220px]  border-4 border-white rounded-3xl m-4  ">
            <h1 className="text-white text-center mt-10 rounded">
              Recommended Destinations
            </h1>
            <div className="flex justify-center  gap-5 mt-5">
              <div>
              <img src="\images\Frame 8 (1).svg" className="" />
              </div>
              <div>
              <img src="\images\Frame 8.svg" className="" />
              </div>
            </div>
            <div className=" p-6 flex gap-4">
              {city.map((item, index) => (
                <div key={index}>
                  <div className="">
                    <div className="mb-[-10px] z-30">
                    <img src={item.image2}
                    className=""/>
                    </div>
                    <img
                      src={item.image1}
                      className=""
                      style={{ boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)" }}
                    />

                    <p className="bg-white w-[270px] h-[50px] text-center  ">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <img src="\images\pol.svg" className=""  />
        </div>
      </div>
 


      {/* <div>   
    
    </div> */}
    </div>
  );
}; 

export default Whychooseus;
