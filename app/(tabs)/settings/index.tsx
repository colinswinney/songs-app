import { Link } from "expo-router";
import Main from "@/components/HTML/Main";

export default function SongsIndex() {

	return (
		<Main>
			<Link href="/settings/create-song">Create song</Link>
		</Main>
	);
}
