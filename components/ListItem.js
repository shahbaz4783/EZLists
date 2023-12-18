import { StyleSheet, Text, Pressable } from 'react-native';

export const ListItem = ({ text, onDelete, index }) => {
	return (
		<Pressable
			style={styles.textContent}
			onPress={() => onDelete(index)}
			android_ripple={styles.pressedEffect}
		>
			<Text style={styles.text}>{text}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	textContent: {
		backgroundColor: 'blue',
		padding: 16,
		borderRadius: 6,
		fontSize: 18,
		margin: 10,
	},
	text: {
		color: 'white',
	},
	pressedEffect: {
		color: 'grey',
	},
});
