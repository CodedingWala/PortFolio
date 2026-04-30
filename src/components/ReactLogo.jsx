
import { Float, useGLTF } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'

export const ReactLogo=(props)=> {
    const isMobile=useMediaQuery({maxWidth:768})
  const { nodes, materials } = useGLTF('/models/react.glb')
  return (
    <Float >
      <group  {...props} scale={0.03} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={isMobile? [30, 20.935, 18.102]:[120, 20.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={isMobile? 1: 3}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')

export default ReactLogo