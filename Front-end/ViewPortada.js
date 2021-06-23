

import React from 'react';
import { StyleSheet, Text, View, Image,TextInput,TouchableHighlight} from 'react-native';
import MyButton from './my_button';



export default class Portada extends React.Component {
  state = {
    usuario:"",
    contraseña:""
};
  render(){

    return (
      <View style={styles.container}>
        <View style={styles.logo}>

          <Image source={require('./assets/logo.png')} style={{width: 200, height: 40}}/>

        </View>
        <View style={styles.inicio}>

          <Text style={styles.text} > Inicio de sesión </Text>

          <View style={styles.campos}>

            <TextInput placeholder="DNI"
            type='outlined'
            onChangeText={this.onUsuarioChange.bind(this)}
            value={this.state.usuario}
            />
            <TextInput placeholder="UUID"
            type='outlined'
            onChangeText={this.onContraseñaChange.bind(this)}
            value={this.state.contraseña}
            
            ></TextInput>

          </View>
        </View>

        <View style={styles.touch}>
          <MyButton
          onPress={() =>{ 
            this.comprobar(this.state.usuario,this.state.contraseña);
           
            }}
          text={"Acceder"} />
          <Text style={{fontSize:20, marginTop: 40}}>¿No tienes cuenta?</Text>
          <MyButton
          onPress={() => {
            this.props.navigation.navigate('ViewRegistro');
          }}
          text={"Regístrate"}/>
        </View>
      </View>
    );

  }

  comprobar=async(usuario,contraseña) =>{
    
      const response = await fetch('http://localhost:8080/RADAR-COVID/rest/RCOVID/RCOVIDREGISTRO',{method: 'GET'});
      const res = await response.json();
      console.log(res);
      for(let i =0; i< res.length ; i++ ){
       if((usuario.trim()===res[i].dni && contraseña.trim()===res[i].uuid) || (usuario.trim().toLowerCase()==="sanidad" && contraseña.trim().toLowerCase() ==="sanidad")){
        this.props.navigation.navigate('ViewHome',{usuario : this.state.usuario, contraseña: this.state.contraseña})}
        this.onUsuarioChange("");
        this.onContraseñaChange("")
       }
      
    
  }
  onUsuarioChange(text){
    this.setState({usuario: text});
    }
  onContraseñaChange(text){
      this.setState({contraseña: text});
     }
    
  async componentDidMount() { 
   
    const response = await fetch('http://localhost:8080/RADAR-COVID/rest/RCOVID');
    const res = await response.json();
    console.log(res);

    
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
    
    alignItems: 'center',
  },
  inicio:{
    flex: 3,
    justifyContent: 'center',
  },
  campos:{
    marginTop: 10,
    justifyContent: 'space-between'
  },
  touch: {
    flex:3,
    
    alignItems: 'center',
    flexDirection:'column',
    justifyContent: 'space-around'
  },
  button: {
    flex:1,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#52BE80',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 20,
    padding:10
    }, 
  text:{
    fontSize:30,
    fontWeight: 'bold' 
  }
});