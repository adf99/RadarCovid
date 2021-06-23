import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default class MyButton extends React.Component {
	render() {
		return (
			<TouchableHighlight onPress={this.props.onPress}>
				<Text style={styles.button}>{this.props.text}</Text>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
 	button: {
	    flex:1,
	    marginTop: 10,
	    marginRight: 10,
	    borderWidth: 1,
	    borderColor: 'black',
	    backgroundColor: '#52BE80',
	    fontSize: 20,
	    textAlign: 'center',
	    padding:10,
	    borderRadius: 20}
});