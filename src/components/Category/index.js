import React, { useState } from 'react'
import Header from '../Header'
// import NewsTitle from './NewsTitle';
import NewsFeed from '../NewsFeed';
import { useLocation } from 'react-router-dom';

export default function Category() {
    // const [isGridView, setIsGridView] = useState(false);
    const location = useLocation();
    const title = location.pathname.slice(1);
    const finalTitle = title.charAt(0).toUpperCase() + title.slice(1);
    return (
        <section>
            <Header />
            {/* <NewsTitle isGridView={isGridView} setIsGridView={setIsGridView}/> */}
            <NewsFeed categoryTitle={finalTitle}/>
        </section>
    )
}
