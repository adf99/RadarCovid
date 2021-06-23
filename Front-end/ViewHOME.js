import React from 'react';
import { StyleSheet, Text, View, Image,TextInput,TouchableHighlight} from 'react-native';
import MyButton from './my_button';

export default class Home extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    id:"",
    usuario:"",
    contraseña:""
};
  }
componentDidMount() {
  let usuario = this.props.route.params.usuario;
  let contraseña = this.props.route.params.contraseña;
  this.setState({usuario: usuario, contraseña:contraseña});
  
  }
  render(){
    return (

      <View style={styles.container}>
        <View style={styles.logo}>

          <Image source={require('./assets/logo.png')} style={{width: 200, height: 40}}/>

        </View>
        <View style={styles.home}>

          <Text style={styles.text} > INICIO </Text>

        </View>
        <View style={styles.campos}>

          <Image source={require('./assets/user.jpeg')} style={{width: 75, height: 75}}/>


          <Text>Hola {this.state.usuario}</Text>
           
        </View>
        <View style={styles.botones}>
          
            <MyButton
            onPress={() => this.props.navigation.navigate('ViewContagio')}
            text={"Notificar positivo"}/>
            <MyButton
            onPress={() => this.props.navigation.navigate('ViewDatos',{usuario : this.state.usuario, contraseña: this.state.contraseña})}
            
            text={"Bajar Datos"}/>
            <MyButton
            onPress={() => this.props.navigation.navigate('ViewAjustes')}
            text={"Ajustes"}/>
            {this.state.usuario.trim().toLowerCase()==='sanidad' && this.state.contraseña.trim().toLowerCase()==='sanidad'&&   <TextInput placeholder="Id a verificar"
          onChangeText={this.onTextInputChange.bind(this)}></TextInput>}
            
         
            {this.state.usuario.trim().toLowerCase()==='sanidad' && this.state.contraseña.trim().toLowerCase()==='sanidad'  && <MyButton
            
          onPress={() => this.getUser()}
          text={"Verificar"}/>
          }

            <MyButton
            onPress={() => {
              this.props.navigation.navigate('ViewPortada',{usuario : "", contraseña: ""})
            }}
            //  this.props.navigation.navigate('ViewPortada')}}
            text={"Salir"}/>
          
        </View>
      </View>
    );
  }

onTextInputChange(text){
  this.setState({id : text});
  }
updateUser = async (mac,id,sanidad) => {
    try {
      const response = await fetch('http://localhost:8080/RADAR-COVID/rest/RCOVID/'+mac+'/'+id+'/'+sanidad, {
        method: 'POST', 
      });
  
  
    } catch(e){}
  
}
getUser = async () => {
  const response = await fetch('http://localhost:8080/RADAR-COVID/rest/RCOVID',{method: 'GET'});
  const res = await response.json();
  console.log(res);
  for(let i =0; i< res.length ; i++ ){
   if(this.state.id===res[i].id){
     res[i].sanidad=true;
     this.updateUser(res[i].uuid,res[i].id,res[i].sanidad);
   }
  }

    
  
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
  campos:{
    flex:1,
    
    alignItems: 'center',
    flexDirection:'row',
  },
  home: {
    flex: 1,
    marginRight: 200,
  },
  botones:{
    flex:5,
    justifyContent: 'space-around'
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#52BE80',
    fontSize: 25,
    textAlign: 'center',
    padding: 10
  },
  text:{
    fontSize:30,
    color:'#52BE80',
    fontWeight: 'bold' 
  }
    
});
