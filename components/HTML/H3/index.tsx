import React from "react";
import { H3 as HTML_H3 } from "@expo/html-elements";
import GlobalStyles from "@/constants/global-styles";

type Props = {
	children: string | React.ReactNode;
};

export default function H3({ children, ...restProps }: Props) {
	return <HTML_H3 style={GlobalStyles.h3} {...restProps}>{children}</HTML_H3>;
}
