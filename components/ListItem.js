import { StyleSheet, Text } from 'react-native';

export const ListItem = ({ text }) => {
  return (
		<Text style={styles.textContent}>
			{text}
		</Text>
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