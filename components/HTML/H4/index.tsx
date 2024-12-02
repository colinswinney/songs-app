import React from "react";
import { H4 as HTML_H4 } from "@expo/html-elements";
import GlobalStyles from "@/constants/global-styles";

type Props = {
	children: string | React.ReactNode;
};

export default function H4({ children, ...restProps }: Props) {
	return <HTML_H4 style={GlobalStyles.h4} {...restProps}>{children}</HTML_H4>;
}
