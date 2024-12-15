import { supabase } from "@/supabaseClient";
import { Artist } from "@/types";

export async function getArtists(): Promise<Artist[]> {
	const { data } = await supabase.from("artists").select();

	if (data !== null) {
		return data;
	}

	return [];
}
