import React from 'react'

export default function AuthHeader({headline,subHeadline}) {
  return (
    <div className="header">
    <h1 className='text-3xl font-font1 font-semibold'>
      {headline}
    </h1>
    <h4 className='font-font2'>
      {subHeadline}
    </h4>
  </div>
  )
}
AuthHeader.defaultProps={
  headline:"Get the latest news from around the world",
  subHeadline:"Stay up-to-date on the latest news from around the world."
}