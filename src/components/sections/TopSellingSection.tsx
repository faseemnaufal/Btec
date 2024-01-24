import React from "react";
import DestinationCard from "../cards/DestinationCard";

function TopSellingSection() {
  const destinations = [
    {
      id: 0,
      imageUrl: "/images/IT.jpg",
      title: "ICT",
      amount: "****",
      duration: "06 Months",
      highlighted: false,
    },
    {
      id: 1,
      imageUrl: "/images/biz.jpg",
      title: "Business",
      amount: "***",
      duration: "03 Years",
      highlighted: false,
    },
    {
      id: 2,
      imageUrl: "/images/science.jpg",
      title: "Science",
      amount: "***",
      duration: "03 Years",
      highlighted: true,
    },
  ];
  return (
    <section id="academic" className="bg-slate-100 rounded-lg">
      {/* <p className="text-lightGray text-[1.125rem] font-[600] text-center">
        Top Selling
      </p> */}
      <p className="volkhov text-[3.125rem] text-title font-[700] text-center">
        Top Courses
      </p>
      <div className="flex flex-col gap-4 md:flex-row items-center md:justify-between mt-16 w-full">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            imageUrl={destination.imageUrl}
            title={destination.title}
            duration={destination.duration}
            amount={destination.amount}
            highlighted={destination.highlighted}
          />
        ))}
      </div>
    </section>
  );
}

export default TopSellingSection;
