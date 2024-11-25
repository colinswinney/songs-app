import { ReactNode } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main as HTML_Main } from "@expo/html-elements";

type MainProps = {
	children: ReactNode;
};

export default function Main({ children }: MainProps) {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<ScrollView>
					<HTML_Main style={{ padding: 16 }}>{children}</HTML_Main>
				</ScrollView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
