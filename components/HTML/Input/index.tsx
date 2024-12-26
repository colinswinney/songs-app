import { Input as Input_REUNI } from "@rneui/themed";

export default function Input(props: any) {
	return (
		<Input_REUNI
			containerStyle={{
				paddingInline: 0,
			}}
			inputContainerStyle={{
				borderWidth: 1,
				paddingInline: 0,
			}}
			style={{
				padding: 8,
			}}
			{...props}
		/>
	);
}
