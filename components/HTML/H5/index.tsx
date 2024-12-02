import React from "react";
import { H5 as HTML_H5 } from "@expo/html-elements";
import GlobalStyles from "@/constants/global-styles";

type Props = {
	children: string | React.ReactNode;
};

export default function H5({ children, ...restProps }: Props) {
	return <HTML_H5 style={GlobalStyles.h5} {...restProps}>{children}</HTML_H5>;
}
