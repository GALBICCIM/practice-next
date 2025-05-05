import Header from "@/components/Header";
import GlobalStyleProvider from "./GlobalStyleProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<GlobalStyleProvider>
					<Header />
					{children}
				</GlobalStyleProvider>
			</body>
		</html>
	);
}
