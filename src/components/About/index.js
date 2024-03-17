import React from 'react'

export default function About() {
    const news_category = [
        {
            id: 1,
            title: 'All',
        },
        {
            id: 2,
            title: 'Business',
        },
        {
            id: 3,
            title: 'Entertainment',
        },
        {
            id: 4,
            title: 'Health',
        },
        {
            id: 5,
            title: 'Science',
        },
        {
            id: 6,
            title: 'Sports',
        },
        {
            id: 6,
            title: 'Technology',
        }
    ];
    return (
        <section className='about_us md:w-10/12 w-full mx-auto'>
            <h1 className='font-font1 font-bold text-3xl'> OVk's News</h1>
            <h3 className='font-font2 py-2 italic'>
                OVk's News is a completely API-based news app that allows you to read multiple country news immediately and post your own news. The app was developed by Abhik Patra and is available for free on the App Store and Google Play.
            </h3>

            <h5 className='font-semibold text-xl'>OVk's News offers a variety of news categories, including:</h5>
            <ul className='font-font2'>
                {
                    news_category.map((category, index) => <li key={index}>
                        {category.title}
                    </li>)
                }
            </ul>
            <h6 className='font-font2 py-2'>
            You can also use OVk's News to post your own news. Simply create an account and start writing!

OVk's News is a great way to stay up-to-date on the latest news from around the world. With its easy-to-use interface and comprehensive news coverage, OVk's News is the perfect news app for anyone who wants to be informed.

Features:

Multiple news sources: OVk's News sources its news from a variety of trusted news organizations, so you can be sure that you're getting accurate and up-to-date information.
Comprehensive news coverage: OVk's News covers a wide range of news topics, so you can find the news that's important to you.
Easy-to-use interface: OVk's News has a clean and simple interface that makes it easy to find the news you're looking for.
Ability to post your own news: If you have a news story that you want to share with the world, you can easily post it on OVk's News.
Download OVk's News today and start staying up-to-date on the latest news from around the world!

About the Developer:

OVk's News was developed by Abhik Patra, a software engineer with a passion for news. Abhik is committed to providing users with a reliable and informative news app, and he is constantly working to improve OVk's News.
<br />
<div className="txt italic uppercase py-2">
Thank you for using OVk's News!
</div>
            </h6>
        </section>
    )
}
