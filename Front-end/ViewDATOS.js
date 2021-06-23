import React from 'react';
import { StyleSheet, Text, View, Image,TextInput,TouchableHighlight, FlatList} from 'react-native';
import MyButton from './my_button';




export default class Home extends React.Component {

constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      //idS:[],
      MAC:[], 
      UUIDS:[],
      NOMBRES:[],
      APELLIDOS:[],
      DNIS:[],
      CORREOS:[],
      TFNOS:[],
      usuario:"",
      contraseña:""
    };
    }
    componentDidMount() {
      let usuario = this.props.route.params.usuario;
      let contraseña = this.props.route.params.contraseña;
      this.setState({usuario: usuario, contraseña:contraseña});
      
      }
                                            
    async handleClick() {
      var datos = [];
      const response = await fetch('http://localhost:8080/RADAR-COVID/rest/RCOVID');
      const res = await response.json();
      for(let i = 0 ; i < res.length ; i++){ 
        if(res[i]['sanidad']==true){
          var registro = [];
          registro.push(res[i]['uuid']);
         // registro.push(res[i]['id']);
          datos.push(registro);
        }
      }            
      //var idS = [];
      var MAC = [];
      for(let i=0; i<datos.length; i++){
       // idS.push(<Text style={{fontSize:20}} key={i}>{datos[i][1]}</Text>)
        MAC.push(<Text style={{fontSize:20}} key={i}>{datos[i][0]}</Text>)
      }
     // this.setState({idS: idS});
      this.setState({MAC: MAC});
      }
      async handleClickSanidad() {
        var datosSanidad = [];
        const response = await fetch('http://localhost:8080/RADAR-COVID/rest/RCOVID/RCOVIDREGISTRO');
        const res = await response.json();
        for(let i = 0 ; i < res.length ; i++){ 
            var registro = [];
            registro.push(res[i]['uuid']);
            registro.push(res[i]['nombre']);
            registro.push(res[i]['apellidos']);
            registro.push(res[i]['dni']);
            registro.push(res[i]['correo']);
            registro.push(res[i]['telefono']);
            datosSanidad.push(registro);
        }         
        var UUIDS = [];
        var NOMBRES = [];
        var APELLIDOS = [];
        var DNIS = [];
        var CORREOS = [];
        var TFNOS = [];
        for(let i=0; i<datosSanidad.length; i++){
          UUIDS.push(<Text style={{fontSize:20}} key={i}>{datosSanidad[i][0]}</Text>)
          NOMBRES.push(<Text style={{fontSize:20}} key={i}>{datosSanidad[i][1]}</Text>)
          APELLIDOS.push(<Text style={{fontSize:20}} key={i}>{datosSanidad[i][2]}</Text>)
          DNIS.push(<Text style={{fontSize:20}} key={i}>{datosSanidad[i][3]}</Text>)
          CORREOS.push(<Text style={{fontSize:20}} key={i}>{datosSanidad[i][4]}</Text>)
          TFNOS.push(<Text style={{fontSize:20}} key={i}>{datosSanidad[i][5]}</Text>)
        }
        this.setState({UUIDS: UUIDS});
        this.setState({NOMBRES: NOMBRES});
        this.setState({APELLIDOS: APELLIDOS});
        this.setState({DNIS: DNIS});
        this.setState({CORREOS: CORREOS});
        this.setState({TFNOS: TFNOS});
        }


  render(){
    if(this.state.usuario.trim().toLowerCase() === "sanidad" && this.state.contraseña.trim().toLowerCase()==="sanidad"){
    return (
      
      <View style={styles.container}>
        <View style={styles.logo}>

          <Image source={require('./assets/logo.png')} style={{width: 200, height: 40}}/>

        </View>
        <View style={styles.campos}>

          <Text style={styles.text} > DATOS CONTAGIOS </Text>
          
          <MyButton
            onPress={() =>
             this.handleClickSanidad()
            }
            text={"Descargar"}/>
        </View>

        <View style={styles.table}>

         

          <View style={styles.home2}>
            <Text style={styles.tit}>UUID</Text>
            <View style={{marginTop: 10}}>{this.state.UUIDS}</View>
          </View>
          
          <View style={styles.home2}>
            <Text style={styles.tit}>NOMBRE</Text>
            <View style={{marginTop: 10}}>{this.state.NOMBRES}</View>
          </View>
          
          <View style={styles.home2}>
            <Text style={styles.tit}>APELLIDOS</Text>
            <View style={{marginTop: 10}}>{this.state.APELLIDOS}</View>
          </View>
          
          <View style={styles.home2}>
            <Text style={styles.tit}>DNI</Text>
            <View style={{marginTop: 10}}>{this.state.DNIS}</View>
          </View>
          
          <View style={styles.home2}>
            <Text style={styles.tit}>TÉLEFONO</Text>
            <View style={{marginTop: 10}}>{this.state.TFNOS}</View>
          </View>
          
          <View style={styles.home2}>
            <Text style={styles.tit}>CORREO</Text>
            <View style={{marginTop: 10}}>{this.state.CORREOS}</View>
          </View>

        </View>
        
        <View style={styles.botones}>
          
            <MyButton
            onPress={() => this.props.navigation.navigate('ViewHome')}
            text={"Volver"}/>

        </View>
      </View>

    );
          }
          else{
            return (
      
              <View style={styles.container}>
                <View style={styles.logo}>
        
                  <Image source={require('./assets/logo.png')} style={{width: 200, height: 40}}/>
        
                </View>
                <View style={styles.campos}>
        
                  <Text style={styles.text} > DATOS CONTAGIOS </Text>
                  
                  <MyButton
                    onPress={() =>
                     this.handleClick()
                    }
                    text={"Descargar"}/>
                </View>
        
                <View style={styles.table}>
        
                 
        
                  <View style={styles.home2}>
                    <Text style={styles.tit}>UUID</Text>
                    <View style={{marginTop: 10}}>{this.state.MAC}</View>
                  </View>
                  
       
                </View>
                
                <View style={styles.botones}>
                  
                    <MyButton
                    onPress={() => this.props.navigation.navigate('ViewHome')}
                    text={"Volver"}/>
        
                </View>
              </View>
        
            );

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
    alignItems: 'top',
    alignItems: 'center',
  },
  table:{
    flex: 5,
    flexDirection:'row',
    marginTop: 40,
    justifyContent: 'space-around',
    
    padding: 5
  },
  tit:{
    fontSize:20,
    color:'black',
    backgroundColor: '#52BE80',
    padding: 5
    },
  campos:{
    flex:1,
    
    alignItems: 'center',
    flexDirection:'row',
  },
  home1: {
    flexDirection:'column',
    padding: 5,
  },
  home2: {

    flexDirection:'column',
    padding: 5,
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
  },
});