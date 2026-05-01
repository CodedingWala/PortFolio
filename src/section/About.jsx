import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from "../components/Button"

function About() {
    const [hascopied, sethascopied] = useState(false)
    const copyEmail=()=>{
        navigator.clipboard.writeText("ansarijaved092004@gmail.com")
        sethascopied(true)
        setTimeout(() => {
            sethascopied(false)
        }, 2000);
    }
    return (
        <section className='c-space my-20' id='about'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>

                        <img src="/assets/grid1.png" alt="grid1 img" className='w-full sm:w-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Hi I am Javed Ansari</p>
                            <p className='grid-subtext'>I am Mumbai University graduate 2026. I am specialized in MERN Stack and Expo React-Native development</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/image.png" alt="" className='w-full sm:w-[276px] h-fit object-contain rounded-lg' />
                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>I am specialized in MERN Stack ,Expo React-Native development as well as GSAP and THREE 3D Animation</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit justify-center items-center'>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor='rgba(0,0,0,0)'
                                backgroundImageOpecity={0.5}
                                globeImageUrl={"https:unpkg.com/three-globe/example/img/earth-day.jpg"}
                                showAtmosphere={true}
                                labelsData={[{
                                    lat: 19.0760,   // latitude
                                    lng: 72.8777 ,   // longitude
                                    text:"I am in Mumbai",
                                    color:"white",
                                    size:10

                                }]}
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>Prefer working office</p>
                            <p className='grid-subtext'>I live in malad (east) mumbai maharashtra India</p>
                             <a href="#contact"><Button name="Contact me" containerClass="w-full mt-10" isBeam={true} /></a>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-2 xl:row-span-3' >
                    <div className='grid-container'>
                        <img src="/assets/grid3.png" alt="image" className='w-full sm:h-[266px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>My passion for Webdevelopment</p>
                            <p className='grid-subtext'>I am passionate about web development, especially building full-stack apps with MERN and bringing websites to life with advanced 3D animations.</p>
                        </div>
                    </div>
                </div>

                <div  className='xl:col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid4.png"  className=" w-full h-fit  sm:h-[276px] md:h-[126px]  object-cover sm:object-top" alt="keybord img" />
                        <div className='space-y-4'>
                                <p className='text-center grid-headtext'>contact me</p>
                                <div className='copy-container' onClick={copyEmail}>
                                    <img src={hascopied ? "/assets/tick.svg":"/assets/copy.svg"} alt="copysvg" />
                                    <p className='xl:text-2xl md:text-xl text-gray_gradient font-medium text-white'>ansarijaved092004@gmail.com</p>
                                </div>
                                
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
