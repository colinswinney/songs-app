import { Alert, Platform } from "react-native";

type AlertOption = {
	style?: "default" | "cancel" | "destructive";
	onPress: () => void;
};

const alertPolyfill = (title: string, description: string, options?: AlertOption[]) => {
	const result = window.confirm(
		[title, description].filter(Boolean).join("\n")
	);

	if (result) {
		const confirmOption = options && options.find(({ style }) => style !== "cancel");
		confirmOption && confirmOption.onPress();
	} else {
		const cancelOption =
			options &&  options.find(({ style }) => style === "cancel");
		cancelOption && cancelOption.onPress();
	}
};

const alert = Platform.OS === "web" ? alertPolyfill : Alert.alert;

export default alert;
