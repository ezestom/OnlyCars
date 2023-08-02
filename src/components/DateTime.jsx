export function DateTime() {
	return (
		<>
			<div className=" bg-gray-700 rounded-lg">
				<form action="" className="flex flex-col items-center justify-center p-3">
					{" "}

					<label
						htmlFor="date"
						className="text-sm font-semibold mb-2 text-white p-1">
						Make your reservation
					</label>{" "}

					<input
						type="date"
						className="border border-gray-300 rounded p-1 focus:outline-none focus:ring-2 focus:ring-orange-600"

					/>
				</form>
			</div>
		</>
	);
}
