import {
	StyleSheet,
	Text,
	View,
	FlatList,
	SafeAreaView,
	TouchableOpacity,
	Image,
} from 'react-native';
import { useState } from 'react';
import { InputContainer } from './components/InputContainer';
import { ListItem } from './components/ListItem';
import { Greet } from './components/Greet';

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

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Image style={styles.image} source={require('./assets/list.png')} />
				<Greet />
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
		marginTop: 56,
	},
	header: {
		flexDirection: 'row',
		backgroundColor: 'whitesmoke',
		alignItems: 'center',
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
	},
	date: {
		fontSize: 18,
		fontWeight: '700',
		color: 'grey',
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
	image: {
		width: 150,
		height: 150,
		margin: 'auto',
	},
});
