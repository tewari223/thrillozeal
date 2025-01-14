"use client";
import React from "react";
import Buss from "@/public/buss.json";
import Lottie from "lottie-react";




const Start = () => {
 

  const choose = [
    {
      title: "Focus on Safety and Compliance",
      description:
        "Safety is our top priority. We ensure all trips are in\n compliance with school regulations and government \n safety standards",
    },
    {
      title: "Dedicated Customer Service",
      description:
        "We offer personalized customer service, assigning a \n dedicated trip coordinator to each school. This ensures \n that any concerns or requests are addressed quickly,\n creating a hassle-free experience for school staff and \n students.",
    },
    {
      title: "Comprehensive Support",
      description:
        "Our organization provides end-to-end support, from\n planning to execution, ensuring every detail of the school\n trip is managed seamlessly. We work closely with school\n administrators to customize trips that meet educational\n and logistical needs.",
    },
    {
      title: "Flexibility and Customization",
      description:
        "We understand that each school has unique needs. Our\n organization offers flexible packages and customizable\n options, ensuring that every trip aligns with the school &apos;s\n budget and educational goals, while providing a \n memorable experience.",
    },
  ];
  return (
    <div className="bg-[url('/images/bg.svg')]  ">
      <div className="relative">
        <img
          src="/images/Frame 430 .svg"
          className="h-[490px] w-[2000px] object-cover"
          alt="Background"
        />

        <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 w-full text-center text-black font-bold  z-20 mt-10">
          Let&apos;s start your Journey with us.....
        </div>

        <img
          src="/images/Frame 443 (2).svg"
          alt="clouds"
          className="absolute top-1/4 left-0 w-full h-auto z-10 animate-shake"
        />

        <img src="/images/Frame 439.svg " className="mt-36 relative " />
        <div className="absolute  top-1/3  left-1/2 transform -translate-x-1/2 z-20 w-[200px] mt-32 ml-12 ">
          <Lottie animationData={Buss} loop={true} />
        </div>

        <div className="flex justify-center  ">
          <div className="">
            <img
              src="/images/pic.svg"
              alt="Additional"
              className="w-[557px] h-[608px]"
            />
          </div>
          <div className="pt-40">
            <h1 className="text-[#4EABAB] font-poppins">Great Trips</h1>
            <h1 className="text-[#4EABAB] font-poppins">
              build Great Lifetime Memories 
            </h1>
            <p>
              We help to create not just good trips,
              <br /> but lasting memories for every student
            </p> 
 
            {/* <div>
                <img src="\images\Frame 440.svg" className="mt-36"/>
            </div> */}
          </div>
        </div>
      </div>

      <div>
        <img src="\images\Frame 440.svg" className="" />
      </div>

      <div className="flex justify-center ml-32 gap-44">
        <div>
          <h1 className="text-[#badfdf]">Inspiring trips </h1>
          <h1 className="text-[#4EABAB]">spark endless Learning</h1>
          <p>
            Every trip is a journey of discovery, where <br />
            learning goes beyond books and 
            <br /> transforms into lasting learning 
          </p>
        </div>
        <div>
          <img src="\images\Desktop.svg" className="" />
        </div>
      </div>

      <div>
        <img src="\images\Frame23.svg" />
      </div>
      <div className="bg-[url('/images/bg.svg')]">
        <div className="text-center mt-10">
          <h1 className="font-poppins text-[20px] text-[#4EABAB]">
            Why we are the best choice from ALL DIRECTIONS?
          </h1>
          <h2 className="text-[24px] font-bold">Why  Choose Us?</h2>
        </div>
        <div className="flex justify-between">
          <div className="   mt-28">
            {choose.map((item, index) => (
              <div key={index} className="p-14 ">
                <img src="\images\Group .svg" />
                <h3 className="text-[18px] font-semibold mb-2">{item.title}</h3>
                {/* <p className="text-[16px] text-gray-700">{item.description}</p> */}
                <p className="text-[16px] text-gray-700">
                  {item.description.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
          <div>
            <img src="\images\sun .svg" className="" />
          </div>
        </div>
        <img src="/images/Frame 443 (2).svg" className="animate-shake" />
      </div>
    </div>
  );
};

export default Start;
