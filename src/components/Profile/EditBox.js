import React, { useState, useCallback, useRef } from 'react'
import Webcam from 'react-webcam';
import Cropper from 'react-easy-crop'
export default function EditBox() {
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };
    const [picture, setPicture] = useState('');
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const webcamRef = useRef(null);
    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            if (imageSrc) {
                setPicture(imageSrc);
            }
        },
        [webcamRef]
    );
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
    }, [])
    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-[#00000052] flex justify-center items-center'>
            <div className="containerBox p-2  rounded-md w-[450px] h-[450px] bg-white">
                <div className="title title font-font1 text-2xl font-semibold">
                    Choose and Edit
                </div>
                <div className="wraapper overflow-hidden w-full h-full flex flex-col justify-center">
                    <div className="button_wrapper flex flex-col justify-center">
                        {!picture && <button className='bg-color3 font-font1 px-3 rounded-md text-white mt-2 py-2'>Choose Photo from File</button>}
                        {!picture ? <Webcam
                            audio={false}
                            height={720}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={1280}
                            videoConstraints={videoConstraints}
                        /> : <Cropper
                            image={picture}
                            crop={crop}
                            zoom={zoom}
                            aspect={4 / 3}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                        />}
                        <button onClick={capture} className='bg-color3 font-font1 px-3 rounded-md text-white mt-2 py-2'>Take Photo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
