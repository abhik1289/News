import React, { useState } from 'react'
import ListBox from './ListBox'
import GridView from './GridView';
import Headline from '../Headline';
import { useMediaQuery } from 'react-responsive'
import { useLocation } from 'react-router-dom';
import useApiFetch from './../../helpers/useFetch';
import { FidgetSpinner } from 'react-loader-spinner'
const checkLocation = (pathname) => {
  let apiKey = "66fb63cfc86e422b8fe3bb3eee3f08be";
  let country = 'in';

  let apiUrl;

  if (pathname === "/") {
    apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
  } else if (pathname === "/business") {
    apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${apiKey}`;
  }
  else if (pathname === "/entertainment") {
    apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=entertainment&apiKey=${apiKey}`;
  }
  else if (pathname === "/health") {
    apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=health&apiKey=${apiKey}`;
  }
  else if (pathname === "/science") {
    apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=science&apiKey=${apiKey}`;
  }
  else if (pathname === "/sports") {
    apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=sports&apiKey=${apiKey}`;
  }
  else if (pathname === "/technology") {
    apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=technology&apiKey=${apiKey}`;
  }
  return { apiUrl };
}

export default function NewsFeed({ categoryTitle }) {
  const location = useLocation();
  const [showGrid, setShowGrid] = useState(false);
  const isTab = useMediaQuery({
    query: '(min-width: 768px)'
  });

  const { apiUrl } = checkLocation(location.pathname);
  const { data, loading, error } = useApiFetch(apiUrl);
  const news = data && data?.data?.articles;

  if(!news){
    return <div className='w-screen h-screen flex justify-center items-center' ><FidgetSpinner
    visible={true}
    height="80"
    width="80"
    ariaLabel="fidget-spinner-loading"
    wrapperStyle={{}}
    wrapperClass="fidget-spinner-wrapper"
    /></div>
  }

  return (
    <section className='px-1 flex flex-wrap'>
      <div className={`left_side p-2 ${location.pathname === "/" ? "lg:w-8/12" : "lg:w-full"}`}>

        {isTab ? <>{showGrid ? <GridView
          categoryTitle={categoryTitle}
          showGrid={showGrid}
          setShowGrid={setShowGrid}
          news={news && news}
          loading={loading}
          error={error}
        /> : <ListBox
          categoryTitle={categoryTitle}
          showGrid={showGrid}
          setShowGrid={setShowGrid}
          news={news && news}
          loading={loading}
          error={error}
        />}</> : <GridView
          categoryTitle={categoryTitle}
          news={news && news}
          loading={loading}
          error={error}
          showGrid={showGrid}
          setShowGrid={setShowGrid} />}
      </div>
      {location.pathname === "/" && <div className="left_side rounded-md mt-[9px]  bg-white hidden lg:block p-2 w-4/12">
        <div className="mainContainer bg-white ">
          <div className="title capitalize font-font1 p-2 text-2xl font-semibold">
            headlines
          </div>
          <Headline />
        </div>
      </div>}

    </section>
  )
}
