import { Clone, useGLTF } from '@react-three/drei';
import React, { useRef } from 'react'

const Model = ({url}) => {
    const { scene } = useGLTF(url);

  return (
    <primitive scene={scene} />
  )
}

export default Model;