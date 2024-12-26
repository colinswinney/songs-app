import { Input as REUNI_Input, InputProps } from "@rneui/themed";

export default function Input(props: InputProps) {
	return (
		<REUNI_Input
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
