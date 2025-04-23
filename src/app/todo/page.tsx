import React from "react";
import Link from "next/link";

const Write: React.FC = () => {
	return (
		<div>
			<h1>TODO 리스트입니다.</h1>
			<Link href="/">처음으로 돌아가기</Link>
		</div>
	);
};

export default Write;
