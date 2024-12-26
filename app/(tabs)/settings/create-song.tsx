import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import uuid from "react-native-uuid";
import { Button } from "@rneui/themed";
import Main from "@/components/HTML/Main";
import Input from "@/components/HTML/Input";
import Select from "@/components/HTML/Select";
import Section from "@/components/Song/Section";
import { Artist, Song, SongKey, SongSectionName } from "@/types";
import { slugify } from "@/helpers/slugify";
import alert from "@/helpers/alert";
import { supabase } from "@/supabaseClient";
import { getArtists } from "@/helpers/supabase";

/**
 * Title of the song
 *
 * Original Key
 * -- Should be a dropdown for selecting the note name.
 * -- Should be an enum and also needs to to be set that way in the database.
 *
 * User click add section
 * Section should have
 * - Name
 * -- Should be a dropdown from a list of enum options.
 * -- Or be able to choose a previously created section.
 *
 * Lyrics
 * -- Should be a textarea input.
 *
 * Chords
 * -- Should have a dropdown for selecting the note name.
 * -- Should have a dropdown for selecting the modifier.
 * -- Should be able to delete a chord.
 * -- Should be able to add a chord.
 */

export default function SongsIndex() {

	const [sections, setSections] = useState<Song["sections"]>([]);
	const [originalKey, setOriginalKey] = useState<SongKey>(SongKey.C);
	const [title, setTitle] = useState('');
	const [newSong, setNewSong] = useState<Song | null>(null);
	const [artists, setArtists] = useState<Artist[]>([]);
	const [artist, setArtist] = useState<Artist | null>(null);
	const [addNewArtist, setAddNewArtist] = useState<string | null>(null);
	const [displayAddNewArtist, setDisplayAddNewArtist] = useState<boolean>(true);

	async function fetchArtists() {
		const artistsData: Artist[] = await getArtists();
		artistsData.sort((a, b) => b.title.localeCompare(a.title));
		setArtists(artistsData);
	}

	useEffect(() => {
		fetchArtists();
	}, []);

	useEffect(() => {
		setNewSong({
			artist_ids: artist?.id ? [artist.id] : null,
			original_key: originalKey,
			slug: slugify(title),
			title: title,
			sections: sections,
		});
	}, [artist, originalKey, title, sections]);

	useEffect(() => {

		const ueArtist: Artist | null =
			artists.find((artist) => artist.title === addNewArtist) || null;

		if (ueArtist) {
			setArtist(ueArtist);
			setAddNewArtist(null);
			setDisplayAddNewArtist(false);
		}

	}, [artists, addNewArtist]);

	async function addArtistToSupabase(newArtist: Artist) {
		if (!addNewArtist) {
			alert("Error", "Artist is required");
			return;
		}

		const { error } = await supabase.from("artists").insert(newArtist);

		if (error) {
			alert('Error', error.message);
		}

		if (!error) {
			alert("Success", "Artist created successfully!");
			fetchArtists();
		}
	}

	async function addSongToSupabase(newSong: Song) {
		if (!title) {
			alert("Error", "Title is required");
			return;
		}

		const { error } = await supabase.from("songs").insert(newSong);

		if (error) {
			alert('Error', error.message);
		}

		if (!error) {
			alert("Success", "Song created successfully!");
		}
	}

	return (
		<Main>
			<View
				style={{
					display: "flex",
					flexDirection: "column",
					flexWrap: "wrap",
					gap: "5%",
				}}
			>
				<View style={{ flexBasis: "47.5%", flexGrow: 1, flexShrink: 0 }}>
					<Input
						label="Title"
						onChangeText={(value: string) => setTitle(value)}
						value={title}
					/>

					<Text>Song Key</Text>
					<Select
						selectedValue={originalKey}
						onValueChange={(value) => setOriginalKey(value as SongKey)}
						style={{
							height: 60,
							marginBlockEnd: 20,
						}}
						options={Object.values(SongKey).map((value) => ({
							label: value,
							value: value,
						}))}
					/>
				</View>
				<View style={{ flexBasis: "47.5%", flexGrow: 1, flexShrink: 0 }}>
					<Text>Artist</Text>
					<Select
						selectedValue={artist?.slug}
						onValueChange={(value) => {
							if (value === "add-new") {
								setDisplayAddNewArtist(true);
								setArtist(null);
								return;
							}
							const selectedArtist =
								artists.find((artist) => artist.slug === value) || null;
							setDisplayAddNewArtist(false);
							setArtist(selectedArtist);
						}}
						style={{
							height: 40,
							marginBlockEnd: 20,
						}}
						options={[
							{ label: "Add New", value: "add-new" },
							...artists.map((artist) => ({
								label: artist.title,
								value: artist.slug,
							})),
						]}
					/>
					{displayAddNewArtist && (
						<View
							style={{
								alignItems: "center",
								display: "flex",
								flexDirection: "row",
							}}
						>
							<Input
								label="Add New Artist"
								onChangeText={(value: string) => setAddNewArtist(value)}
								value={addNewArtist || ""}
							/>
							<Button
								disabled={!addNewArtist}
								title="+"
								onPress={() => {
									addNewArtist &&
										addArtistToSupabase({
											title: addNewArtist || "",
											slug: slugify(addNewArtist || ""),
										} as Artist);
								}}
							/>
						</View>
					)}
				</View>
			</View>
			{sections.map((section) => (
				<Section
					key={section.section_id}
					id={section.section_id}
					allSections={sections}
					setAllSections={setSections}
				/>
			))}
			<Button
				title="Add Section"
				onPress={() => {
					const newSection: Song["sections"][0] = {
						section_id: uuid.v4() as string,
						name: SongSectionName.Verse,
						lines: [
							{
								lyrics: "",
								chords: [{ note: "C" }],
							},
						],
					};
					setSections([...sections, newSection]);
				}}
			/>
			<View
				style={{
					alignItems: "center",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					marginTop: 50,
				}}
			>
				<Button
					title="Submit Song"
					onPress={() => newSong && addSongToSupabase(newSong)}
					containerStyle={{ flexGrow: 1, flexShrink: 0, flexBasis: "50%" }}
				/>
				<Button
					title="Reset"
					onPress={() => {
						setSections([]);
						setTitle("");
						setOriginalKey(SongKey.C);
					}}
					buttonStyle={{ borderColor: "red" }}
					titleStyle={{ color: "red" }}
					containerStyle={{ flexGrow: 1, flexShrink: 0, flexBasis: "50%" }}
					type="outline"
				/>
			</View>
		</Main>
	);
}
