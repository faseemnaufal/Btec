import React from "react";
import CatergoryCard from "../cards/CatergoryCard";

function CategorySection() {
  const features = [
    {
      id: 0,
      //iconUrl: "/images/satellite.png",
      //title: "Calculated Weather",
      description:
        "Our aim is to make each student an efficient and competent professional in his or her chosen career. Moreover, we help you become an asset to society and a worthy human being and professional standing and open the doors to a wide range of lucrative career options. We are proud of our success in being a demand oriented education and training provider, facilitating employment opportunities to all our students.",
      highlighted: false,
    },
    {
      id: 1,
      //iconUrl: "/images/aircraft.png",
      //title: "Best Flights",
      description:
        "We do also provide courses like Information Technology and English in order to make the students professionally competent to the world of IT & English. We believe that we can achieve the targets of setting up a potential frame of sound knowledge in IT & English for students to face the present world which is highly competitive in terms of IT related professions.",
      highlighted: false,
    },
    {
      id: 2,
      //iconUrl: "/images/mic.png",
      //title: "Local Events",
      description:
        "We do have courses in all level management and technical oriented courses as well. We are focusing on courses like Hospitality Management training programs which are on great demand among the students in today’s professional world. We cordially invite you as professionals to come up for the available course in BTEC so that you will be able enhance your knowledge to achieve your ambition in order to achieve professional promotion and other benefits of your personal career. ",
      highlighted: false,
    },
    {
      id: 3,
      //iconUrl: "/images/cog.png",
      //title: "Customization",
      description:
        " We welcome you to visit BTEC Campus, to get further information about BTEC.",
      highlighted: false,
    },
  ];
  return (
    <section id="about" className="bg-slate-300 rounded-lg">
      {/* <p className="text-lightGray text-[1.125rem] font-[600] text-center">
        About
      </p> */}
      <p className="volkhov text-[3.125rem] text-title font-[700] text-center">
        About Us
      </p>
      <div className="flex flex-col gap-4 md:flex-row justify-between w-full mt-16">
        {features.map((feature) => (
          <CatergoryCard
            key={feature.id}
            //iconUrl={feature.iconUrl}
            //title={feature.title}
            description={feature.description}
            highlighted={feature.highlighted}
          />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
