import { useState } from "react";
import { View } from "react-native";
import Input from "@/components/HTML/Input";

export default function Line() {

	const [lyric, setLyric] = useState("");

	return (
		<View>
			<Input
				label="Lyric"
				onChangeText={(value: string) => setLyric(value)}
				value={lyric}
			/>
		</View>
	);
}
