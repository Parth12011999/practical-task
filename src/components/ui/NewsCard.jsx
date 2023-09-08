import React from 'react'

function NewsCard({ props }) {

    const desc = props.description
    const description = desc.slice(0,40)

    const handleBanner = (id) =>{
        console.log(id)
        if(localStorage.getItem('id')){
            localStorage.removeItem('id')
        }
            localStorage.setItem('id',id)
    }

    return (
        <div onClick={()=>{handleBanner(props.id)}}
            class="block rounded-lg sm:w-80 md:w-50 lg:w-30 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white-700 hover:cursor-pointer" 
            >
            <a href="">
                <img
                    class="rounded object-fill w-full h-48 hover:scale-105 transition-all duration-200 ease-in-out"
                    src={props.thumbnail}
                    alt="" />
            </a>
            <div class="p-6">
                <h5
                    class="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-black-50">
                    {props.title}
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-black-200 overflow-hidden">
                    {description}
                </p>
                <p className=''
                ><span className='text-red-600'>{props.brand}</span> . {props.price}</p>
            </div>
        </div>
    )
}

export default NewsCard