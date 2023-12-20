import { StyleSheet, Text, View ,Image,ScrollView,Dimensions,TouchableOpacity,} from 'react-native';

export default function app()
{
    return (
        <View style={styles.container}>
            <View style={{width:'100%',display:'flex',position:'absolute',top:0,justifyContent:'center',alignItems:'center'}}><Image source={require('./image/bras_sac.png')} style={{width:200,height:500}}></Image></View>
            <View style={{width:'100%',height:'40%',borderRadius:25,display:'flex',justifyContent:'center',alignItems:'center',position:'absolute',bottom:0,backgroundColor:'white',flexDirection:'column'}}>
              <View style={{width:300,display:'flex',justifyContent:'center',alignItems:'center',marginBottom:25}}><Text style={{ width:'50%',fontWeight:700,fontSize:16}}>Order Groceries and Get delivered in fiew minutes</Text></View>
              <View  ><TouchableOpacity style={{width:200, borderWidth:2,borderColor:'green',color:'green',display:'flex',justifyContent:'center',alignItems:'center',padding:10,paddingLeft:25,paddingRight:25,borderRadius:5}}>Get Started</TouchableOpacity></View>
            </View>
        </View>
    );
}
const styles= StyleSheet.create({
    container:
    {
        width:'100vw',
        height:'100vh',
        backgroundColor:' #33ffff',
        borderRadius:15,
        position:'relative'
    },
}

)