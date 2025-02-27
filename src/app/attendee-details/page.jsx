import Form from "../components/Form";

export default function AttendeeDetails() {
    return (
        <section className="bg-[#041E23] max-w-[700px] rounded-[40px] border-[1px] border-[#0E464F] mx-auto mt-8 p-[24px] sm:p-[48px] flex flex-col gap-8">
            <div className="flex justify-between items-center gap-3 max-w-[604px]">
                <h1 className="max-w-[531px] text-[1rem] sm:text-[1.5rem] md:text-[2rem] font-normal">Attendee Details</h1>
                <div className="text-[16px] font-normal font-roboto">Step 2/3</div>
            </div>
            <div className="w-full h-[4px] bg-[#0E464F] rounded-[5px]">
                <div className="w-2/3 h-[4px] bg-[#24A0B5] rounded-[5px]">
                </div>
            </div>
            <Form />

        </section>
    )
}