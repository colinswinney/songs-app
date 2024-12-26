/**
 * @todo Match enums in corresponding Supabase table column.
 */

export enum SongKey {
	AFlat = "Ab",
	A = "A",
	ASharp = "A#",
	BFlat = "Bb",
	B = "B",
	C = "C",
	CSharp = "C#",
	DFlat = "Db",
	D = "D",
	DSharp = "D#",
	EFlat = "Eb",
	E = "E",
	F = "F",
	FSharp = "F#",
	GFlat = "Gb",
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
	artist_ids: string[] | null;
	original_key?: "" | SongKey;
	sections: {
		section_id: string;
		name: SongSectionName;
		lines: {
			lyrics: string;
			chords: {
				note: string;
			}[];
		}[];
	}[];
	slug: string;
	title: string;
};
