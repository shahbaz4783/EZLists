import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

export const Greet = () => {
	const daysOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const dayName = daysOfWeek[new Date().getDay()];
	const getDate = new Date().getDate();
	const getMonth = new Date().toLocaleDateString('en-US', { month: 'long' });

	const [greeting, setGreeting] = useState('');

	useEffect(() => {
		const getGreeting = () => {
			const currentHour = new Date().getHours();

			if (currentHour >= 5 && currentHour < 12) {
				setGreeting('Good morning');
			} else if (currentHour >= 12 && currentHour < 17) {
				setGreeting('Good afternoon');
			} else if (currentHour >= 17 && currentHour < 20) {
				setGreeting('Good evening');
			} else {
				setGreeting('Good Night');
			}
		};

		getGreeting();
	}, []);

	return (
		<View style={styles.headerContainer}>
			<Text style={styles.logo}>EZ List</Text>
			<Text style={styles.greet}>{greeting}</Text>
			<Text style={styles.date}>
				{dayName}, {getDate} {getMonth}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	logo: {
        color: '#264653',
		fontSize: 28,
		fontWeight: '700',
	},
	date: {
		fontSize: 18,
		fontWeight: '700',
		color: 'grey',
        fontStyle: 'italic',
	},
	greet: {
		fontSize: 22,
		fontWeight: '500',
	},
});
