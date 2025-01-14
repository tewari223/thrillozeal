"use client";
import React from "react";

const Ourpackages = () => {
  const Package = [
    {
      Image1: "/images/Frame 303.svg",
      Title: "7 days & 8 Nights",
      Image2: "/images/star.svg",
      Number1: "4.6",
      Number2: "(3.4k)",
      place: "Place Name goes here",
      head1: "1d",
      head2: "Mussoorie",
      head3: "1d",
      head4: "Mussoorie",
      R1: "INR 20,000",
      R2: "INR 30,000",
      R3: "SAVE INR 10,000",
      Image3: "/images/Vector.svg",
      Head6: "Avail this Package",
    },
    {
      Image1: "/images/Frame 303.svg",
      Title: "7 days & 8 Nights",
      Image2: "/images/star.svg",
      Number1: "4.6",
      Number2: "(3.4k)",
      place: "Place Name goes here",
      head1: "1d",
      head2: "Mussoorie",
      head3: "1d",
      head4: "Mussoorie",
      R1: "INR 20,000",
      R2: "INR 30,000",
      R3: "SAVE INR 10,000",
      Image3: "/images/Vector.svg",
      Head6: "Avail this Package",
    },

    {
      Image1: "/images/Frame 303.svg",
      Title: "7 days & 8 Nights",
      Image2: "/images/star.svg",
      Number1: "4.6",
      Number2: "(3.4k)",
      place: "Place Name goes here",
      head1: "1d",
      head2: "Mussoorie",
      head3: "1d",
      head4: "Mussoorie",
      R1: "INR 20,000",
      R2: "INR 30,000",
      R3: "SAVE INR 10,000",
      Image3: "/images/Vector.svg",
      Head6: "Avail this Package",
    },
  ];
  const Package2 = [
    {
      Image1: "/images/Frame 303.svg",
      Title: "7 days & 8 Nights",
      Image2: "/images/star.svg",
      Number1: "4.6",
      Number2: "(3.4k)",
      place: "Place Name goes here",
      head1: "1d",
      head2: "Mussoorie",
      head3: "1d",
      head4: "Mussoorie",
      R1: "INR 20,000",
      R2: "INR 30,000",
      R3: "SAVE INR 10,000",
      Image3: "/images/Vector.svg",
      Head6: "Avail this Package",
    },

    {
      Image1: "/images/Frame 303.svg",
      Title: "7 days & 8 Nights",
      Image2: "/images/star.svg",
      Number1: "4.6",
      Number2: "(3.4k)",
      place: "Place Name goes here",
      head1: "1d",
      head2: "Mussoorie",
      head3: "1d",
      head4: "Mussoorie",
      R1: "INR 20,000",
      R2: "INR 30,000",
      R3: "SAVE INR 10,000",
      Image3: "/images/Vector.svg",
      Head6: "Avail this Package",
    },

    {
      Image1: "/images/Frame 303.svg",
      Title: "7 days & 8 Nights",
      Image2: "/images/star.svg",
      Number1: "4.6",
      Number2: "(3.4k)",
      place: "Place Name goes here",
      head1: "1d",
      head2: "Mussoorie",
      head3: "1d",
      head4: "Mussoorie",
      R1: "INR 20,000",
      R2: "INR 30,000",
      R3: "SAVE INR 10,000",
      Image3: "/images/Vector.svg",
      Head6: "Avail this Package",
    },
  ];

  const Package3 = [
    {
      Image1: "/images/Frame 303.svg",
      Title: "7 days & 8 Nights",
      Image2: "/images/star.svg",
      Number1: "4.6",
      Number2: "(3.4k)",
      place: "Place Name goes here",
      head1: "1d",
      head2: "Mussoorie",
      head3: "1d",
      head4: "Mussoorie",
      R1: "INR 20,000",
      R2: "INR 30,000",
      R3: "SAVE INR 10,000",
      Image3: "/images/Vector.svg",
      Head6: "Avail this Package",
    },

    {
      Image1: "/images/Frame 303.svg",
      Title: "7 days & 8 Nights",
      Image2: "/images/star.svg",
      Number1: "4.6",
      Number2: "(3.4k)",
      place: "Place Name goes here",
      head1: "1d",
      head2: "Mussoorie",
      head3: "1d",
      head4: "Mussoorie",
      R1: "INR 20,000",
      R2: "INR 30,000",
      R3: "SAVE INR 10,000",
      Image3: "/images/Vector.svg",
      Head6: "Avail this Package",
    },

    {
      Image1: "/images/Frame 303.svg",
      Title: "7 days & 8 Nights",
      Image2: "/images/star.svg",
      Number1: "4.6",
      Number2: "(3.4k)",
      place: "Place Name goes here",
      head1: "1d",
      head2: "Mussoorie",
      head3: "1d",
      head4: "Mussoorie",
      R1: "INR 20,000",
      R2: "INR 30,000",
      R3: "SAVE INR 10,000",
      Image3: "/images/Vector.svg",
      Head6: "Avail this Package",
    },
  ];

  return (
    <div className="bg-[url('/images/road.svg')] w-full  bg-cover bg-center object-cover p-20 mt-1">
      <div>
        <img src="\images\Frame 208.svg" className="pt-36" />
      </div>
      <div className="flex px-10 ">
        <div>
          <img src="/images/Untitled design (10) 1.svg" />
        </div>
        <div>
          <h1 className="text-[50px]">Dehradun</h1>
        </div>
      </div>
      <div className="flex  gap-14 ">
        {Package.map((item, index) => (
          <div key={index}>
            <div className="">
              <img
                src={item.Image1}
                className="  w-[340px] h-[340px] rounded-b-2xl"
              />
            </div>
            <div className="">
              <div className="h-[195px] w-[340px] bg-white">
                <div>
                  <div className="flex gap-16 px-10 text-[#595959] text-[14px]  ">
                    <div className="mt-2">{item.Title}</div>

                    <div className="flex gap-2 mt-2">
                      <img
                        src={item.Image2}
                        className="h-[18px] w-[14px] pt-[2px]"
                      />
                      <h1 className="text-[16px] text-[#008686] font-bold">
                        {item.Number1}
                      </h1>
                      <h1 className="text-[12px] mt-1 ">{item.Number2}</h1>
                    </div>
                  </div>
                  <div>
                    <p className="px-10 text-[18px] mt-2">{item.place}</p>
                  </div>
                  <div className="flex px-10 mt-2 gap-10">
                    <div className="flex gap-1 ">
                      <h1 className="font-bold ">{item.head1} </h1>
                      <h1 className="text-[#595959]"> {item.head2}</h1>
                    </div>
                    <div className="flex gap-1 ">
                      <h1 className="font-bold">{item.head3} </h1>
                      <h1 className="text-[#595959]"> {item.head4} </h1>
                    </div>
                  </div>
                  <div className="flex  gap-2 mt-4 px-10">
                    <h1 className="text-[18px] mt-1 font-bold">{item.R1}</h1>
                    <h1 className="line-through text-[#595959] mt-2 text-[12px]">
                      {item.R2}
                    </h1>
                    <h1 className="w-[80px] h-[22px] text-[#007A62] bg-[#2AD20050] p-2   text-[7px]">
                      {item.R3}
                    </h1>
                  </div>

                  <div className="flex  gap-5 mt-2 px-10">
                    <img src="/images/Frame 263.svg" className="" />
                    <h1
                      className="h-[35px] w-[260px] text-center text-[#FFFFFF] border border-[#008686] p-1 rounded-lg"
                      style={{
                        background:
                          "radial-gradient(50% 50% at 50% 50%, #008686 0%, #006868 100%)",
                      }}
                    >
                      {item.Head6}
                      <div>
                        <img src="\images\Image.svg" />
                      </div>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <div>
          <img src="\images\Image.svg" />
        </div> */}
      </div>

      <div className="px-10 ">
        {" "}
        <img src="/images/Image.svg" />
        <div className="flex">
          <img src="/images/Untitled design (10) 1.svg" />
          <h1 className=" text-[50px]">Kerala</h1>
        </div>
        <div></div>
      </div>

      <div className="flex  gap-14 ">
        {Package.map((item, index) => (
          <div key={index}>
            <div className="">
              <img
                src={item.Image1}
                className="  w-[340px] h-[340px] rounded-b-2xl"
              />
            </div>
            <div className="">
              <div className="h-[195px] w-[340px] bg-white">
                <div>
                  <div className="flex gap-16 px-10 text-[#595959] text-[14px]  ">
                    <div className="mt-2">{item.Title}</div>

                    <div className="flex gap-2 mt-2">
                      <img
                        src={item.Image2}
                        className="h-[18px] w-[14px] pt-[2px]"
                      />
                      <h1 className="text-[16px] text-[#008686] font-bold">
                        {item.Number1}   
                      </h1>
                      <h1 className="text-[12px] mt-1 ">{item.Number2}</h1>     
                    </div>
                  </div>
                  <div>
                    <p className="px-10 text-[18px] mt-2">{item.place}</p>
                  </div>
                  <div className="flex px-10 mt-2 gap-10">
                    <div className="flex gap-1 ">
                      <h1 className="font-bold ">{item.head1} </h1>
                      <h1 className="text-[#595959]"> {item.head2}</h1>
                    </div>
                    <div className="flex gap-1 ">
                      <h1 className="font-bold">{item.head3} </h1>
                      <h1 className="text-[#595959]"> {item.head4} </h1>
                    </div>
                  </div>
                  <div className="flex  gap-2 mt-4 px-10">
                    <h1 className="text-[18px] mt-1 font-bold">{item.R1}</h1>
                    <h1 className="line-through text-[#595959] mt-2 text-[12px]">
                      {item.R2}
                    </h1>
                    <h1 className="w-[80px] h-[22px] text-[#007A62] bg-[#2AD20050] p-2   text-[7px]">
                      {item.R3}
                    </h1>
                  </div>

                  <div className="flex  gap-5 mt-2 px-10">
                    <img src="/images/Frame 263.svg" className="" />
                    <h1
                      className="h-[35px] w-[260px] text-center text-[#FFFFFF] border border-[#008686] p-1 rounded-lg"
                      style={{
                        background:
                          "radial-gradient(50% 50% at 50% 50%, #008686 0%, #006868 100%)",
                      }}
                    >
                      {item.Head6}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="flex px-10 ">
        <div>
          <img src="/images/Untitled design (10) 1.svg" />
        </div>
        <div>
          <h1 className="mt-10 text-[50px]">Jaipur</h1>
        </div>
      </div> */}
      </div>
      <img src="\images\Image.svg" />
      <div className="flex px-10 ">
        <div>
          <img src="/images/Untitled design (10) 1.svg" />
        </div>
        <div>
          <h1 className=" text-[50px]">jaipur</h1>
        </div>
      </div>
      <div className="flex  gap-14 ">
        {Package.map((item, index) => (
          <div key={index}>
            <div className="">
              <img
                src={item.Image1}
                className="  w-[340px] h-[340px] rounded-b-2xl"
              />
            </div>
            <div className="">
              <div className="h-[195px] w-[340px] bg-white">
                <div>
                  <div className="flex gap-16 px-10 text-[#595959] text-[14px]  ">
                    <div className="mt-2">{item.Title}</div>

                    <div className="flex gap-2 mt-2">
                      <img
                        src={item.Image2}
                        className="h-[18px] w-[14px] pt-[2px]"
                      />
                      <h1 className="text-[16px] text-[#008686] font-bold">
                        {item.Number1}
                      </h1>
                      <h1 className="text-[12px] mt-1 ">{item.Number2}</h1>
                    </div>
                  </div>
                  <div>
                    <p className="px-10 text-[18px] mt-2">{item.place}</p>
                  </div>
                  <div className="flex px-10 mt-2 gap-10">
                    <div className="flex gap-1 ">
                      <h1 className="font-bold ">{item.head1} </h1>
                      <h1 className="text-[#595959]"> {item.head2}</h1>
                    </div>
                    <div className="flex gap-1 ">
                      <h1 className="font-bold">{item.head3} </h1>
                      <h1 className="text-[#595959]"> {item.head4} </h1>
                    </div>
                  </div>
                  <div className="flex  gap-2 mt-4 px-10">
                    <h1 className="text-[18px] mt-1 font-bold">{item.R1}</h1>
                    <h1 className="line-through text-[#595959] mt-2 text-[12px]">
                      {item.R2}
                    </h1>
                    <h1 className="w-[80px] h-[22px] text-[#007A62] bg-[#2AD20050] p-2   text-[7px]">
                      {item.R3}
                    </h1>
                  </div>

                  <div className="flex  gap-5 mt-2 px-10">
                    <img src="/images/Frame 263.svg" className="" />
                    <h1
                      className="h-[35px] w-[260px] text-center text-[#FFFFFF] border border-[#008686] p-1 rounded-lg"
                      style={{
                        background:
                          "radial-gradient(50% 50% at 50% 50%, #008686 0%, #006868 100%)",
                      }}
                    >
                      {item.Head6}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="flex px-10 ">
        <div>
          <img src="/images/Untitled design (10) 1.svg" />
        </div>
        <div>
          <h1 className="mt-10 text-[50px]">Jaipur</h1>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Ourpackages;
