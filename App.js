import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ScrollView,
	FlatList,
} from 'react-native';

export default function App() {
	const [enteredText, setEnteredText] = useState('');
	const [allText, setAllText] = useState([]);

	const inputHandler = (e) => {
		setEnteredText(e);
	};

	const buttonHandler = () => {
		setAllText((currTexts) => [...currTexts, enteredText]);
		setEnteredText('');
	};


	return (
		<View style={styles.container}>
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
			<View style={styles.textContainer}>
				<FlatList
					data={allText}
					renderItem={(itemData) => {
						return (
							<Text style={styles.textContent}>
								{itemData.index + 1} {itemData.item}
							</Text>
						);
					}}
					keyExtractor={(item, index) => {
						return index.toString();
					}}
					alwaysBounceVertical={false}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 24,
		gap: 24,
		// borderWidth: 2,
		// borderColor: 'blue',
	},

	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 24,
		flex: 2,
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
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
		margin: 10,
	},
});
