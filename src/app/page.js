import CustomSelect from "./components/CustomSelect";
import Tickets from "./components/Tickets";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-[#041E23] max-w-[700px] rounded-[40px] border-[1px] border-[#0E464F] mx-auto mt-8 p-[24px] sm:p-[48px] flex flex-col gap-8">
      <div className="flex justify-between items-center gap-3 max-w-[604px]">
        <h1 className="max-w-[531px] text-[1rem] sm:text-[1.5rem] md:text-[2rem] font-normal">Ticket Selection</h1>
        <div className="text-[16px] font-normal font-roboto">Step 1/3</div>
      </div>
      <div className="w-full h-[4px] bg-[#0E464F] rounded-[5px]">
        <div className="w-1/3 h-[4px] bg-[#24A0B5] rounded-[5px]">
        </div>
      </div>
      <div className="bg-[#08252B] p-6 rounded-[32px]">
        <div className="p-6 rounded-3xl border-[2px] border-[#07373F] text-center flex flex-col gap-2">
          <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] ">Techember Fest &quot; 25</h2>
          <p className="">Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center align-center ">
            <p>📍 [Event Location]</p>
            <p className="hidden sm:block">| |</p>
            <p>March 15, 2025 | 7:00 PM</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[4px] bg-[#0E464F] rounded-[5px]">
      </div>
      <div className="">
        <h2 className="text-[1rem]">Select Ticket Type:</h2>
        <Tickets />
      </div>
      <CustomSelect />
      <div className="flex justify-between gap-6 flex-col sm:flex-row">
        <Link href="#" className="py-3 px-6 border border-[#24A0B5] basis-1/2 rounded-xl text-center ">Cancel</Link>
        <Link href="/attendee-details" className="py-3 px-6 border border-[#24A0B5] basis-1/2 bg-[#24A0B5] rounded-xl text-center" >Next</Link>
      </div>
    </section>
  );
}
