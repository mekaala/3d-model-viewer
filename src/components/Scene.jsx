import { Clone, OrbitControls, useGLTF, useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { DirectionalLightHelper } from "three";
// import Model from '../shapes/Model'

const Model = ({url, position, scale}) => {

    const { scene } = useGLTF(url);

    const ref = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);


    useFrame((state, delta) => {
        const speed = isHovered ? 1 : 0
        ref.current.rotation.y += delta * speed
    })

  return (
    <Suspense>
        <primitive
            ref={ref}
            position={position}
            onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
            onPointerLeave={() => setIsHovered(false)}
            object={scene}
            onClick={() => setIsClicked(!isClicked)}
            scale={isClicked ? 4.5 : 3}
        />
    </Suspense>
  )
}

const Scene = () => {
    const directionalLightRef = useRef()

  
    useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white");
    return (
      <>
        <ambientLight intensity={1}/>
        <Model url={'RockPikminPlush.glb'} position={[1, 0, 0]} scale={[3, 3, 3]}/>
        {/* <Cube position={[0, 0, 0]} size={[1, 1, 1]} color={"red"} /> */}
        {/* <Sphere position={[0, 0, 0]} args={[1, 30, 30]} color={"red"}/> */}
        {/* <Torus position={[2, 0, 0]} size={[0.5, 0.1, 30, 30]} color={"blue"} /> */}
        {/* <TorusKnot position={[0, 0, 0]} size={[1, 0.1, 1000, 50]} color={"yellow"} /> */}
        <OrbitControls/>
      </>
    )
}

export default Scene;