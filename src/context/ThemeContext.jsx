// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext();

// export function ThemeProvider(children) {
// 	const [isDarkTheme, setIsDarkTheme] = useState(false);

// 	const toggleTheme = () => {
// 		setIsDarkTheme(!isDarkTheme);
// 	};

// 	return (
// 		<ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
// 			{children}
// 		</ThemeContext.Provider>
// 	);
// }
// export function useTheme() {
//    return useContext(ThemeContext);
// }
