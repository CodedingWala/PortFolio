import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { HackerRoom } from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import Target from '../components/Target'
import { calculateSizes } from '../constants'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Rings from '../components/Ring'
import { OrbitControls } from '@react-three/drei'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'


const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className='min-h-screen mx-auto'>
            <div className='w-full flex flex-col mx-auto sm:mt-30 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium font-generalsans text-white text-center'>Hi I am Javed Ansari<span className='waving-hand ml-2'>🤖</span></p>
                <p className='hero_tag text-gray_gradient'>MERN & Native App Developer</p>
            </div>
            <div className='w-full h-full inset-0 absolute'>
                <Leva />
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />} >

                        <perspectiveCamera makeDefault position={[0, 0, 30]} />
                        {/*the Computer with desk model is covered by the HeroCamera component so it a can bee moved or by moving the mouse */}
                        <HeroCamera ismobile={isMobile}>
                            <HackerRoom
                                scale={isMobile ? 0.02 : 0.04}
                                rotation={[0, 160, 0]}
                                position={isMobile ? [0, -2, 0] : [0, -3, 0]}
                            />

                        </HeroCamera>
                        <group>
                            <Target position={isMobile ? [-1.5, -3, 0.5] : [-5, -3, 0]} scale={isMobile ? 0.1 : 0.3} />
                            <ReactLogo />
                            <Cube position={isMobile ? [1, -3, 0.5] : [4, -3.5, 0]} scale={isMobile ? 0.009 : 0.015} />
                            <Rings
                                key={isMobile ? "mobile" : "desktop"}  // Forces remount
                                position={isMobile ? [-1, 0.9, 0.5] : [-5, 1, 0]} scale={isMobile ? 0.1 : 0.3}
                                scale={isMobile ? 0.1 : 0.2}
                            />

                        </group>
                        <ambientLight intensity={1} />

                        <directionalLight position={[10, 10, 10]} intensity={1} />
                    </Suspense>
                </Canvas>
                <div className='absolute bottom-7 z-10 w-full left-0 right-0 c-space'>
                    <a href="#about">
                        <Button name="Lets work together" containerClass="sm:w-fit w-full  sm:min-w-96" isBeam={true} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero