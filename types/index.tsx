export type Artist= {
	title: string;
	slug: string;
}

export type Song = {
	artist_id?: string;
	original_key?: string;
	sections?: [
		{
			name: "verse" | "chorus" | "bridge" | "pre-chorus" | "outro" | "intro" | "solo";
			lyrics: string[];
			chords: [
				[
					{
						note: string;
					}
				]
			];
		}
	];
	slug: string;
	title: string;
};
