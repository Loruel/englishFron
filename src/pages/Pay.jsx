import React from 'react'
import { englishFunction } from '../context/Context'

export default function Pay() {
  const { user } = englishFunction()

  return (
    <div className='pl-4 pr-4 pt-2 mb-5 w-full h-screen'>

      <div className='bg-white pl-5 pr-5 pt-2 pb-2 w-full flex flex-col rounded-lg shadow-md shadow-black'>

        <p className='font-bold text-2xl mb-2'>
          Payments
        </p>
        <p className='mb-5'>
          Hi
          <span className='font-bold ml-1'>{user?.first_name}</span>
          , you have until the 3rd of next month to make your corresponding payment.
        </p>

        <div className='lg:grid lg:grid-cols-2 lg:gap-x-5'>

          <div className='p-1 h-14 lg:h-60 flex bg-gray-200 shadow-black shadow-sm rounded-lg mb-4 lg:flex lg:flex-col lg:items-center lg:justify-center'>
            <p className='w-1/2 flex justify-center items-center lg:font-bold lg:text-lg'>
              Monthly payment
            </p>
            <p className='hidden lg:block lg:p-5'>
              Pay only one monthly payment. <br />
              Remember that with this method you will have to pay nes after nes for your level
            </p>
            <div className='w-1/2 flex justify-center items-center'>
              <a
                className='bg-emerald-700 p-2 rounded-md text-white font-semibold shadow shadow-black'
                href="https://mpago.la/2iZdLNn">
                Pay monthly
              </a>
            </div>

          </div>

          <div className='p-1 h-14 lg:h-60 flex bg-gray-200 shadow-black shadow-sm rounded-lg mb-4 lg:flex lg:flex-col lg:items-center lg:justify-center'>
            <p className='w-1/2 flex justify-center items-center lg:font-bold lg:text-lg'>
              Subscription
            </p>
            <p className='hidden lg:block lg:p-5'>
              Subscribe at all your level. <br />
              With this method you can subscribe to your level and charges will be made monthly
            </p>
            <div className='w-1/2 flex justify-center items-center'>
              <a
                className='bg-emerald-700 p-2 rounded-md text-white font-semibold shadow shadow-black'
                href="https://www.mercadopago.com.mx/subscriptions/checkout?preapproval_plan_id=2c938084942fb6b2019432f81f7000c9">
                Pay subscription
              </a>
            </div>

          </div>

          <div className='p-1 h-14 lg:h-60 flex bg-gray-200 shadow-black shadow-sm rounded-lg mb-2 lg:flex lg:flex-col lg:items-center lg:justify-center'>
            <p className='w-1/2 flex justify-center items-center lg:font-bold lg:text-lg'>
              Level payment
            </p>
            <p className='hidden lg:block lg:p-5'>
              Pay your entire level. <br />
              With this method you can enjoy a discount when paying for your entire level in an exhibition
            </p>
            <div className='w-1/2 flex justify-center items-center'>
              <a
                className='bg-emerald-700 p-2 rounded-md text-white font-semibold shadow shadow-black'
                href="https://www.mercadopago.com.mx/subscriptions/checkout?preapproval_plan_id=2c938084942fb6b2019432f81f7000c9">
                Pay subscription
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
