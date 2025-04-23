"use client";

import React from "react";
import Link from "next/link";
import { Wrapper } from "@/styles/header.styled";
import { ENDPOINTS } from "@/constants/endpoints";

const Header: React.FC = () => (
	<Wrapper>
		{ENDPOINTS.name.map((item, index) => (
			<Link href={ENDPOINTS.endpoint[index]} key={index}>
				{item}
			</Link>
		))}
	</Wrapper>
);

export default Header;
