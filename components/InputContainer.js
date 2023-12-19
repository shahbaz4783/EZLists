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
				<View style={styles.containerTop}>
					<Text style={styles.text}>New List</Text>
					<TouchableOpacity onPress={onCancel}>
						<Image
							style={styles.cross}
							source={require('../assets/cross.png')}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.inputWrapper}>
					<TextInput
						multiline={true}
						numberOfLines={6}
						style={styles.input}
						placeholder='Create a List'
						placeholderTextColor='#264653'
						onChangeText={inputHandler}
						value={enteredText}
						textAlignVertical='top'
					/>
				</View>

				<TouchableOpacity onPress={buttonHandler} style={styles.customButton}>
					<Text style={styles.buttonText}>Create</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 2,
		justifyContent: 'space-between',
		backgroundColor: 'whitesmoke',
		paddingTop: 50,
	},
	inputWrapper: {
		color: 'white',
		borderWidth: 2,
		borderColor: 'grey',
		padding: 20,
		borderRadius: 6,
		margin: 20,
	},
	containerTop: {
		margin: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	input: {
		fontSize: 20,
	},
	customButton: {
		backgroundColor: '#264653',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		marginHorizontal: 20,
		marginBottom: 40,
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
	cross: {
		width: 40,
		height: 40,
	},
	text: {
		fontSize: 36,
		fontWeight: '700',
	},
});
