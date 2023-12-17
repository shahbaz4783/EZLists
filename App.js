import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput style={styles.input} placeholder='Enter Your Goals' />
				<Button title='Add' />
			</View>
      <View>
			<Text style={styles.textContent}>List of goals...</Text>
      </View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 24,
		borderWidth: 2,
		borderColor: 'blue',
	},
	inputContainer: {
		flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
	},
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'grey'
  },

	textContent: {
		borderWidth: 2,
		borderColor: 'blue',
		padding: 16,
		margin: 16,
	},
});
