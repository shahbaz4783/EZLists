import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import { InputContainer } from './components/InputContainer';
import { ListItem } from './components/ListItem';

export default function App() {
	const [allText, setAllText] = useState([]);

	const buttonHandler = (enteredText) => {
		setAllText((currTexts) => [...currTexts, enteredText]);
	};

	const deleteItem = (index) => {
		setAllText((currTexts) => {
			return currTexts.filter((item, idx) => idx !== index);
		});
	};

	return (
		<View style={styles.container}>
			<InputContainer onButtonPress={buttonHandler} />
			<View style={styles.textContainer}>
				<FlatList
					data={allText}
					renderItem={(itemData) => {
						return <ListItem text={itemData.item} index={itemData.index} onDelete={deleteItem} />;
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
	},
	textContainer: {
		flex: 5,
		overflow: 'scroll',
		gap: 10,
	},
});
