import React, { useState } from 'react'
import NewsTitle from './NewsTitle';
import ReadMore from './ReadMore'
import Moment from 'react-moment';
import { MdDateRange } from 'react-icons/md';
import { BiNews } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom'
import dummy_news_image from "../../images/dummyPlaceholder/dummy_news_image.jpg"
export default function GridView({ setShowGrid, showGrid, news, categoryTitle }) {
    let ITEMS_PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);
    const location = useLocation();
    const handlePageChange = (pageNo) => {
        setCurrentPage(pageNo)
    }
    return (
        <div className='wrapper rounded-md bg-white px-2 py-3'>
            <NewsTitle
                categoryTitle={categoryTitle}
                showGrid={showGrid} setShowGrid={setShowGrid}
            />
            <div className='flex flex-wrap'>
                {currentItems.slice(0, 10)?.map((item, index) =>
                    <div
                        key={index}
                        className={`news_wrapper  md:w-6/12 ${location.pathname !== "/" ? "lg:w-4/12" : "lg:w-6/12"} w-full p-2 cursor-pointer`}>
                        <div className="imgBx h-[220px]">
                            <img className='w-full h-full object-cover rounded-md' src={item?.urlToImage ? item?.urlToImage : dummy_news_image} alt="news_img" />
                        </div>
                        <div className="describtion">
                            <div className="title font-font1 text-xl  font-semibold">
                                {item?.title}
                            </div>
                            <div className="right_side">
                                <div className="describtion font-font2 text-justify">
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
                    </div>

                )
                }
            </div>
            <div>
                {Array.from({ length: Math.ceil(news.length / ITEMS_PER_PAGE) }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className='w-[40px] h-[40px] rounded-md bg-color2 mx-1'
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

        </div>
    )
}
