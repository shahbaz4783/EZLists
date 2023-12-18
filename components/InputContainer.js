import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Modal,
} from 'react-native';

export const InputContainer = ({ onButtonPress, visible }) => {
	const [enteredText, setEnteredText] = useState('');

	const inputHandler = (e) => {
		setEnteredText(e);
	};

	const buttonHandler = () => {
		onButtonPress(enteredText);
		setEnteredText('');
	};

	return (
		<Modal style={styles.modal} visible={visible} animationType='slide' >
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder='Enter Your Goals'
					onChangeText={inputHandler}
					value={enteredText}
				/>
				<TouchableOpacity onPress={buttonHandler} style={styles.customButton}>
					<Text style={styles.buttonText}>Add</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 24,
		flex: 2,
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
	},
	modal: {
		borderWidth: 2,
		borderColor: 'red',
		backgroundColor: 'red',
		width: 100,
	},
	input: {
		flex: 1,
		borderWidth: 2,
		borderColor: 'grey',
		padding: 12,
		fontSize: 18,
		borderRadius: 6,
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
});
