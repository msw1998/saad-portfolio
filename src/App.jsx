import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { Suspense, useEffect, useState } from "react";
import {ScrollManager} from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { framerMotionConfig } from "./config";
import { Cursor } from "./components/Cursor";
import { LoadingScreen } from "./components/LoadingScreen";
import { FollowMeComponent } from "./components/FollowMe";
function App() {

  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [started,setStarted ] = useState(false);

  useEffect(()=>{
    setMenuOpened(false);
  },[section]);

  // Dispose of stale WebGL contexts on HMR to prevent context limit exhaustion
  useEffect(() => {
    return () => {
      document.querySelectorAll("canvas").forEach((canvas) => {
        const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
        if (gl) {
          gl.getExtension("WEBGL_lose_context")?.loseContext();
        }
      });
    };
  }, []);

  return (
    <>
    <LoadingScreen started={started} setStarted = {setStarted}/>
    <MotionConfig transition={{
      ...framerMotionConfig
    }}>
    <Canvas shadows camera={{ position: [0,3, 10], fov: 42 }} onCreated={({ gl }) => {
      gl.domElement.addEventListener("webglcontextlost", (e) => {
        e.preventDefault();
      });
    }}>
      <color attach="background" args={["#e6e7ff"]} />
      <ScrollControls pages={4} damping={0.1}>
        
        <ScrollManager section={section} onSectionChange={setSection}/>
        <Scroll>
        <Suspense>
          {started && (
            
              <Experience section = {section} menuOpened = {menuOpened}/>
             
              )}
        </Suspense>
        </Scroll>
            
        <Scroll html>
        {started && (
          <>
          <Interface setSection={setSection}/>
          
          </>
          )}
      </Scroll>
      </ScrollControls>
    </Canvas>
    <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
    <Cursor />
    <FollowMeComponent />
    </MotionConfig>
      
      <Leva hidden />
    </>
  );
}

export default App;
