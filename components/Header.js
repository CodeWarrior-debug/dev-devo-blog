import React, {useState} from 'react'
import cls from "classnames"


const Header = () => {

    const [menuDisplay, setMenuDisplay]=useState('hidden');

    const showMenu = () =>{
        if (menuDisplay=='hidden'){
           return setMenuDisplay('flex')
        } else {
           return setMenuDisplay('hidden')
        }
    }

    return (
    <>
      <header className="p-4 bg-[#0C3BAA] text-[#FFFEF2] dark:bg-gray-800 dark:text-gray-100">
        {/* TODO - lookup mx auto?? */}
	<div className= {"container flex justify-between h-16 mx-auto"}>
		
		<ul className={cls(menuDisplay," items-stretch space-x-3 lg:flex")}  >

        {/* TODO - lookup noopener noreferrer?? */}
		
			<li className="flex">
				<a rel="noopener noreferrer" href="/blogs" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">
                    Blogs
                </a>
				<a rel="noopener noreferrer" href="/compose" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">
                    Compose
                </a>
                {/* TODO add search function */}
				<a rel="noopener noreferrer" href="/search" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">
                    Search
                </a>
				<a rel="noopener noreferrer" href="/search" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">
                    Log In
                </a>
			</li>

		</ul>

		<div className="flex items-center md:space-x-4">
			<div className="relative">
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<button type="submit" title="Search" className="text-white p-1 focus:outline-none focus:ring">
                        Push me
						{/* <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
							<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
						</svg> */}
					</button>
				</span>
				<input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" />
			</div>
			<button type="button" className="px-6 py-2 font-semibold rounded lg:block dark:bg-violet-400 dark:text-gray-900">Log in</button>
			{/* <button type="button" className="hidden px-6 py-2 font-semibold rounded lg:block dark:bg-violet-400 dark:text-gray-900">Log in</button> */}
		</div>

		<button title="Open menu" type="button" className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" onClick={showMenu} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    </>
  )
}

export default Header
