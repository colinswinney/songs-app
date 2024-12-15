import { Fragment, useEffect, useState } from "react";
import { Tabs, useLocalSearchParams } from "expo-router";

import { supabase } from "@/supabaseClient";
import H2 from "@/components/HTML/H2";
import Main from "@/components/HTML/Main";
import P from "@/components/HTML/P";
import NotFound from "@/components/NotFound";
import { Artist } from "@/types";

export default function ArtistsSlug() {
	const { slug } = useLocalSearchParams();

	const [artist, setArtist] = useState<Artist>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getAndSetArtist();

		return () => {
			setArtist(undefined);
			setIsLoading(true);
		};
	}, [slug]);

	async function getAndSetArtist() {
		const { data, error } = await supabase
			.from("artists")
			.select()
			.eq("slug", slug);

		if (data !== null) {
			setArtist(data[0]);
			setIsLoading(false);
		}

		if (error) {
			setIsLoading(false);
		}
	}

	if (isLoading) {
		return (
			<Main>
				<P>Loading...</P>
			</Main>
		);
	}

	if (!artist) {
		return <NotFound />;
	}

	return (
		<Fragment>
			<Tabs.Screen options={{ title: artist.title }} />
			<Main>
				<H2>{artist.title}</H2>
			</Main>
		</Fragment>
	);
}
