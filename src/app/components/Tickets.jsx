"use client";
import { useState } from "react";

const tickets = [
    {id: '1', price: 'Free', type: 'Regular ACCESS', seats: '25/50'},
    {id: '2', price: '$150', type: 'VIP ACCESS', seats: '25/50'},
    {id: '3', price: '$250', type: 'VVIP ACCESS', seats: '25/50'},
]
  

export default function Tickets() {
  const [selected, setSelected] = useState('1');

  return (
    <div className="bg-[#052228] rounded-3xl mt-2 flex flex-col md:flex-row gap-4 p-4 w-full">
      {tickets.map((ticket) => (
        <label
          key={ticket.id}
          className={`cursor-pointer p-4 border-2 rounded-xl text-left basis-1/3 transition-all border-[#197686] ${
            selected === ticket.id && "bg-[#197686]"
          }`}
        >
          <input
            type="radio"
            name="radioOptions"
            value={ticket.id}
            className="hidden"
            checked={selected === ticket.id}
            onChange={() => setSelected(ticket.id)}
          />
          <p className="mb-3 text-2xl font-bold">{ticket.price}</p>
          <p>{ticket.type}</p>
          <p>{ticket.seats}</p>
        </label>
      ))}
    </div>
  );
}
