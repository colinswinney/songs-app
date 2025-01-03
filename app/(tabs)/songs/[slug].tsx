import { Fragment, useEffect, useState } from "react";
import { BR, Span } from "@expo/html-elements";
import { Tabs, useLocalSearchParams } from "expo-router";
import { supabase } from "@/supabaseClient";
import H2 from "@/components/HTML/H2";
import H3 from "@/components/HTML/H3";
import Main from "@/components/HTML/Main";
import P from "@/components/HTML/P";
import NotFound from "@/components/NotFound";
import { Song } from "@/types";

export default function SongsSlug() {
	const { slug } = useLocalSearchParams();

	const [song, setSong] = useState<Song>();
	const [isLoading, setIsLoading] = useState(true);

	/**
	 * @todo I can only get cleanup to run via slug change, but
	 *       this causes a FOUC when first landing on the screen.
	 *       Must be a better way to handle this.
	 */
	useEffect(() => {
		setSongViaSupabase();

		return () => {
			setSong(undefined);
			setIsLoading(true);
		};
	}, [slug]);

	async function setSongViaSupabase() {
		const { data, error } = await supabase.from("songs").select().eq('slug', slug);

		if (data !== null) {
			setSong(data[0]);
			setIsLoading(false);
		}

		if (error) {
			setIsLoading(false);
		}
	}

	if (slug !== song?.slug) {
		return;
	}

	if (isLoading) {
		return (
			<Fragment>
				<Tabs.Screen options={{ title: "" }} />
				<Main>
					<P>Loading...</P>
				</Main>
			</Fragment>
		);
	}

	if (!song) {
		return <NotFound />;
	}

	return (
		<Fragment>
			<Tabs.Screen options={{ title: song.title }} />
			<Main>
				<H2>{song.title}</H2>
				{song.sections && song.sections.map((section, index) => (
					<Fragment key={index}>
						<H3>
							{section.name}
						</H3>
						{section.lines.map((line, index) => (
							<P key={index}>
								{line.lyrics}
							</P>
						))}
						<BR />
						{section.lines.map((line, index) => (
							<P key={index}>
								{line.chords.map((chord, index) => (
									<Span key={index}>
										{chord.note}
									</Span>
								))}
							</P>
						))}
					</Fragment>
				))}
			</Main>
		</Fragment>
	);
}
