import { useState, useEffect } from "react";
import { supabaseAuth as supabase } from "@/supabaseClient";
import Auth from "@/components/Auth";
import Account from "@/components/Account";
import { View } from "react-native";
import { Session } from "@supabase/supabase-js";
import Main from "@/components/HTML/Main";

export default function Index() {
	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
		});

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, []);

	return (
		<Main>
			<View>
				{session && session.user ? (
					<Account key={session.user.id} session={session} />
				) : (
					<Auth />
				)}
			</View>
		</Main>
	);
}
