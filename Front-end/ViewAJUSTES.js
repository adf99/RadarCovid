
import React from 'react';
import { StyleSheet, Text, View, Image,TextInput,TouchableHighlight,Switch} from 'react-native';
import MyButton from './my_button';

export default class Ajustes extends React.Component {
  render(){
    return (
    
      <View style={styles.container}>
        <View style={styles.logo}>

          <Image source={require('./assets/logo.png')} style={{width: 200, height: 40}}/>

        </View>
        <View style={styles.ajustes}>

          <Text style={styles.tit}>AJUSTES</Text>
          <Image source={require('./assets/ajustes.png')} style={{width: 60, height: 60, marginLeft: 10}}/>

        </View>
        <View style={styles.resto}> 

          <View style={styles.campos}>

            <Text style={styles.text}>Bluetooth </Text>
            <Switch
            style={{alignSelf:'flex-start', margin: 10}} />

          </View>
          <View style={styles.campos}>

            <Text style={styles.text}>Idioma:</Text>
            <TextInput placeholder="Español"
              type='outlined'
              value={""} style={{marginLeft: 20}}
            ></TextInput>

          </View>
          <View style={styles.campos}>
          
            <Text style={styles.text}>Versión de la App:</Text>
            <TextInput placeholder="1.0"
              type='outlined'
              value={""} style={{marginLeft: 20}}
              ></TextInput>

          </View>
       </View>
          
                  
          <View style={styles.touch}>

          <MyButton
          onPress={() => this.props.navigation.navigate('ViewHome')}
          text={"Guardar"}/>
          <MyButton
          onPress={() => this.props.navigation.navigate('ViewHome')}
           text={"Volver"}/>

        </View>
          
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    flex: 1,
    alignItems: 'stretch'
  },
  ajustes: {
    flex: 1,
    flexDirection:'row',
  },
  resto: {
    flex:4,
    justifyContent:'flex-start',
    justifyContent:'space-around'
  },
  campos: {
    flexDirection:'row'
  },
   text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
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
    borderRadius: 20
    },
  tit:{
    fontSize:50,
    color:'black',
    backgroundColor: '#52BE80',
    borderRadius: 20,
    padding: 5
    },
  touch: {
    flex:1,
    
    alignItems: 'center',
    flexDirection:'row',
  }
    
});