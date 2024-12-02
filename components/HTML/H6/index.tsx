import React from "react";
import { H6 as HTML_H6 } from "@expo/html-elements";
import GlobalStyles from "@/constants/global-styles";

type Props = {
	children: string | React.ReactNode;
};

export default function H6({ children, ...restProps }: Props) {
	return <HTML_H6 style={GlobalStyles.h6} {...restProps}>{children}</HTML_H6>;
}
