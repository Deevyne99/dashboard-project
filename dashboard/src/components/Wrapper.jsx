//  import {useState} from 'react'

import Analytics from './Analytics'
import CandlestickChart from './Candlestick'

const Wrapper = () => {
  const data = [1, 2, 3]
  return (
    <section className='flex flex-col w-full mx-12 mt-8'>
      <div className='flex gap-6'>
        <div className='flex flex-col w-[55%]  h-screen'>
          <div className='flex gap-6'>
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <Analytics />
                </div>
              )
            })}
          </div>
          <div>
            <CandlestickChart />
          </div>
        </div>
        <div className='flex w-[35%] bg-green-300 h-screen'>
          <div className='w-[80%] bg-blue-600 h-screen'></div>
        </div>
      </div>
    </section>
  )
}

export default Wrapper
