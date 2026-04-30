import React, { Suspense, useState } from 'react'
import { workExperiences } from '../constants'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import DeveloperModel from '../components/DeveloperModel'
import { Canvas } from '@react-three/fiber'

function Experience() {
    const [animationName, setAnimationName] = useState("idle")
  return (
    <section className='c-space m-20'>
        <div className='w-full text-white-600'>
    <h3 className='head-text'>My Internships</h3>
            <div className='work-container'>
                <div className="work-canvas">
                    <Canvas>
                        <ambientLight intensity={7} />
                        <directionalLight position={[10,10,10]} intensity={1} />
                        <spotLight position={[10,10,10]} angle={0.15} penumbra={1} />
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} />
                        <Suspense fallback={<CanvasLoader/>}>
                                <DeveloperModel animationName={animationName} position-y={-3}  scale={3}/>
                        </Suspense>
                    </Canvas>
                </div>
              <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full object-cover rounded-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

            </div>
        </div>
    </section>
  )
}

export default Experience
