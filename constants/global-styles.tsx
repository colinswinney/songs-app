import { StyleSheet } from "react-native";
import { COLOR, SIZE } from "@/constants/variables";

const sharedHeadingStyles = {
	fontWeight: 900 as 900,
	marginBlockEnd: 16,
	marginBlockStart: 0,
	marginInline: 0,
};

export default StyleSheet.create({
	h1: {
		...sharedHeadingStyles,
		fontSize: 48,
	},
	h2: {
		...sharedHeadingStyles,
		fontSize: 40,
	},
	h3: {
		...sharedHeadingStyles,
		fontSize: 33,
	},
	h4: {
		...sharedHeadingStyles,
		fontSize: 28,
	},
	h5: {
		...sharedHeadingStyles,
		fontSize: 23,
	},
	h6: {
		...sharedHeadingStyles,
		fontSize: 19,
	},
	main: {
		marginInline: "auto",
		maxWidth: 1280,
		padding: SIZE[16],
		width: '100%'
	},
	p: {
		fontSize: 19,
		fontWeight: "300",
		marginBlockEnd: 16,
		marginBlockStart: 0,
	},
	safeAreaView: {
		backgroundColor: COLOR.white,
		flex: 1,
	},
});
