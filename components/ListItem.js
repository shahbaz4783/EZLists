import { StyleSheet, Text, Pressable } from 'react-native';

export const ListItem = ({ text, onDelete, index }) => {
  return (
		<Pressable onPress={() => onDelete(index)}>
			<Text style={styles.textContent}>{text}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	textContent: {
		backgroundColor: 'blue',
		color: 'white',
		padding: 16,
		borderRadius: 6,
		fontSize: 18,
		margin: 10,
	},
});