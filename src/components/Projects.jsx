import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Wawatmos",
    url: "https://r3f-wawatmos-final.vercel.app/",
    image: "projects/wawatmos.jpg",
    description: "Recreating the Atmos Awwwards website with React Three Fiber",
  },
  {
    title: "Portfolio Website",
    url: "https://www.youtube.com/watch?v=YkHqpqJgLKw",
    image: "projects/saad.jpg",
    description: "Developed Personal Portfolio website in r3f",
  },
  {
    title: "Clareco App",
    url: "",
    image: "projects/clareco.png",
    description: "AI based Audio Transcriber app for transcribing doctors and patient convo",
  },
  {
    title: "Neural Meta Media",
    url: "https://test.neuralmetamedia.org",
    image: "projects/neuralmeta.jpg",
    description: "3D portfolio website based on ThreeJS",
  },
  {
    title: "Clareco Clinic",
    url: "",
    image: "projects/loader.jpg",
    description: "Chat Assitant to answer patient queries",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.5, 2.2]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[2.4, 1.3, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.4}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1.2, -0.3, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        font="Calibri"
        anchorX="left"
        anchorY="top"
        fontSize={0.12}
        position={[-1.2, -0.55, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 2.9,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};