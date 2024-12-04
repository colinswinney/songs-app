import { Tabs } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLOR } from "@/constants/variables";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerTintColor: "white",
				headerShown: true,
				headerStyle: {
					backgroundColor: COLOR.primaryDark,
				},
				tabBarActiveTintColor: COLOR.white,
				tabBarInactiveTintColor: COLOR.whiteA70,
				tabBarStyle: {
					backgroundColor: COLOR.primary,
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					headerTitle: "Welcome to Songs App",
					title: "Home",
					tabBarIcon: ({ color, focused, size }) => (
						<Ionicons
							name={focused ? "home" : "home-outline"}
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="artists/index"
				options={{
					title: "Artists",
					tabBarIcon: ({ color, focused, size }) => (
						<Ionicons
							name={focused ? "people" : "people-outline"}
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="songs/index"
				options={{
					title: "Songs",
					tabBarIcon: ({ color, focused, size }) => (
						<Ionicons
							name={focused ? "musical-notes" : "musical-notes-outline"}
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="settings/index"
				options={{
					title: "Settings",
					tabBarIcon: ({ color, focused, size }) => (
						<Ionicons
							name={focused ? "cog" : "cog-outline"}
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="artists/[slug]"
				options={{
					href: null,
				}}
			/>
			<Tabs.Screen
				name="songs/[slug]"
				options={{
					href: null,
				}}
			/>
			<Tabs.Screen
				name="settings/create-song"
				options={{
					href: null,
					title: "Create song",
				}}
			/>
		</Tabs>
	);
}
