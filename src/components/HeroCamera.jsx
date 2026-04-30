import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import React, { useRef } from 'react'

const HeroCamera = ({ children, isMobile }) => {
    const groupRef = useRef()
    
    useFrame((state, delta) => {
        // Smooth camera movement towards target position
        easing.damp3(state.camera.position, [0, 0, 6], 0.25, delta)
        
        if (!isMobile) {
            // FIXED: Added .x to pointer
            easing.dampE(
                groupRef.current.rotation, 
                [-state.pointer.y / 3, -state.pointer.x / 5, 0], 
                0.25, 
                delta
            )
        }
    })
    
    return (
        <group ref={groupRef}>
            {children}
        </group>
    )
}

export default HeroCamera