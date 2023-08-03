import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Partner() {
	return (
		<Link className=" border border-gray-200 hover:bg-gray-100 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
			<div className=" flex items-center text-xl text-blue-600 justify-center ">
				<FaLinkedin />
				<h5 className="text-xl font-bold  text-gray-900 dark:text-white">
					Digital Partner
				</h5>
			</div>
			<div className="">
				<div role="list" className=" ">
					<article className="">
						<div className="">
							<div className=" grid place-content-center w-full">
								<p className=" flex justify-center content-center text-l  text-gray-900 dark:text-white">
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
	);
}
