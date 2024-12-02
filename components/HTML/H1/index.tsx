import React from "react";
import { H1 as HTML_H1 } from "@expo/html-elements";
import GlobalStyles from "@/constants/global-styles";

type Props = {
	children: string | React.ReactNode;
};

export default function H1({ children, ...restProps }: Props) {
	return <HTML_H1 style={GlobalStyles.h1} {...restProps}>{children}</HTML_H1>;
}
