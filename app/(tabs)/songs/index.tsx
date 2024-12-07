import { Fragment, useEffect, useState } from "react";
import { UL, LI } from "@expo/html-elements";
import { Link } from "expo-router";
import { supabase } from "@/supabaseClient";
import Main from "@/components/HTML/Main";
import { COLOR } from "@/constants/variables";
import { Song } from "@/types";

export default function SongsIndex() {

	const [songs, setSongs] = useState<Song[]>([]);

	useEffect(() => {
		setSongsViaSupabase();
	}, []);

	async function setSongsViaSupabase() {

		const { data } = await supabase.from("songs").select();

		if (data !== null) {
			setSongs(data);
		}
	}

	if (!songs) {
		return null;
	}

	const renderItem = (song: Song) => {
		return (
			<LI>
				<Link
					key={song.slug}
					href={{
						pathname: "/songs/[slug]",
						params: {
							slug: song.slug,
						},
					}}
					style={{ fontSize: 24, color: COLOR.primary }}
				>
					{song.title}
				</Link>
			</LI>
		);
	};

	return (
		<Main>
			<UL>
				{songs.map((song) => (
					<Fragment key={song.slug}>{renderItem(song)}</Fragment>
				))}
			</UL>
		</Main>
	);
}
