export type Song = {
	slug: string;
	title: string;
	sections?: [
		{
			name: string;
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
};
