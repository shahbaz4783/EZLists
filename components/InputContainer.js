import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Modal,
	Image,
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
				<Image style={styles.image} source={require('../assets/list.png')} />
				<View style={styles.inputWrapper}>
					<TextInput
						style={styles.input}
						placeholder='Enter a List Item'
						placeholderTextColor='#264653'
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
		justifyContent: 'center',
		backgroundColor: '#2a9d8f',
	},
	inputWrapper: {
		color: 'white',
		backgroundColor: '#fefae0',
		borderWidth: 2,
		borderColor: 'grey',
		padding: 20,
		borderRadius: 6,
		margin: 20,
	},
	input: {
		fontSize: 20,
	},
	image: {
		width: 150,
		height: 150,
		margin: 'auto',
	},
	customButton: {
		backgroundColor: '#264653',
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: 'white',
		padding: 8,
		fontSize: 20,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 24,
	},
});
