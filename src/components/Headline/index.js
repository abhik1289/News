import React from 'react'
import Moment from 'react-moment';
import useApiFetch from '../../helpers/useFetch';
import dummy_news_image from "../../images/dummyPlaceholder/dummy_news_image.jpg"

export default function Headline() {
    let apiKey = "66fb63cfc86e422b8fe3bb3eee3f08be";
    let country = 'in';
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=66fb63cfc86e422b8fe3bb3eee3f08be`;
    const { data, loading, error } = useApiFetch(apiUrl);
    const news = data?.data?.articles;

    return (
        <div>
        {news?.slice(0,8)?.map((item,index)=><div key={index} className='flex flex-wrap gap-2 cursor-pointer font-font1 p-2'>
            <div className="image w-4/12">
            <img className='w-full h-full object-cover rounded-md' src={item?.urlToImage ? item?.urlToImage : dummy_news_image} alt="news_img" />
            </div>
            <div className="discuss w-7/12">
                <div className="title font-semibold">
                {item?.title}
                </div>
               {item.publishedAt && <div className="date">
                    <Moment fromNow>{item.publishedAt}</Moment>
                </div>}
            </div>
        </div>)
        }
        <button className='font-font1 w-full bg-color2 py-2 rounded-md mt-2 hover:bg-color3 transition-all duration-150'>Show More</button>
        </div>
    )
}
