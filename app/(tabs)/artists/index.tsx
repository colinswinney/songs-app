import { Fragment, useEffect, useState } from "react";
import { UL, LI } from "@expo/html-elements";
import { Link } from "expo-router";
import Main from "@/components/HTML/Main";
import { COLOR } from "@/constants/variables";
import { getArtists } from "@/helpers/supabase";
import { Artist } from "@/types";

export default function ArtistsIndex() {
	const [artists, setArtists] = useState<Artist[]>([]);

	useEffect(() => {
		async function fetchArtists() {
			const artistsData: Artist[] = await getArtists();
			setArtists(artistsData);
		}
		fetchArtists();
	}, []);

	if (!artists) {
		return null;
	}

	const renderItem = (artist: Artist) => {
		return (
			<LI>
				<Link
					key={artist.slug}
					href={{
						pathname: "/artists/[slug]",
						params: {
							slug: artist.slug,
						},
					}}
					style={{ fontSize: 24, color: COLOR.primary }}
				>
					{artist.title}
				</Link>
			</LI>
		);
	};

	return (
		<Main>
			<UL>
				{artists.map((artist) => (
					<Fragment key={artist.slug}>{renderItem(artist)}</Fragment>
				))}
			</UL>
		</Main>
	);
}
