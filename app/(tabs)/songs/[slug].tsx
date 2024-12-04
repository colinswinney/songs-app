import { Fragment } from "react";
import { BR, Span } from "@expo/html-elements";
import { Tabs, useLocalSearchParams } from "expo-router";
import SONG_DATA from "@/data/songs.json";
import H2 from "@/components/HTML/H2";
import H3 from "@/components/HTML/H3";
import Main from "@/components/HTML/Main";
import P from "@/components/HTML/P";
import NotFound from "@/components/NotFound";

export default function SongsSlug() {
	const { songs } = SONG_DATA;
	const { slug } = useLocalSearchParams();

	const song = songs.find((song) => song.slug === slug);

	if (!song) {
		return <NotFound />;
	}

	return (
		<>
			<Tabs.Screen options={{ title: song.title }} />
			<Main>
				<H2>{song.title}</H2>
				{song.sections.map((section, index) => (
					<Fragment key={index}>
						<H3>
							{section.name}
						</H3>
						{section.lyrics.map((lyric, index) => (
							<P key={index}>
								{lyric}
							</P>
						))}
						<BR />
						{section.chords.map((line, index) => (
							<P key={index}>
								{line.map((chord, index) => (
									<Span key={index}>
										{chord.note}
									</Span>
								))}
							</P>
						))}
					</Fragment>
				))}
			</Main>
		</>
	);
}
