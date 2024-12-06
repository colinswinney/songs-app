import { Fragment } from "react";
import { UL, LI } from "@expo/html-elements";
import { Link } from "expo-router";
import SONG_DATA from "@/data/data.json";
import Main from "@/components/HTML/Main";

type Song = {
	slug: string;
	title: string;
};

export default function SongsIndex() {
	const { songs } = SONG_DATA;

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
