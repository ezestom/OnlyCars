import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Partner() {
	return (
		<section className="grid place-center">
			<Link className="w-full  max-w-md border border-gray-200 hover:bg-gray-100 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
				<div className="flex items-center text-xl text-blue-600 justify-center ">
					<FaLinkedin />
					<h5 className="text-xl font-bold  text-gray-900 dark:text-white">
						Digital Partner
					</h5>
				</div>
				<div className="flow-root">
					<div
						role="list"
						className="divide-y divide-gray-200 dark:divide-gray-700 ">
						<article className="py-3 sm:py-4">
							<div className="flex items-center  justify-start space-x-4">
								<div className="">
									{/* <img className="w-8 h-8 rounded-full" src="#" alt="Neil image"> */}
								</div>
								<div className=" grid place-content-center w-full">
									<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
										Benito Juares
									</p>
									<p className="text-sm flex content-center justify-center text-blue-600  dark:text-gray-400">
										/linkedin.com/feed/
									</p>
								</div>
							</div>
						</article>
					</div>
				</div>
			</Link>
		</section>
	);
}
