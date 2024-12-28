function Demo() {
  return (
    <div className=" h-[100px]">
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-6 duration-100 hover:scale-110 hover:drop-shadow-lg sm:py-12">
        <div
          className="flex flex-col space-y-5 rounded-xl bg-gradient-to-tr from-violet-700 to-violet-500 p-8"
          id="widget"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 rounded-lg bg-violet-500 px-2 py-1">
              <div className="h-5 w-5 rounded-md bg-green-300"></div>
              <div className="text-sm text-white md:text-base">Programming</div>
            </div>
            <div className="text-sm text-violet-300 md:text-base">
              24 July 2023
            </div>
          </div>
          <h2 className="text-xl font-medium text-white">
            Landing page - Front-end
          </h2>
          <div className="flex justify-between">
            <img
              src="https://pbs.twimg.com/profile_images/1454861068233228289/6sn9BYOf_400x400.jpg"
              className="w-10 rounded-full ring ring-white"
            />
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="flex space-x-2 text-violet-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg>
                <div>2</div>
              </div>
              <div className="flex space-x-2 text-violet-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <div>2</div>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div>00:34</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-9">
            <div className="h-3 flex-1 rounded-full bg-violet-500 md:w-80">
              <div className="h-3 w-[80%] rounded-full bg-gradient-to-l from-green-300 to-green-400"></div>
            </div>
            <div className="w-24 text-violet-300">Est: 2:00 h</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo
