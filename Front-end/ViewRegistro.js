import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,TextInput,TouchableHighlight,Switch,Alert} from 'react-native';
import MyButton from './my_button';
import createnewUser from './ViewPortada'

export default class Registro extends React.Component {
  state = {
    uuid:"",
    dni:"",
    apellidos:"",
    correo:"",
    nombre:"",
    tfno:""
};
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.logo}>

          <Image source={require('./assets/logo.png')} style={{width: 200, height: 40}}/>

        </View>
        <View style={styles.registro}>

          <Text style={styles.text} > Registro: </Text>

        </View>
        <View style={styles.resto}>

          <Image source={require('./assets/user.jpeg')} style={{width: 75, height: 75}}/>

          
          <TextInput placeholder="Nombre"
            type='outlined'
            onChangeText={this.onNombreChange.bind(this)}
            style={styles.input}
            />
          <TextInput placeholder="Apellidos"
            type='outlined'
            onChangeText={this.onApellidosChange.bind(this)}
             style={styles.input}
            />
          <TextInput placeholder="DNI"
            type='outlined'
            onChangeText={this.onDNIChange.bind(this)}
             style={styles.input}
            />
          <TextInput placeholder="Correo electrónico"
            type='outlined'
            onChangeText={this.onCorreoChange.bind(this)}
            style={styles.input}
            />
          <TextInput placeholder="Teléfono"
            type='outlined'
            onChangeText={this.onTfnoChange.bind(this)}
             style={styles.input}
            />
        </View>

        <View style={styles.touch}>

          <MyButton
          onPress={() => {
            this.createnewUser(null,false,this.state.nombre,this.state.apellidos,this.state.dni,this.state.correo,this.state.tfno);
            console.log(this.state.uuid);
            //this.createTodo(this.state.uuid,this.state.nombre,this.state.apellidos,this.state.dni,this.state.correo,this.state.tfno);
            //this._onPressButton;
          
           // this.props.navigation.navigate('ViewPortada')
          }
          }
          text={"Guardar"}/>
          <MyButton
          onPress={() => this.props.navigation.navigate('ViewPortada')}
          text={"Volver"}/>

        </View>
        <View style={styles.registro}>

          <Text style={styles.text} > GUARDA TU UUID: {this.state.uuid} </Text>

        </View>
      </View>
    );
  }
  _onPressButton(){
    Alert.alert(
    "Alert"
    ,
    "This is an alert with two buttons: 'OK' and 'Cancel'",
    [
    {text: 'OK', onPress: () => console.log('OK pressed')},
    {text: 'Cancel', onPress: () => console.log('Cancel pressed')}
    ],
    { cancelable: false }
    )
    }
  showAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () =>{ 
          this.props.navigation.navigate('ViewPortada')
          Alert.alert("Cancel Pressed")},
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );
  onMACChange(text){
    this.setState({uuid: text});
    }
    onCorreoChange(text){
      this.setState({correo: text});
      }
      onTfnoChange(text){
        this.setState({tfno: text});
        }
        onNombreChange(text){
          this.setState({nombre: text});
          }
          onApellidosChange(text){
            this.setState({apellidos: text});
            }
            onDNIChange(text){
              this.setState({dni: text});
              }
 
    /*createTodo = async (uuid,nombre,apellidos,dni,correo,telefono) => {
      try {
        const response = await fetch('http://localhost:8080/RADAR-COVID/rest/RCOVID/RCOVIDREGISTRO/'+uuid+'/'+nombre+'/'+apellidos+'/'+dni+'/'+correo+'/'+telefono+'/new', {
          method: 'POST', 
        });
    
    
      } catch(e){}
    }
     */

     createnewUser = async (id,sanidad,nombre,apellidos,dni,correo,telefono) => {
      try {
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
        });
       
        this.onMACChange(uuid);
        console.log(uuid);
        const response = await fetch('http://localhost:8080/RADAR-COVID/rest/RCOVID/'+uuid+'/'+id+'/'+sanidad+'/new', {
          method: 'POST', 
        });
        const response2 = await fetch('http://localhost:8080/RADAR-COVID/rest/RCOVID/RCOVIDREGISTRO/'+uuid+'/'+nombre+'/'+apellidos+'/'+dni+'/'+correo+'/'+telefono+'/new', {
          method: 'POST', 
        });
    

    
      } catch(e){


  }}
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
    
    alignItems: 'center',
  },
  registro: {
    flex: 1,
    marginRight: 200,
  },
  text: {
    color: '#52BE80',
    fontSize: 20,
    fontWeight: 'bold'
  },
  resto: {
    flex:5,
    
    backgroundColor: 'white',
    alignItems: 'center',
  },
  input: {
    flex:1,
    
    backgroundColor: 'white',
    borderColor: 'black',
  },
  touch: {
    flex:1,
    
    alignItems: 'center',
    flexDirection:'row',
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
    borderRadius: 20,
    padding: 10
    }  
});