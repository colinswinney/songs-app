import { Link, Tabs } from "expo-router";
import H2 from "@/components/HTML/H2";
import Main from "@/components/HTML/Main";
import P from "@/components/HTML/P";

export default function NotFound() {
	return (
		<>
			<Tabs.Screen options={{ title: "Oops!" }} />
			<Main>
				<H2>This screen doesn't exist.</H2>
				<P>
					<Link href="/">Go to home screen!</Link>
				</P>
			</Main>
		</>
	);
}
