import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
	const [enteredText, setEnteredText] = useState('');
	const [allText, setAllText] = useState([]);

	const inputHandler = (e) => {
		setEnteredText(e);
	};

	const buttonHandler = () => {
		setAllText((currTexts) => {
			return [...currTexts, enteredText];
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder='Enter Your Goals'
					onChangeText={inputHandler}
				/>
				<Button onPress={buttonHandler} title='Add' />
			</View>
			<View>
				{allText.map((text, index) => (
					<Text key={index}>{text}</Text>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 24,
		borderWidth: 2,
		borderColor: 'blue',
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 24,
	},
	input: {
		flex: 1,
		borderWidth: 2,
		borderColor: 'grey',
		padding: 12,
		fontSize: 18,
	},

	textContent: {
		borderWidth: 2,
		borderColor: 'blue',
		padding: 16,
		margin: 16,
	},
});
