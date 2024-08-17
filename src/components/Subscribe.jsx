import Check from "./Shared/Check";

export default function Subscribe() {
  return (
    <div id="subscribe" className="max-w-7xl mx-auto px-4 md:py-24">
      <div className="text-center">
        <h1 className="md:text-4xl text-2xl font-semibold">
          <span className="text-[#CB8461]">Subscribe</span> with us now
        </h1>
        <p className="md:w-3/6 m-auto mt-5 leading-8">
          by subscribing now you will be able to access the material easily and
          cheaply, so you will be very efficient and benefit
        </p>
      </div>
      <div className="md:px-16 md:mt-20">
        <div className="grid md:grid-cols-3 justify-evenly">
          <div className="md:w-5/6 p-5 md:mt-9 order-2 md:order-1 mt-20">
            <div className="flex items-end">
              <h1 className="text-4xl font-bold">$50</h1>
              <p>/ 1 month</p>
            </div>
            <h1 className="text-4xl font-bold mt-2">Base</h1>
            <p className="leading-7 mt-2 text-[#808080]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="mt-7">
              <Check title={"Access all videos"} />
              <Check title={"Get Certificate"} />
              <Check title={"Chat support"} />
              <Check title={"Update Notification"} />
              <Check title={"Download material"} />
              <button className="w-full bg-[#FFFAF8] text-[#FDC2A5] rounded-full py-2 text-center mt-5 hover:bg-[#CB8461] hover:text-white transition-all duration-300">
                Choose plan
              </button>
            </div>
          </div>
          <div className="md:w-5/6 bg-[#245D51] rounded-3xl p-4 text-white shadow-2xl drop-shadow-2xl MOST-POPULAR mt-16 md:mt-0 order-1 md:order-2">
            <button className="px-8 py-1 rounded-full bg-[#CB8461] text-white ml-28 mb-4 text-xs">
              MOST POPULAR
            </button>
            <div className="flex items-end">
              <h1 className="text-4xl font-bold">$100</h1>
              <p>/ 6 month</p>
            </div>
            <h1 className="text-4xl font-bold mt-2">Pro</h1>
            <p className="leading-7 mt-2">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <div className="mt-7">
              <Check title={"Access all videos"} style={{ color: "white" }} />
              <Check title={"Get Certificate"} style={{ color: "white" }} />
              <Check title={"Chat support"} style={{ color: "white" }} />
              <Check title={"Update Notification"} style={{ color: "white" }} />
              <Check title={"Download material"} style={{ color: "white" }} />
              <button className="w-full hover:bg-[#FFFAF8] hover:text-[#FDC2A5] rounded-full py-2 text-center mt-5 bg-[#CB8461] text-white transition-all duration-300">
                Choose plan
              </button>
            </div>
          </div>
          <div className="md:w-5/6 p-5 mt-12 order-3 md:order-3">
            <div className="flex items-end">
              <h1 className="text-4xl font-bold">$200</h1>
              <p>/ 12 month</p>
            </div>
            <h1 className="text-4xl font-bold mt-2">Enterprise</h1>
            <p className=" leading-7 mt-2 text-[#808080]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="mt-7">
              <Check title={"Access all videos"} />
              <Check title={"Get Certificate"} />
              <Check title={"Chat support"} />
              <Check title={"Update Notification"} />
              <Check title={"Download material"} />
              <button className="w-full bg-[#FFFAF8] text-[#FDC2A5] rounded-full py-2 text-center mt-5 hover:bg-[#CB8461] hover:text-white transition-all duration-300">
                Choose plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
