import { View, Text, StyleSheet } from 'react-native';
import uuid from "react-native-uuid";
import { Song, SongSectionName } from '@/types';
import Toolbar from '@/components/Song/Toolbar';
import Line from '@/components/Song/Line';
import Select from '@/components/HTML/Select';
import React from "react";

export default function SongSection({
	allSections,
	id,
	setAllSections,
}: {
	allSections: Song["sections"];
	id : string;
	setAllSections: React.Dispatch<React.SetStateAction<Song["sections"]>>;
}) {

	const section = allSections.find((s) => s.section_id === id);

	if (!section) {
		return null;
	}

	const handleFindIndex = (id: string) => {
		const index = allSections.findIndex(
			(s) => s.section_id === id
		);
		return index;
	};

	const handleMoveBefore = () => {
		const index = handleFindIndex(section.section_id);
		const movedSection = allSections[index];
		const newSections = [...allSections];
		newSections.splice(index, 1);
		newSections.splice(index - 1, 0, movedSection);
		setAllSections(newSections);
	};

	const handleMoveAfter = () => {
		const index = handleFindIndex(section.section_id);
		const movedSection = allSections[index];
		const newSections = [...allSections];
		newSections.splice(index, 1);
		newSections.splice(index + 1, 0, movedSection);
		setAllSections(newSections);
	};

	const handleDelete = () => {
		const index = handleFindIndex(section.section_id);
		const newSections = [...allSections];
		newSections.splice(index, 1);
		setAllSections(newSections);
	};

	const handleSetSectionName = (name: SongSectionName) => {
		const index = handleFindIndex(section.section_id);
		const newSections = [...allSections];
		newSections[index].name = name;
		setAllSections(newSections);
	};

	const handleOnCopy = () => {
		const index = handleFindIndex(section.section_id);
		const newSections = [...allSections];
		newSections.splice(index + 1, 0, {
			...section,
			section_id: uuid.v4(),
		});
		setAllSections(newSections);
	};

	return (
		<View style={styles.container}>
			<Select
				selectedValue={section.name}
				onValueChange={(value) => handleSetSectionName(value as SongSectionName)}
				style={{
					height: 40,
					marginBlockEnd: 20,
				}}
				options={Object.values(SongSectionName).map((value) => ({
					label: value,
					value: value,
				}))}
			/>

			<Line />

			<Text>{section.section_id}</Text>

			<Toolbar
				onMoveBefore={handleMoveBefore}
				onMoveAfter={handleMoveAfter}
				onDelete={handleDelete}
				onCopy={handleOnCopy}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: "#ccc",
		marginBlock: 24,
		paddingBlockStart: 24,
		position: "relative",
	},
});
