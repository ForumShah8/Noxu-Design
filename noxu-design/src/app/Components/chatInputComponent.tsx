export default function ChatComponent(){
    return (
      <div className="w-screen h-fit  justify-center flex my-4">
        <div className="w-3/4 px-24">
          <div className='flex space-x-4 px-2'>
             <button className='border  p-2 border-slate-200 rounded-lg text-xs'>Suggest question 1</button>
             <button className='border  p-2 border-slate-200 rounded-lg text-xs'>Suggest question 2</button>
             <button className='border  p-2 border-slate-200 rounded-lg text-xs'>Suggest question 3</button>
           </div>
                      <div className='flex py-4 px-2 w-full '>
             <button className='flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 border border-e-0 border-gray-300 rounded-l-lg ' type='button'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" className="w-5 h-5 mr-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
 </svg>

             Chat

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true" className="w-4 h-4 ml-1 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
              </svg>
              </button>
              <div className='relative w-full'>
                <input type='search' className='w-full block p-2.5 z-20 text-sm  text-gray-900 bg-white rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 ' placeholder='Start a new chat'>
                  
                </input>
                <button className='absolute top-0 end-0 p-2.5 h-full text-sm font-medium rounded-e-lg border border-gray-300 border-l-0'>
                <svg className='w-5 h-5 text-gray-400' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.4995 13.5002L20.9995 3.00017M10.6271 13.8282L13.2552 20.5862C13.4867 21.1816 13.6025 21.4793 13.7693 21.5662C13.9139 21.6415 14.0862 21.6416 14.2308 21.5664C14.3977 21.4797 14.5139 21.1822 14.7461 20.5871L21.3364 3.69937C21.5461 3.16219 21.6509 2.8936 21.5935 2.72197C21.5437 2.57292 21.4268 2.45596 21.2777 2.40616C21.1061 2.34883 20.8375 2.45364 20.3003 2.66327L3.41258 9.25361C2.8175 9.48584 2.51997 9.60195 2.43326 9.76886C2.35809 9.91354 2.35819 10.0858 2.43353 10.2304C2.52043 10.3972 2.81811 10.513 3.41345 10.7445L10.1715 13.3726C10.2923 13.4196 10.3527 13.4431 10.4036 13.4794C10.4487 13.5115 10.4881 13.551 10.5203 13.5961C10.5566 13.647 10.5801 13.7074 10.6271 13.8282Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
              </div>
              <button className='bg-white border border-red-600 text-red-600 rounded-lg px-2 mx-4 min-w-fit text-sm'>End Chat</button>
              
          </div>
        </div>
      </div>
//         <div className="w-screen  -mt-9 h-fit justify-center flex items-center">
//         <div className='px-24  w-3/4 py-4 '>

//           <div className='flex space-x-4 px-2'>
//             <button className='border  p-2 border-slate-200 rounded-lg text-xs'>Suggest question 1</button>
//             <button className='border  p-2 border-slate-200 rounded-lg text-xs'>Suggest question 2</button>
//             <button className='border  p-2 border-slate-200 rounded-lg text-xs'>Suggest question 3</button>
//           </div>


//           <div className='flex py-4 px-2 w-full '>
//             <button className='flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 border border-e-0 border-gray-300 rounded-l-lg ' type='button'>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" className="w-5 h-5 mr-1">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
// </svg>

//               Chat

//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
//                 stroke="currentColor" aria-hidden="true" className="w-4 h-4 ml-1 text-gray-500">
//                 <path stroke-linecap="round" stroke-linejoin="round"
//                   d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
//               </svg>
//               </button>
//               <div className='relative w-full'>
//                 <input type='search' className='w-full block p-2.5 z-20 text-sm  text-gray-900 bg-white rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 ' placeholder='Start a new chat'>
                  
//                 </input>
//                 <button className='absolute top-0 end-0 p-2.5 h-full text-sm font-medium rounded-e-lg border border-gray-300 border-l-0'>
//                 <svg className='w-5 h-5 text-gray-400' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.4995 13.5002L20.9995 3.00017M10.6271 13.8282L13.2552 20.5862C13.4867 21.1816 13.6025 21.4793 13.7693 21.5662C13.9139 21.6415 14.0862 21.6416 14.2308 21.5664C14.3977 21.4797 14.5139 21.1822 14.7461 20.5871L21.3364 3.69937C21.5461 3.16219 21.6509 2.8936 21.5935 2.72197C21.5437 2.57292 21.4268 2.45596 21.2777 2.40616C21.1061 2.34883 20.8375 2.45364 20.3003 2.66327L3.41258 9.25361C2.8175 9.48584 2.51997 9.60195 2.43326 9.76886C2.35809 9.91354 2.35819 10.0858 2.43353 10.2304C2.52043 10.3972 2.81811 10.513 3.41345 10.7445L10.1715 13.3726C10.2923 13.4196 10.3527 13.4431 10.4036 13.4794C10.4487 13.5115 10.4881 13.551 10.5203 13.5961C10.5566 13.647 10.5801 13.7074 10.6271 13.8282Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
//                 </button>
//               </div>
//               <button className='bg-white border border-red-600 text-red-600 rounded-lg px-2 mx-4 min-w-fit text-sm'>End Chat</button>
              
//           </div>
//         </div>
//         </div>
    )
}