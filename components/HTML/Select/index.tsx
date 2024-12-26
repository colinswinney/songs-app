import {
	Picker as Picker_Picker,
	PickerItemProps as Picker_PickerItemProps,
	PickerProps as Picker_PickerProps,
} from "@react-native-picker/picker";

type Picker = {
	options: Picker_PickerItemProps[];
} & Picker_PickerProps;


export default function Select({ options, ...props }: Picker) {
	return (
		<Picker_Picker {...props}>
			{options.map((option: Picker_PickerItemProps)=> {
				return <Picker_Picker.Item value={option.value} label={option.label} {...props} />;
			})}
		</Picker_Picker>
	)
}
