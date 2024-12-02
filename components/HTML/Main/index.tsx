import { ReactNode } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main as HTML_Main } from "@expo/html-elements";
import GlobalStyles from "@/constants/global-styles";

type MainProps = {
	children: ReactNode;
};

export default function Main({ children, ...restProps }: MainProps) {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={GlobalStyles.safeAreaView}>
				<ScrollView>
					<HTML_Main style={GlobalStyles.main} {...restProps}>
						{children}
					</HTML_Main>
				</ScrollView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
