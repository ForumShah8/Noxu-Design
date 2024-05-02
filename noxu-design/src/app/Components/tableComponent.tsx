export default function DataTableComponent(){
const dummyData = [
  {
    " ": "477",
    "Name": "Abbott - Pacocha",
    "Industry":"IT",
    "City":"Colombus",
    "State":"CO",
    "Segment":"Ente Some segment data",
    "OwnerID":"7"
  },
  {
    " ": "477",
    "Name": "Abbott - Pacocha",
    "Industry":"IT",
    "City":"Colombus",
    "State":"CO",
    "Segment":"Ente Some segment data",
    "OwnerID":"7"
  },
  {
    " ": "477",
    "Name": "Abbott - Pacocha",
    "Industry":"IT",
    "City":"Colombus",
    "State":"CO",
    "Segment":"Ente Some segment data",
    "OwnerID":"7"
  },
  {
    " ": "477",
    "Name": "Abbott - Pacocha",
    "Industry":"IT",
    "City":"Colombus",
    "State":"CO",
    "Segment":"Ente Some segment data",
    "OwnerID":"7"
  },
  {
    " ": "477",
    "Name": "Abbott - Pacocha",
    "Industry":"IT",
    "City":"Colombus",
    "State":"CO",
    "Segment":"Ente Some segment data",
    "OwnerID":"7"
  }
]
    return (
        <div className="bg-slate-100 h-fit  w-screen  justify-center flex">
        <div className=' px-24 py-4 w-3/4'>
        <div className="inline-flex">
  <button className= " flex items-center  bg-white border  border-slate-300 text-orange-500 text-xs font-bold  px-2 rounded-l-lg">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>

  <div className='ml-2'>
    Not Confident
    </div>
  </button>
  <button className=" flex items-center bg-white border  border-slate-300 border-l-0 text-orange-500 text-xs font-bold py-1 px-2 rounded-r-lg">
    <div className='mr-2'>
    Human Help
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
  </button>
</div>
<div className='flex  mt-2 w-full'>
<svg  className='h-10 w-10 mr-4' viewBox="0 0 176 176" fill="none" xmlns="http://www.w3.org/2000/svg" stroke='currentColor'>
<path d="M132.252 71.8955C133.758 62.2532 125.225 54.0458 115.649 55.9269L98.7423 59.2477C95.4169 59.901 91.9961 59.901 88.6706 59.2477L71.7645 55.9269C62.1882 54.0458 53.6546 62.2532 55.1612 71.8955C56.2307 78.7403 62.1263 83.7862 69.0542 83.7862H118.359C125.287 83.7862 131.182 78.7403 132.252 71.8955Z" fill="#000000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M118.702 132.374H68.6867C55.3334 132.316 43.2265 126.979 34.3451 118.342C34.251 117 34.2031 115.645 34.2031 114.278C34.2031 94.2587 44.4763 76.6389 60.0385 66.4028L93.6943 74.368L127.352 66.4023C142.915 76.6384 153.188 94.2585 153.188 114.278C153.188 115.644 153.14 116.998 153.046 118.34C144.165 126.978 132.057 132.316 118.702 132.374Z" fill="#000000"/>
<rect x="23.3021" y="37.183" width="140.8" height="91.2225" rx="45.6113" stroke="#000000" stroke-width="7.93239"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.2495 89.9863C40.1641 89.9863 38.4498 91.6057 38.1736 93.6727C35.8042 111.409 25.3162 126.576 10.5696 135.315C7.33656 137.231 7.59187 142.249 11.3157 142.755C13.8607 143.101 16.4588 143.28 19.0986 143.28C39.0334 143.28 56.589 133.093 66.8439 117.641C68.4829 115.171 66.5973 112.048 63.6334 112.048H53.3302C50.8589 112.048 48.9893 109.813 49.4266 107.38L51.7144 94.6543C52.1517 92.222 50.2821 89.9863 47.8108 89.9863H42.2495Z" fill="#000000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M93.6715 99.3317C93.5829 99.5508 93.4919 99.7688 93.3986 99.9856C93.3892 99.9666 93.3797 99.9476 93.3703 99.9286C93.3609 99.9476 93.3515 99.9666 93.3421 99.9856C93.2487 99.7688 93.1578 99.5509 93.0691 99.3317C84.116 81.8598 65.9274 69.9025 44.946 69.9025C41.4802 69.9025 39.1765 66.1634 41.6999 63.7876C47.4679 58.357 55.2382 55.0293 63.7856 55.0293C77.0363 55.0293 88.4191 63.0268 93.3703 74.4583C98.3215 63.0268 109.704 55.0293 122.955 55.0293C131.502 55.0293 139.273 58.357 145.041 63.7876C147.564 66.1634 145.26 69.9025 141.795 69.9025C120.813 69.9025 102.625 81.8598 93.6715 99.3317Z" fill="#000000"/>
<circle cx="68.9123" cy="91.2209" r="14.8732" fill="white"/>
<circle cx="68.909" cy="91.2215" r="7.93239" fill="#000000"/>
<circle cx="62.9668" cy="85.2715" r="2.97465" fill="white"/>
<circle cx="118.49" cy="91.2209" r="14.8732" fill="white"/>
<circle cx="118.487" cy="91.2215" r="7.93239" fill="#000000"/>
<circle cx="112.545" cy="85.2715" r="2.97465" fill="white"/>
<path d="M86.2578 106.593C86.2578 102.486 89.5873 99.1562 93.6944 99.1562C97.8016 99.1562 101.131 102.486 101.131 106.593V108.235C101.131 110.04 100.414 111.772 99.1368 113.049L96.499 115.687C94.9501 117.236 92.4388 117.236 90.8899 115.687L88.252 113.049C86.9752 111.772 86.2578 110.04 86.2578 108.235L86.2578 106.593Z" fill="white"/>
</svg>
<div className='pt-2  flex flex-col w-full pr-4'>
  <div className="">
    To find out how many accounts you have, you can use the following query:
  </div>
  <div className="border rounded-xl overflow-auto bg-white">
    <table className="table-auto  min-w-full divide-y divide-gray-200">
      <thead className="text-gray-500 ">
        <tr>
        <th  className="text-sm py-2">
            <p className="flex items-center justify-center">
           
           
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
              </svg>  
              </p>
          </th>
          <th  className="text-sm py-2">
            <p className="flex items-center justify-center">
            Name
           
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
              </svg>  
              </p>
          </th>
          <th  className="text-sm py-2">
            <p className="flex items-center justify-center">
            Industry
              </p>
          </th>
          <th  className="text-sm py-2">
            <p className="flex items-center justify-center">
            City
           
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
              </svg>  
              </p>
          </th>
          <th  className="text-sm py-2">
            <p className="flex items-center justify-center">
            State
           
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
              </svg>  
              </p>
          </th>
          <th  className="text-sm py-2 px-4">
            <p className="flex items-center justify-center">
            Segment
           
           
              </p>
          </th>
          <th  className="text-sm py-2">
            <p className="flex items-center justify-center">
            Owner ID
           
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
              </svg>  
              </p>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {dummyData.map((data,index) =>(
          <tr key={index}>
            <td className="py-2 whitespace-nowrap text-sm font-medium text-gray-800 ">
        <p className="flex items-center justify-center">
          {data[" "]}
          </p>
          </td>
              <td className="py-2 whitespace-nowrap text-sm text-gray-800 max-w-52">
              <p className="flex items-center justify-center">
                {data["Name"]}
                </p>
                </td>
              <td className="py-2 whitespace-nowrap text-sm text-gray-800 max-w-2">
              <p className="flex items-center justify-center">
                {data["Industry"]}
                </p>
                </td>
              <td className="py-2 text-sm text-gray-800">
              <p className="max-w-12 truncate mx-auto">
                {data["City"]}
                </p>
                </td>
              <td className="py-2 whitespace-nowrap text-sm text-gray-800 ">
              <p className="flex items-center justify-center">
                {data["State"]}
                </p>
                </td>
              <td className="py-2 text-sm text-gray-800  ">
              <p className=" truncate max-w-12 mx-auto">
                {data["Segment"]}
                </p>
                </td>
              <td className="py-2 whitespace-nowrap text-sm text-gray-800 ">
              <p className="flex items-center justify-center">
                {data["OwnerID"]}
                </p>
                </td>
          </tr>
        ))}
         <tr>
                <td  className="bg-slate-50" colSpan={7} >
                    <div className='flex justify-between mx-4 items-center text-slate-500 text-sm py-2 font-bold'>
                        <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-5 h-5 mr-2 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>

                Only X rows are shown. View full list for more
                </div>
                <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-4 h-4 text-slate-300">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</button>
                </div>

                   </td>
                  
            </tr>
            <tr>
                <td colSpan={7}>
                    <div className='flex space-x-4 py-2 px-2'>
                        <button className='border  p-2 border-slate-200 rounded-lg text-xs'>Show Full List</button>
                        <button className='border  p-2 border-slate-200 rounded-lg text-xs'>Show Query</button>
                        <button className='border  p-2 border-slate-200 rounded-lg text-xs'>Show Chart</button>
                        <button className='border  p-2 border-slate-200 rounded-lg text-xs'>Pin to Dashboard</button>
                    </div>
                </td>
            </tr>
      </tbody>
    </table>
  </div>
</div>
</div>
        </div>
        </div>
    )
}