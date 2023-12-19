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
		borderColor: '#264653',
		borderWidth: 1,
		padding: 16,
		borderRadius: 6,
		fontSize: 18,
		marginVertical: 8,
	},
	text: {
		color: '#264653',
		fontSize: 18,
	},
	pressedEffect: {
		color: 'grey',
	},
});
