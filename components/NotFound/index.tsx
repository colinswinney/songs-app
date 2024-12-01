import { Link, Tabs } from "expo-router";
import { Text } from "react-native";
import { H2, P } from "@expo/html-elements";

import Main from "../../components/Main";

export default function NotFound() {
	return (
		<>
			<Tabs.Screen options={{ title: "Oops!" }} />
			<Main>
				<H2>This screen doesn't exist.</H2>
				<P>
					<Link href="/">
						<Text>Go to home screen!</Text>
					</Link>
				</P>
			</Main>
		</>
	);
}
