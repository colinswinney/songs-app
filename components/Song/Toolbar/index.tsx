import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Icon } from '@rneui/themed'
import Ionicons from "@expo/vector-icons/Ionicons";


export default function Toolbar({ onMoveBefore, onMoveAfter, onDelete, onCopy } : {
	onMoveBefore: () => void;
	onMoveAfter: () => void;
	onDelete: () => void;
	onCopy: () => void;
}) {
	const [displayToolbar, setDisplayToolbar] = useState(false);

	return (
		<View style={styles.container}>
			<Button
				style={styles.button}
				color="transparent"
				onPress={() => setDisplayToolbar(!displayToolbar)}
			>
				<Ionicons
					name={displayToolbar ? "close" : "ellipsis-vertical"}
					size={16}
				/>
			</Button>
			<View
				style={{
					...styles.toolbar,
					display: displayToolbar ? "flex" : "none",
				}}
			>
				<Button
					style={{ ...styles.button, marginInlineEnd: 16 }}
					color="transparent"
					onPress={onDelete}
				>
					<Ionicons name="trash" size={16} color="white" />
				</Button>
				<Button style={styles.button} color="transparent" onPress={onCopy}>
					<Ionicons name="copy" size={16} color="white" />
				</Button>
				<Button
					style={styles.button}
					color="transparent"
					onPress={onMoveBefore}
				>
					<Ionicons name="chevron-up" size={16} color="white" />
				</Button>
				<Button style={styles.button} color="transparent" onPress={onMoveAfter}>
					<Ionicons name="chevron-down" size={16} color="white" />
				</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		right: 0,
	},
	button: {
		alignItems: 'center',
		borderColor: "black",
		borderWidth: 1,
		display: 'flex',
		justifyContent: 'center',
		height: 24,
		padding: 0,
		width: 24,
	},
	toolbar: {
		backgroundColor: 'black',
		flexDirection: 'row',
		position: 'absolute',
		right: 0,
		top: '-100%',
	}
});
