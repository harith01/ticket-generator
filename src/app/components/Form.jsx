"use client"
import React from 'react'
import Image from 'next/image'
import downloadicon from "../assets/cloud-download.svg";
import { useState, useEffect } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Form = () => {
    const [formValues, setFormValues] = useState({ imageUrl: '', name: '', email: '', request: '' })
    const [image, setImage] = useState(null)

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleFileChange = (e) => {
        setImage(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleUploadImage()
        console.log(formValues)
    }

    const handleUploadImage = async () => {
        const formData = new FormData()
        formData.append('file', image)
        formData.append("upload_preset", "upload");
        try {
            const response = await fetch('https://api.cloudinary.com/v1_1/deradwq2y/image/upload', {
                method: 'POST',
                body: formData
            })
            const data = await response.json()
            setFormValues({ ...formValues, imageUrl: data.secure_url })
        } catch (error) {
            alert('An error occurred while uploading the image')
        }
    }

    useEffect(() => {
        const savedFormValues = localStorage.getItem('formData')
        if (savedFormValues) {
            setFormValues(JSON.parse(savedFormValues))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formValues))
    }, [formValues])

    return (
        <form className="bg-[#08252B] p-6 rounded-[32px] border border-[#0E464F]" onSubmit={handleSubmit}>
            <div className="bg-[#08252B] p-6 rounded-[32px] border border-[#0E464F]">
                <h2 className="text-[1rem]">Upload Profile Photo</h2>
                <div className="h-[200px] bg-black mt-8 flex justify-center items-center px-8 md:px-20 lg:px-40 relative">
                    <div className="bg-[#052228] p-6 min-h-[180px] w-full max-w-[90%] sm:max-w-[240px] absolute border-[4px] border-[#24A0B5] flex flex-col justify-center items-center rounded-[32px]">
                        <label htmlFor="file-upload" className="flex flex-col items-center gap-4">
                            <Image src={downloadicon} width={32} height={32} alt="upload icon" unoptimized />
                            <p className="font-normal text-[1rem] text-center">Drag & drop or click to upload</p>
                            <input type="file" id="file-upload" onChange={handleFileChange} className="hidden" />
                        </label>
                    </div>
                </div>
            </div>
            {image && <h1>Uploaded</h1>}
            <div className="w-full h-[4px] bg-[#0E464F] rounded-[5px] mt-4">
            </div>
            <div className='mt-4 flex flex-col gap-2'>
                <label htmlFor="name" className=''>Enter your name</label>
                <input type='text' 
                 className='w-full bg-[#08252B] p-3 border border-[#07373F] rounded-xl' 
                 name='name'
                 value={formValues.name}
                 onChange={handleChange}
                 />
            </div>
            <div className='mt-4 flex flex-col gap-2 relative'>
                <label htmlFor="name" className=''>Enter your email*</label>
                <input type='text' 
                name='email'
                className='w-full bg-[#08252B] p-3 pl-10 border border-[#07373F] rounded-xl' 
                value={formValues.email}
                onChange={handleChange}
                />
                <EnvelopeIcon className='absolute top-11 left-2' width={24} height={24} />
            </div>
            <div className='mt-4 flex flex-col gap-2'>
                <label htmlFor="name" className=''>Special request?</label>
                <textarea type='textarea' 
                className='w-full bg-[#08252B] h-[127px] p-3 border border-[#07373F] rounded-xl'
                value={formValues.request}
                onChange={handleChange}
                name='request'
                ></textarea>
            </div>
            <div className="flex justify-between gap-6 mt-4 flex-col sm:flex-row">
                <Link href="/" className="py-3 px-6 border border-[#24A0B5] basis-1/2 rounded-xl text-center "><button>Back</button></Link>
                <button type='submit' className="py-3 px-6 border border-[#24A0B5] basis-1/2 bg-[#24A0B5] rounded-xl text-center" >
                    Get My Free Ticket
                </button>
            </div>
        </form>
    )
}

export default Form