/**
 * @todo Match enums in corresponding Supabase table column.
 */

export enum SongKey {
	A = "A",
	AFlat = "Ab",
	ASharp = "A#",
	BFlat = "Bb",
	B = "B",
	C = "C",
	CSharp = "C#",
	D = "D",
	DSharp = "D#",
	E = "E",
	F = "F",
	FSharp = "F#",
	G = "G",
	GSharp = "G#",
}

export enum SongSectionName {
	Blank = "",
	Verse = "verse",
	Chorus = "chorus",
	Bridge = "bridge",
	PreChorus = "pre-chorus",
	Outro = "outro",
	Intro = "intro",
	Solo = "solo",
	Misc = "misc",
}

export type Artist= {
	id: string;
	title: string;
	slug: string;
}

export type Song = {
	artist_id: string | null;
	original_key?: "" | SongKey;
	sections: {
		section_id: string;
		name: SongSectionName;
		lyrics: string[];
		chords: {
			note: string;
		}[][];
	}[];
	slug: string;
	title: string;
};
