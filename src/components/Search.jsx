import { DateTime } from "./DateTime";
import logo from '../img/logoOnlyCars.png'

export function Search() {
	return (
		<section className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-10 bg-gray-100 rounded-lg border-2 ">
			<form className="w-1/2 flex flex-col justify-center flex-wrap">
				<label
					htmlFor="default-search"
					className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
					Search
				</label>
				<div className="relative">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							className="w-4 h-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						type="search"
						id="default-search"
						className="min-w-[350px] block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 relative"
						placeholder="BMW, Audi, Mercedes Benz, Ferrari, Porche..."
						required
					/>
					<button
						type="submit"
						className=" text-white absolute right-1 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
						Search Your OnlyCar
					</button>
				</div>
			</form>
			<div className="border bg-yellow-50 border-yellow-500 rounded-full p-5  ">
				<img src={logo} alt="logo" className="w-20" />
			</div>
			<DateTime />
		</section>
	);
}
