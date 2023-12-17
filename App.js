import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';

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
				<TouchableOpacity onPress={buttonHandler} style={styles.customButton}>
					<Text style={styles.buttonText}>Add</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.textContainer}>
				{allText.map((text, index) => (
					<Text style={styles.textContent} key={index}>
						{index + 1} {text}
					</Text>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 24,
		// borderWidth: 2,
		// borderColor: 'blue',
	},

	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 24,
		flex: 2,
	},
	input: {
		flex: 1,
		borderWidth: 2,
		borderColor: 'grey',
		padding: 12,
		fontSize: 18,
	},
	customButton: {
		backgroundColor: 'green',
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: 'white',
		padding: 8,
	},

	textContainer: {
		flex: 5,
		overflow: 'scroll',
		gap: 10,
	},
	textContent: {
		backgroundColor: 'blue',
		color: 'white',
		padding: 16,
		borderRadius: 6,
		fontSize: 18,
	},
});
