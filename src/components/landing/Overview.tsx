import React from 'react'
import Wrapper from '@/components/global/Wrapper'

const Overview = () => {
    const OverviewData = [
        {
            title: "5.6h",
            description: "Time saved on avg"
        },
         {
            title: "5.6h",
            description: "Time saved on avg"
        },
         {
            title: "5.6h",
            description: "Time saved on avg"
        }
    ]
  return (
    <div className='w-full py-10 sm:py-20 bg-gray-200/50'>
            <Wrapper>
                <div className='grid sm:grid-cols-3 gap-3 justify-items-center'>
                            {
                                OverviewData && OverviewData.map((item, i)=>{
                                    return(
                                        <div key={i}>
                                            <h1 className='text-5xl font-bold'>{item.title}</h1>
                                            <p>{item.description}</p>
                                        </div>
                                    )
                                })
                            }
                </div>
            </Wrapper>
    </div>
  )
}

export default Overview
