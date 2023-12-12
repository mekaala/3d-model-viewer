import { MeshWobbleMaterial } from "@react-three/drei";
import { useRef } from "react";

const TorusKnot = ({position, size, color}) => {
    const ref = useRef();

    return (
      <mesh position={position} ref={ref}>
        <torusKnotGeometry args={size}/>
        <MeshWobbleMaterial color={color} factor={5} speed={2}/>
      </mesh>
    )
}

export default TorusKnot;