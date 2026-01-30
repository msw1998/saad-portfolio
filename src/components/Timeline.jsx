import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import tesla from "../assets/tesla.png";
import starbucks from "../assets/starbucks.png" ;
import shopify from "../assets/shopify.png" 

import meta from "../assets/meta.png" 


import "react-vertical-timeline-component/style.min.css";


const experiences = [
    {
      title: "Platform Development",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, // Center horizontally
     }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
      
        <h3 className='text-white text-[20px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[11px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-2 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[11px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Section = (props)=>{
    const {children, mobileTop} = props;

    return(
        <motion.section className={`
        mt-20 mb-20
        flex flex-col items-center 
        ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
        `}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity:1,
          y:0,
          transition:{
            duration: 1,
            delay:0.5
          }
        }}
        
        >
            {children}
        </motion.section>
    );
}
export const Timeline = () => {
  return (
    <Section>
      <motion.div variants={textVariant()}>
        <p className="text-white sm:text-[18px] text-[12px] text-secondary uppercase tracking-wider">
          What I have done so far
        </p>
        <h2 className="text-3xl md:text-5xl font-bold">
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-10 sm:mt-24 md:mt-20 lg:mt-24'>
      <VerticalTimeline layout="2-columns" className="p-0 mt-0">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      </Section> 
    );
};


