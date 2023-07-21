import React from 'react';
import { PhoneIcon} from "@heroicons/react/solid";
import { useForm } from "react-hook-form";


function Contact() {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    window.location.href = `mailto:arpitsarkar16@gmail.com?subject=${data.subject}&body=hi,my name is ${data.name}. ${data.massage} 
    (${data.email}) `;
  };


    return (
        <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>contact</h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='md:text-3xl text-base font-semibold text-center'>
                    I have got just what you need.{""}
                    <span className='decoration-[#F7AB0A]/50 underline'>Let's Talk</span>
                </h4>
                <div className='md:space-y-10 space-y-4' >
                    <div className='flex items-center justify-center space-x-5'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-xl'>
                            +917047864547
                        </p>
                    </div>

                    <div className='flex items-center justify-center space-x-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-[#F7AB0A] h-7 w-7 animate-pulse">
                            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>

                        <button onClick={event => window.location.href = "https://www.google.com/maps/place/26%C2%B031'18.6%22N+88%C2%B042'37.1%22E/@26.5140133,88.6967594,14.19z/data=!4m6!3m5!1s0x39e47be29a874f77:0xdd50ca368d38c374!7e2!8m2!3d26.5218257!4d88.7103155'"} className='text-xl'>
                            My location
                        </button>
                    </div>

                    <div className='flex items-center justify-center space-x-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-[#F7AB0A] h-7 w-7 animate-pulse">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                        <p className='text-xl'>
                            arpitsarkar16@gmail.com
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2  w-fit mx-auto'>
                    <div className='space-x-2 flex'>
                        <input {...register('name')} placeholder='Name' className='contactinput w-44 md:w-auto' type="text" />
                        <input {...register('email')}  placeholder='Email' className='contactinput w-44 md:auto' type="email"/>
                    </div>
                    <input {...register('subject')}  placeholder='Subject' className='contactinput' type="text" />
                    <textarea {...register('massage')}  placeholder='Massage' className='contactinput' />
                    <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Contact