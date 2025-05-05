"use client";

import { GlobalStyle } from "@/styles/global.styled";

const GlobalStyleProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<GlobalStyle />
			{children}
		</>
	);
};

export default GlobalStyleProvider;
