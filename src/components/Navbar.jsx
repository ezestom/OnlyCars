import { Link } from "react-router-dom";
import { FiHome, FiUsers, FiSliders, FiMail } from "react-icons/fi";
import logo from "../img/logoTextoOnlyCars.png";
import Swal from "sweetalert2";

export function Navbar() {
	function login() {
		const { value: formValues } = Swal.fire({
			title: "Login",
			html:
				'<input id="swal-input1" class="swal2-input" placeholder="Username">' +
				'<input id="swal-input2" class="swal2-input" placeholder="Password">',

			focusConfirm: true,
			preConfirm: () => {
				return [
					document.getElementById("swal-input1").value,
					document.getElementById("swal-input2").value,
				];
			},
		});

		if (formValues) {
			Swal.fire(JSON.stringify(formValues));
		}
	}

	function Register() {
		const { value: formValues } = Swal.fire({
			title: "Register",
			html:
				'<label for="swal-input1" class="sr-only">Username</label>' +
				'<input id="swal-input1" class="swal2-input" placeholder="Username">' +
				'<label for="swal-input2" class="sr-only">Password</label>' +
				'<input id="swal-input2" class="swal2-input" placeholder="Password">' +
				'<label for="swal-input3" class="sr-only">Email</label>' +
				'<input id="swal-input3" class="swal2-input" placeholder="Email">' +
				'<label for="swal-input4" class="sr-only">Phone</label>' +
				'<input id="swal-input4" class="swal2-input" placeholder="Phone">' +
				'<label for="swal-input5" class="sr-only">Address</label>' +
				'<input id="swal-input5" class="swal2-input" placeholder="Address">' +
				'<label for="swal-input6" class="sr-only">City</label>' +
				'<input id="swal-input6" class="swal2-input" placeholder="City">' +
				'<label for="swal-input7" class="sr-only">State</label>' +
				'<input id="swal-input7" class="swal2-input" placeholder="State">' +
				'<label for="swal-input8" class="sr-only">Zip</label>' +
				'<input id="swal-input8" class="swal2-input" placeholder="Zip">' +
				'<label for="swal-input9" class="sr-only">Country</label>' +
				'<input id="swal-input9" class="swal2-input" placeholder="Country">',

			focusConfirm: true,
			preConfirm: () => {
				return [
					document.getElementById("swal-input1").value,
					document.getElementById("swal-input2").value,
				];
			},
		});

		if (formValues) {
			Swal.fire(JSON.stringify(formValues));
		}
	}

	return (
		<nav className="border-gray-200 dark:bg-gray-900 border fixed top-0 left-0 w-screen bg-white z-10">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link to="../" className="flex items-center">
					<img src={logo} className="h-8 mr-3" alt=" Logo" />
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
				</Link>
				<div className="flex md:order-2">
					<button
						onClick={() => {
							Register();
						}}
						type="button"
						className="text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-1 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
						Register
					</button>
					<button
						onClick={() => {
							login();
						}}
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
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
				</div>
				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-cta">
					<ul className="flex flex-col text-lg p-4 md:p-0 mt-4 border border-gray-100 rounded-lgX md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 font-bold">
						<li>
							<Link
								to={"../"}
								className="flex items-center block py-2 pl-3 pr-4 text-white bg-orange-600 rounded md:bg-transparent md:text-orange-600 md:p-0 md:dark:text-orange-500"
								aria-current="page">
								<FiHome className="mr-1" />
								Home
							</Link>
						</li>
						<li>
							<Link
								to={"../category"}
								className="flex items-center block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								<FiSliders className="mr-1" />
								Category
							</Link>
						</li>
						<li>
							<Link
								to={"./partners"}
								className="flex items-center block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								<FiUsers className="mr-1" />
								Partners
							</Link>
						</li>

						<li>
							<Link
								to={"./recomendation"}
								className="flex items-center block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								<FiMail className="mr-1" />
								Recomendation
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
