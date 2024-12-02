import React from "react";
import { P as HTML_P } from "@expo/html-elements";
import GlobalStyles from "@/constants/global-styles";

type Props = {
	children: string | React.ReactNode;
};

export default function P({ children, ...restProps }: Props) {
	return <HTML_P style={GlobalStyles.p} {...restProps}>{children}</HTML_P>;
}
