import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { useRef, useState } from "react";
import { currentProjectAtom,projects  } from "./Projects";
import { FollowMeComponent } from "./FollowMe";

const Section = (props)=>{
    const {children, mobileTop} = props;

    return(
        <motion.section className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto
        flex flex-col items-start 
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

export const Interface = (props)=>{
    const {setSection} = props;
    return(
        <div className="flex flex-col items-center w-screen">
        <AboutSection setSection={setSection}/>
        <SkillsSection />
        <WorkHistorySection />
        <ProjectsSection />
        <ContactSection/>
        </div>
    );
}

const AboutSection = (props)=>{
    const {setSection} = props;

    return(
        <Section mobileTop> 
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight md:leading-snug mt-16 md:mt-0">
          Hi, I'm
          <br />
          
          <span className="bg-white px-1 italic mt-auto ">Saad Wasif</span>
        </h1>
        
    
            
                <motion.p className="text-lg text-gray-600 mt-4 max-w-md"
                initial ={{opacity:0, x:50}}
                whileInView={{opacity:1, x:0, transition:{duration:1, delay:1.5}}}
                >
                    Technical Leader &amp; Project Manager with 5+ years delivering
                    IoT systems, AI-powered applications, and immersive digital platforms.
                    I lead cross-functional teams and turn ideas into scalable products.
                </motion.p>
            <motion.button
            onClick={() => setSection(4)}
            className={`
            bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-4 md:mt-10`}
            initial ={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0, transition:{duration:1, delay:2}}}
            >
              Contact Me
            </motion.button>
            
        </Section>
    );
}

const technicalSkills = [
    {
      title: "Python / AI Agents",
      level: 95,
    },
    {
      title: "Full Stack (Node.js / React)",
      level: 90,
    },
    {
      title: "IoT / Embedded Systems",
      level: 90,
    },
    {
      title: "Flutter / Mobile Dev",
      level: 80,
    },
    {
      title: "WebGL / Three.js",
      level: 80,
    },
    {
      title: "DevOps / Server Management",
      level: 75,
    },
  ];
  const pmSkills = [
    {
      title: "Agile / Scrum",
      level: 90,
    },
    {
      title: "Team Leadership",
      level: 90,
    },
    {
      title: "Stakeholder Communication",
      level: 85,
    },
    {
      title: "Risk Assessment & Planning",
      level: 80,
    },
  ];
  const SkillsSection = () => {
    return (
      <Section>
        <motion.div whileInView={"visible"} className="flex flex-col md:flex-row gap-8 md:gap-16 max-w-lg">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Technical Skills</h2>
            <div className="mt-4 space-y-3">
              {technicalSkills.map((skill, index) => (
                <div className="w-48" key={index}>
                  <motion.h3
                    className="text-sm md:text-base font-bold text-gray-100"
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  >
                    {skill.title}
                  </motion.h3>
                  <div className="h-1.5 w-full bg-gray-200 rounded-full mt-1">
                    <motion.div
                      className="h-full bg-indigo-500 rounded-full "
                      style={{ width: `${skill.level}%` }}
                      initial={{
                        scaleX: 0,
                        originX: 0,
                      }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 1 + index * 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Project Management</h2>
            <div className="mt-4 space-y-3">
              {pmSkills.map((skill, index) => (
                <div className="w-48" key={index}>
                  <motion.h3
                    className="text-sm md:text-base font-bold text-gray-100"
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 1.5 + index * 0.2,
                        },
                      },
                    }}
                  >
                    {skill.title}
                  </motion.h3>
                  <div className="h-1.5 w-full bg-gray-200 rounded-full mt-1">
                    <motion.div
                      className="h-full bg-indigo-500 rounded-full "
                      style={{ width: `${skill.level}%` }}
                      initial={{
                        scaleX: 0,
                        originX: 0,
                      }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 1.5 + index * 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>
    );
  };

const workHistory = [
  {
    company: "Elunic AG",
    location: "Berlin, Germany - Remote",
    role: "AI.SEE Automation Engineer",
    date: "Jul 2025 - Present",
    color: "#6366f1",
    description:
      "Engineering cross-platform process automations across Asana, Jira, and HubSpot CRM. Developed custom AI Agents to optimize team workflows and reduce manual overhead.",
  },
  {
    company: "Neural Meta Media",
    location: "Karachi, Pakistan",
    role: "Technical Team Lead",
    date: "Jan 2023 - Present",
    color: "#8b5cf6",
    description:
      "Spearheading design and development of innovative digital platforms. Leading AI-driven agents, chatbots, and ML algorithm development for client automation.",
  },
  {
    company: "Popcurb",
    location: "Remote",
    role: "Technical Advisor",
    date: "Feb 2024 - Jan 2025",
    color: "#3b82f6",
    description:
      "Guided hardware and software development for smart parking solutions in Paris & New York. Introduced agile best practices, reducing dev cycle time by 20%.",
  },
  {
    company: "Fiverr",
    location: "Remote",
    role: "Freelance IoT / Software Developer",
    date: "2020 - Present",
    color: "#1dbf73",
    description:
      "Delivered 110+ successful projects across IoT, mobile apps, AI chatbots, and automation. Collaborated with international clients including Salesforce and Popcurb.",
  },
  {
    company: "Upheaval Industry 4.0",
    location: "Karachi, Pakistan",
    role: "Chief Technology Officer",
    date: "Dec 2021 - Dec 2022",
    color: "#ef4444",
    description:
      "Designed AI-enabled grocery picking solution reducing fulfillment time by 30%. Built product mapping engine for 4,000+ items. Led 3D virtual shopping platform development.",
  },
  {
    company: "NCRA",
    location: "Karachi, Pakistan",
    role: "Research Assistant",
    date: "Nov 2020 - Nov 2021",
    color: "#f59e0b",
    description:
      "Designed STEM Robot for teaching. Developed IoT attendance system and ventilator firmware. Collaborated with Auvitronics for industrial automation.",
  },
];

const CARD_WIDTH = 220;
const CARD_GAP = 32;

const WorkHistorySection = () => {
  const [current, setCurrent] = useState(0);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  const next = () => setCurrent(Math.min(current + 1, workHistory.length - 1));
  const prev = () => setCurrent(Math.max(current - 1, 0));

  const offsetX = -(current * (CARD_WIDTH + CARD_GAP));

  const handlePointerDown = (e) => {
    dragStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handlePointerUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = e.clientX - dragStartX.current;
    if (diff < -50) next();
    else if (diff > 50) prev();
  };

  return (
    <Section>
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold">Work Experience</h2>

        <div
          className="relative mt-8 overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={() => { isDragging.current = false; }}
        >
          {/* Timeline line */}
          <div
            className="absolute top-4 left-0 h-0.5 bg-indigo-300 bg-opacity-50"
            style={{ width: workHistory.length * (CARD_WIDTH + CARD_GAP) }}
          />

          {/* Cards track */}
          <motion.div
            className="flex"
            style={{ gap: CARD_GAP }}
            animate={{ x: offsetX }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {workHistory.map((job, index) => (
              <div
                key={index}
                className="flex-shrink-0 pt-8 relative"
                style={{ width: CARD_WIDTH }}
              >
                {/* Node dot — centered */}
                <div
                  className={`absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white transition-transform ${
                    index === current ? "scale-125" : ""
                  }`}
                  style={{ backgroundColor: job.color }}
                />

                {/* Card */}
                <motion.div
                  className={`rounded-lg p-4 shadow-md cursor-pointer transition-all ${
                    index === current
                      ? "bg-white bg-opacity-80"
                      : "bg-white bg-opacity-40"
                  }`}
                  animate={{
                    scale: index === current ? 1 : 0.92,
                    opacity: index === current ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setCurrent(index)}
                >
                  <p className="text-xs font-semibold text-gray-400">
                    {job.date}
                  </p>
                  <h3 className="text-sm font-bold mt-1">{job.company}</h3>
                  <p
                    className="text-xs font-semibold mt-0.5"
                    style={{ color: job.color }}
                  >
                    {job.role}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {job.location}
                  </p>
                  {index === current && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-xs text-gray-600 mt-2 leading-relaxed"
                    >
                      {job.description}
                    </motion.p>
                  )}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation arrows — centered */}
        <div className="flex gap-3 mt-4 items-center justify-center">
          <button
            onClick={prev}
            disabled={current === 0}
            className="bg-indigo-600 text-white text-sm py-1.5 px-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-30"
          >
            &larr;
          </button>
          <span className="text-xs text-gray-500">
            {current + 1} / {workHistory.length}
          </span>
          <button
            onClick={next}
            disabled={current === workHistory.length - 1}
            className="bg-indigo-600 text-white text-sm py-1.5 px-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-30"
          >
            &rarr;
          </button>
        </div>
      </div>
    </Section>
  );
};

const ContactSection = () =>{
  return(
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold">Contact Me</h2>
      <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 h-screen max-w-full">
        <form>
          <label for="name " className="font-medium text-gray-900 block mb-1">Name</label>
          <input type="text" name="name" id="name" 
           className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"/>

          <label for="email" className="font-medium text-gray-900 block mb-1 mt-8">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />

          <label
            for="message"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>

          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
            Submit
          </button>
        </form>
      </div>
    </Section>
  )
}

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};