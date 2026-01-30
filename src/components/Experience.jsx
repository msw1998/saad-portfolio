import { Cloud, Environment, OrbitControls, Sky, useScroll, Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Room } from "./Room";
import {motion } from "framer-motion-3d";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect,useState, useRef } from "react";
import { framerMotionConfig } from "../config";
import { Projects } from "./Projects";
import { Background } from "./Background";

export const Experience = (props) => {

  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();
  
  const isMobile  = window.innerWidth < 900;
  const responsiveRatio = viewport.width /12;
  const officeScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9));
  const [section, setSection] = useState(0);;

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();
  
  useEffect(() =>{

    animate(cameraPositionX,menuOpened ? -5 : 0,{
      ...framerMotionConfig
    });
    animate(cameraLookAtX,menuOpened ? 5 : 0, {
      ...framerMotionConfig
    });

  },[menuOpened]);
  
  const characterContainerAboutRef = useRef();
  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  useEffect(() =>{
    setCharacterAnimation("Falling2");
    
  
    setTimeout(() =>{
      setCharacterAnimation(section=== 0 ? "Typing" : section ===1 ? "Waving" : "Standing" );
     
    },300);
  
  },[section])

  const characterGroupRef = useRef();

  useFrame((state) =>{
 
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    if (section === 0){
    characterContainerAboutRef.current.getWorldPosition(characterGroupRef.current.position);
    }
  });
  
  return (
    <>
    <Background />
    <motion.group 
      ref={characterGroupRef}
      rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
      animate={""+ section}
      scale={[officeScaleRatio,officeScaleRatio,officeScaleRatio]}
      transition={{
        duration: 0.6,
      }}
      variants={{
        0: {
          scaleX: officeScaleRatio,
          scaleY: officeScaleRatio,
          scaleZ: officeScaleRatio,
        },
        1: {
          y: -viewport.height + 0.5,
          x: isMobile ? 0.3 : 0,
          z: 7,
          rotateX: 0,
          rotateY: isMobile ? -Math.PI / 2 : 0,
          rotateZ: 0,
          scaleX: isMobile ? 1.5 : 1,
          scaleY: isMobile ? 1.5 : 1,
          scaleZ: isMobile ? 1.5 : 1,
        },
        2: {
          x: isMobile ? -1.4 : -2,
          y: -viewport.height * 2 + 0.5,
          z: 0,
          rotateX: 0,
          rotateY: Math.PI / 2,
          rotateZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        },
        3: {
          y: -viewport.height * 3 + 1.2,
          x: 0.3,
          z: 8.5,
          rotateX: 0,
          rotateY: -Math.PI / 4,
          rotateZ: 0,
        },
      }}
    >
    <Avatar animation = {characterAnimation} wireframe ={section === 1 && isMobile} />
    </motion.group>
     
      <ambientLight intensity ={1}/>
      <motion.group
      position={[isMobile ? 0: 1.5 * responsiveRatio,isMobile? -viewport.height/6 :2,3]} scale={[officeScaleRatio,officeScaleRatio,officeScaleRatio ]} rotation-y={-Math.PI/4}
        animate ={{
          y:isMobile ? -viewport.height/6 : 0,
        }}
      >
      <Room section={section}/>
      <group
          ref = {characterContainerAboutRef}
          name="CharacterSpot"
          position={[0.07, 0.16, -0.57]}
          rotation={[-Math.PI, 0.419, -Math.PI]}
        >
          
      </group>
     
      </motion.group>
      <motion.group position={[0,isMobile ? -viewport.height : -1.5 *officeScaleRatio, -10]}
      animate ={{
        z: section === 1 ? 0 : -10,
        y: section === 1 ? -viewport.height : (isMobile ? -viewport.height : -1.5 *officeScaleRatio),
      }}
      >
      <directionalLight position={[-5,3,5]} intensity={0.4}/>
      <Float>
        <mesh position={[1,-3,-15]} scale={[2,2,2]}>
          <sphereGeometry />
          <MeshDistortMaterial
          opacity={0.8}
          transparent
          distort={0.4}
          speed={4}
          color={"red"}
          />
        </mesh>
      </Float>
      <Float>
        <mesh position={[3,1,-18]} scale={[3,3,3]}>
          <sphereGeometry />
          <MeshDistortMaterial
          opacity={0.8}
          transparent
          distort={0.4}
          speed={4}
          color={"yellow"}
          />
        </mesh>
      </Float>
      <Float>
        <mesh position={[-3,-1,-11]} scale={[1.4,1.4,1.4]}>
          <boxGeometry />
          <MeshWobbleMaterial
          opacity={0.8}
          transparent
          distort={0.4}
          speed={4}
          color={"blue"}
          />
        </mesh>
      </Float>
      
   
      </motion.group>
      <Projects />
    </>
  );
};
