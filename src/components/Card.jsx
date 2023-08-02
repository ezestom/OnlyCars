import ferrari from "../img/ferrari.webp";

export function Card() {
	return (
		<>
			<a href="" className="ring-0 hover:ring-2 rounded-lg ring-yellow-400">
				<div className="flex flex-col items-center justify-center">
					<div className="bg-white shadow-lg rounded-lg  p-4">
						<div className="flex flex-col items-center justify-center">
							<img
								className="w-full h-full rounded-lg"
								src={ferrari}
								alt=""
							/>
							<div className="text-center mt-4">
								<p className="text-xl font-medium text-gray-800">
									Ferrari
								</p>
								<p className="text-sm font-medium text-gray-600">
									Testarrosa
								</p>
							</div>
							<div className="flex flex-row items-center justify-center mt-4">
								<div className="flex items-center justify-center px-2 py-1 bg-gray-600 rounded-md">
									<svg
										className="w-4 h-4 text-white fill-current"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 22a10 10 0 1110-10 10.011 10.011 0 01-10 10z" />
										<path d="M12 4a1 1 0 00-1 1v6a1 1 0 002 0V5a1 1 0 00-1-1zM12 14a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z" />
									</svg>
									<p className="text-xs text-white font-semibold ml-2">
										Verified
									</p>
								</div>
							</div>
							<div className="flex flex-row items-center justify-center mt-4">
								<div className="flex flex-col items-center justify-center">
									<p className="text-sm text-gray-600">
										Photos
									</p>
									<p className="text-lg font-semibold text-gray-800">
										34
									</p>
								</div>
								<div className="flex flex-col items-center justify-center ml-8">
									<p className="text-sm text-gray-600">
										Followers
									</p>
									<p className="text-lg font-semibold text-gray-800">
										455
									</p>
								</div>
								<div className="flex flex-col items-center justify-center ml-8">
									<p className="text-sm text-gray-600">
										Following
									</p>
									<p className="text-lg font-semibold text-gray-800">
										675
									</p>
								</div>
							</div>
							<div className="flex flex-row items-center justify-center mt-4">
								<button className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded">
									Buy
								</button>
								<button className="mx-4 px-4 py-2 bg-gray-300 text-gray-800 text-sm font-medium rounded">
									Message
								</button>
							</div>
						</div>
					</div>
				</div>
			</a>
		</>
	);
}
