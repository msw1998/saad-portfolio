import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

export function Avatar(props) {
  
  const {animation, wireframe} = props;
  const {headFollow} = {
    headFollow: false,

  };  
  const group = useRef();
  const { nodes, materials } = useGLTF("models/saad.glb");

  const {animations: typingAnimation } = useFBX("animations/Typing.fbx");
  typingAnimation[0].name = "Typing"
  const {animations: standingAnimation } = useFBX("animations/Standing Idle.fbx");
  standingAnimation[0].name = "Standing"
  const {animations: fallingAnimation } = useFBX("animations/Falling To Landing.fbx");
  fallingAnimation[0].name = "Falling"
  const {animations: fallingAnimation2 } = useFBX("animations/Falling Idle.fbx");
  fallingAnimation2[0].name = "Falling2"
  const {animations: jumpingAnimation } = useFBX("animations/Jumping.fbx");
  jumpingAnimation[0].name = "Jumping"
  const {animations: wavingAnimation } = useFBX("animations/Waving.fbx");
  wavingAnimation[0].name = "Waving"
  
  const {actions} = useAnimations([typingAnimation[0],standingAnimation[0],wavingAnimation[0], fallingAnimation[0],fallingAnimation2[0], jumpingAnimation[0]],group );

  useEffect(() => {
    
      actions[animation].reset().fadeIn(0.5).play();
   
  
    
    return () => {
      actions[animation].reset().fadeOut(0.5);
      
    };
  }, [animation]);

  useEffect(() => {
    Object.values(materials).forEach((material) =>{
      material.wireframe = wireframe;
    })
  },[wireframe]);
  
  
  
  return (
    <group rotation-x={-Math.PI/2}>
    <group {...props} ref={group} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        frustumCulled={false}
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        frustumCulled={false}
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        frustumCulled={false}
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        frustumCulled={false}
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        frustumCulled={false}
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
    </group>

    </group>
  );
}

useGLTF.preload("models/saad.glb");
useFBX.preload("animations/Typing.fbx");
useFBX.preload("animations/Standing Idle.fbx");
useFBX.preload("animations/Falling To Falling.fbx");
useFBX.preload("animations/Falling Idle.fbx");
useFBX.preload("animations/Jumping.fbx");
