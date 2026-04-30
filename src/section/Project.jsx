import { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { AmbientLight, DirectionalLight } from 'three'
import { Center, OrbitControls} from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import {Canvas} from "@react-three/fiber"
import ComputerModel from '../components/ComputerModel'

function Project() {
    const MyprojectLength = myProjects.length
    const [CurrentProjectIndex, setCurrentProjectIndex] = useState(0)
    const selectedProject = myProjects[CurrentProjectIndex]

    const handleNavigation = (direction) => {
        setCurrentProjectIndex((previous) => {
            if (direction == "left") {
                return CurrentProjectIndex == 0 ? MyprojectLength - 1 : previous - 1
            }
            else {
                return CurrentProjectIndex == MyprojectLength - 1 ? 0 : previous + 1
            }
        })
    }
    return (
        <section className='c-space my-20'>
            <p className='head-text'>My Projects</p>
            <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
                <div className='flex flex-col relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
                    <div className='absolute right-0 top-0'>
                        <img src={`${selectedProject.spotlight}`} alt="spotlight" className='w-full h-96 object-cover rounded-xl' />
                    </div>
                    <div className='w-fit p-3 backdrop-filter backdrop-blur-3xl rounded-full' >
                        <img src={`${selectedProject.logo}`} className='w-24 h-24 shadow-sm rounded-lg object-contain' alt="logo style" />
                    </div>
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{selectedProject.title}</p>

                        <p className="animatedText">{selectedProject.desc}</p>
                        <p className="animatedText">{selectedProject.subdesc}</p>
                    </div>
                    <div className='w-full flex items-center justify-between flex-wrap gap-5'>
                        <div className='flex items-center gap-3'>
                            {selectedProject.tags.map((tag) => (
                                <div key={tag.id} className='tech-logo'>
                                    <img src={tag.path} alt="teg-img" />
                                </div>
                            ))}
                        </div>
                        <a href={`${selectedProject.href}`} target="_blank"
                            rel="noreferrer" className='flex flex-row gap-2 items-center text-white-500 cursor-pointer'>

                            <p>{selectedProject.hasLiveLinlk ? "Visit live site" : "visit github repo"}</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </a>
                    </div>
                    <div className='flex items-center justify-between mt-7 py-2'>
                        <button className='arrow-btn' onClick={() => { handleNavigation("left") }}>
                            <img src="/assets/left-arrow.png" alt="left-arrow" />
                        </button>
                        <button className='arrow-btn' onClick={() => { handleNavigation("right") }} >
                            <img src="/assets/right-arrow.png" alt="right-arrow" />
                        </button>
                    </div>
                </div>
                <div className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full'>
                    <Canvas>
                        <ambientLight  intensity={Math.PI} />
                        <directionalLight intensity={2} position={[0,-10,5]} />
                        <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}/>
                        <Center>
                            <Suspense fallback={<CanvasLoader/>}>
                                <group scale={2} rotation={[0,-0.1,0]} position={[0,-3,0]}>
                                    <ComputerModel texture={selectedProject.texture}/>
                                </group>
                            </Suspense>
                        </Center>
                    </Canvas>
                </div>

            </div>
        </section>
    )
}

export default Project
