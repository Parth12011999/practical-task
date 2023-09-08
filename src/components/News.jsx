import React, { useEffect, useState } from 'react'
import NewsCard from './ui/NewsCard'
import axios from 'axios'
import { ArrowRightIcon } from 'lucide-react'

function News() {

    const [NewsData, setNewsData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await axios.get('https://dummyjson.com/products/')
        // console.log(res.data.products)
        setNewsData(res.data.products)
    }
    return (
        <div className='p-6 my-5'>
            <div className='flex justify-between px-7'>
                <h1 className='font-bold text-3xl'>Latest News</h1>
                <a href="" >
                    <h1 className='flex gap-x- font-semibold text-red-600'>See all <ArrowRightIcon color='red' /> </h1>
                </a>
            </div>
            <div className='flex justify-center my-6 items-start flex-wrap gap-x-3 gap-y-12'>
                {
                    NewsData?.map((news) => {
                        return <NewsCard props={news} />
                    })
                }
            </div>
        </div>
    )
}

export default News