import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Modal,
} from 'react-native';

export const InputContainer = ({ onButtonPress, visible, onCancel }) => {
	const [enteredText, setEnteredText] = useState('');

	const inputHandler = (e) => {
		setEnteredText(e);
	};

	const buttonHandler = () => {
		onButtonPress(enteredText);
		setEnteredText('');
	};

	return (
		<Modal visible={visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<View>
					<TextInput
						style={styles.input}
						placeholder='Enter Your Goals'
						onChangeText={inputHandler}
						value={enteredText}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={buttonHandler} style={styles.customButton}>
						<Text style={styles.buttonText}>Add</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={onCancel} style={styles.customButton}>
						<Text style={styles.buttonText}>Cancel</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		gap: 24,
		flex: 2,
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
		borderWidth: 2,
		borderColor: 'red',
		justifyContent: 'center',
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
		backgroundColor: 'navy',
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: 'white',
		padding: 8,
		fontSize: 20,
	},
	buttonContainer: {
		borderWidth: 2,
		borderColor: 'black',
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 24,
	},
});
