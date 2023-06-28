import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='w-full bg-[#2B2D33]'>
      <div className='flex flex-col items-center justify-between w-full px-12 xl:px-40 md:flex-row'>
        <div className="w-full left">left</div>
        <div className="w-full right">right</div>
      </div>
    </div>
  )
}

export default About