import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Button,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { InputContainer } from './components/InputContainer';
import { ListItem } from './components/ListItem';

export default function App() {
	const [allText, setAllText] = useState([]);
	const [isVisible, setIsVisible] = useState(false);

	const modalVisible = () => {
		setIsVisible(true);
	};

	const modalInVisible = () => {
		setIsVisible(false);
	};

	const buttonHandler = (enteredText) => {
		setAllText((currTexts) => [...currTexts, enteredText]);
		modalInVisible();
	};

	const deleteItem = (index) => {
		setAllText((currTexts) => {
			return currTexts.filter((item, idx) => idx !== index);
		});
	};

	const daysOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const dayName = daysOfWeek[new Date().getDay()];
	const getDate = new Date().getDate();
	const getMonth = new Date().toLocaleDateString('en-US', { month: 'long' });

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text style={styles.logo}>EZ List</Text>

				<Text style={styles.date}>
					{dayName}, {getDate} {getMonth}
				</Text>
			</View>

			<InputContainer
				visible={isVisible}
				onButtonPress={buttonHandler}
				onCancel={modalInVisible}
			/>

			<View style={styles.textContainer}>
				{allText.length === 0 ? (
					<Text style={styles.noItemsMessage}>No items found...</Text>
				) : (
					<FlatList
						data={allText}
						renderItem={(itemData) => (
							<ListItem
								text={itemData.item}
								index={itemData.index}
								onDelete={deleteItem}
							/>
						)}
						keyExtractor={(item, index) => index.toString()}
						alwaysBounceVertical={false}
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
					/>
				)}
			</View>

			<TouchableOpacity onPress={modalVisible} style={styles.customButton}>
				<Text style={styles.buttonText}>Add New Item</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 24,
		// borderWidth: 2,
		// borderColor: 'red',
		marginTop: 56,
	},
	textContainer: {
		flex: 5,
		overflow: 'scroll',
		gap: 10,
		marginHorizontal: 20,
	},
	logo: {
		fontSize: 28,
		fontWeight: '700',
		marginHorizontal: 20,
	},
	date: {
		fontSize: 18,
		fontWeight: '700',
		color: 'grey',
		marginHorizontal: 20,
	},
	customButton: {
		backgroundColor: '#264653',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		margin: 20,
	},
	buttonText: {
		color: 'white',
		padding: 8,
		fontSize: 20,
	},
	noItemsMessage: {
		fontSize: 18,
		color: 'gray',
		fontStyle: 'italic',
	},
});
