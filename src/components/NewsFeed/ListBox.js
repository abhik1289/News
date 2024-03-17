import React, { useState } from 'react'
import NewsTitle from './NewsTitle'
import ReadMore from './ReadMore'
import Moment from 'react-moment';
import {Link} from 'react-router-dom'
import { MdDateRange } from 'react-icons/md';
import dummy_news_image from "../../images/dummyPlaceholder/dummy_news_image.jpg"
import { BiNews } from 'react-icons/bi';

export default function ListBox({ setShowGrid, showGrid, categoryTitle, news }) {
    let ITEMS_PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = news?.slice(indexOfFirstItem, indexOfLastItem);
    const handlePageChange = (pageNo) => {
        setCurrentPage(pageNo)
    }
    return (
        <div className='wrapper rounded-md bg-white px-2 py-3'>
            <NewsTitle
                showGrid={showGrid} categoryTitle={categoryTitle} setShowGrid={setShowGrid}
            />
            {currentItems?.map((item, index) => <div key={index} className="main_conteent_area my-2 flex flex-wrap cursor-pointer">
                <div className="imgBx w-4/12 h-[250px]">
                    <img className='w-full h-full object-cover rounded-md' src={item?.urlToImage ? item?.urlToImage : dummy_news_image} alt="news_img" />
                </div>
                <div className="news_area w-7/12 pl-3">
                    <div className="title font-font1  font-semibold lg:text-xl text-md">
                        {item?.title}
                    </div>
                    <div className="right_side">
                        <div className="describtion font-font2">
                            {item.content && item.content.slice(0, 250) + "..."}
                        </div>
                        <div className="addttional_describtion flex gap-2">
                            {item.publishedAt && <div className="show_time flex items-center gap-2 bg-slate-200 mt-1 w-[130px] px-2 py-1 rounded-md font-font2 capitalize">
                                <div className="icon">
                                    <MdDateRange />
                                </div>
                                <Moment fromNow>{item.publishedAt}</Moment>
                            </div>}
                            {item.source && <div className="show_time flex items-center gap-2 bg-slate-200 mt-1  px-2 py-1 rounded-md font-font2 capitalize">
                                <div className="icon">
                                    <BiNews />
                                </div>
                                {item.source.name}
                            </div>}
                        </div>
                        <Link target='_blank' to={item?.url}>
                                <div className="read_btn">
                                    <ReadMore />
                                </div>
                            </Link>
                    </div>
                </div>
            </div>)}
            {Array.from({ length: Math.ceil(news?.length / ITEMS_PER_PAGE) }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className='w-[40px] h-[40px] rounded-md bg-color2 mx-1'
                >
                    {index + 1}
                </button>
            ))}
        </div>
    )
}
