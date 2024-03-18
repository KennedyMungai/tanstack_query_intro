import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link, Tabs } from 'expo-router'
import React from 'react'
import { Pressable } from 'react-native'

import { useClientOnlyValue } from '@/components/useClientOnlyValue'
import { useColorScheme } from '@/components/useColorScheme'
import Colors from '@/constants/Colors'

export default function TabLayout() {
	const colorScheme = useColorScheme()

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				// Disable the static render of the header on web
				// to prevent a hydration error in React Navigation v6.
				headerShown: useClientOnlyValue(false, true)
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Movies',
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name='home' color={color} size={size} />
					),
					headerRight: () => (
						<Link href='/modal' asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name='info-circle'
										size={25}
										color={
											Colors[colorScheme ?? 'light'].text
										}
										style={{
											marginRight: 15,
											opacity: pressed ? 0.5 : 1
										}}
									/>
								)}
							</Pressable>
						</Link>
					)
				}}
			/>
			<Tabs.Screen
				name='two'
				options={{
					title: 'Watchlist',
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name='eye' color={color} size={size} />
					)
				}}
			/>
		</Tabs>
	)
}
