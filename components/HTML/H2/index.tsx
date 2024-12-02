import React from "react";
import { H2 as HTML_H2 } from "@expo/html-elements";
import GlobalStyles from "@/constants/global-styles";

type Props = {
	children: string | React.ReactNode;
};

export default function H2({ children, ...restProps }: Props) {
	return <HTML_H2 style={GlobalStyles.h2} {...restProps}>{children}</HTML_H2>;
}
