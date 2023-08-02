import { Link } from 'react-router-dom';
import logo from '../img/logoTextoOnlyCars.png'

export function Navbar() {
	return (
		<nav className=" border-gray-200 dark:bg-gray-900 bg-yellow-50 border">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link to="../inicio" className="flex items-center">
					<img src={logo} className="h-8 mr-3" alt=" Logo" />
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
				</Link>
				<div className="flex md:order-2">
					<button
						type="button"
						className="text-white  bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-1 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
						Register
					</button>
					<button
						type="button"
						className="text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
						Login
					</button>
					<button
						data-collapse-toggle="navbar-cta"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-cta"
						aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14">
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
				</div>
				<div
					className=" items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
					id="navbar-cta">
					<ul className="  flex flex-col text-lg p-4 md:p-0 mt-4 border border-gray-100 rounded-lgX md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-yellow-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 font-bold ">
						<li>
							<Link
								to={"../inicio"}
								className="  block py-2 pl-3 pr-4 text-white bg-orange-600 rounded md:bg-transparent md:text-orange-600 md:p-0 md:dark:text-orange-500"
								aria-current="page">
								Home
							</Link>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								Partners
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								Services
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
