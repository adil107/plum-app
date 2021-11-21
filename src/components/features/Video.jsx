import React, { useRef, useState } from 'react'
const Video = () => {
    const videoRef = useRef()
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(true)
        videoRef.current.play()
    }

    return (
        <div className="Video_Wrapper relative">
            <div className={`${show ? "hidden" : "block"} h-full w-full absolute z-20 flex justify-center`}>
                <img src="./assets/images/youtube-video-bg.jpg" alt="" className="object-cover h-full w-full" />
                <svg xmlns="http://www.w3.org/2000/svg" className=" text-white rounded-full absolute " viewBox="0 0 20 20" fill="currentColor" onClick={handleClick}>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>

            </div>
            <div className="h-full w-full">
                <video src="./assets/video/video.mkv" ref={videoRef} width="100" height="100" controls autoPlay={false} className="w-full h-full object-cover" />
            </div>
        </div >
    )
}

export default Video
