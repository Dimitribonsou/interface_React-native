
// import React from "react";
import { StyleSheet, Text, View ,Image,ScrollView,Dimensions,TouchableOpacity,} from 'react-native';

export default function App  ()
{
    return (
        <View style={styles.container}>
          <View style={{display:'flex',justifyContent:'space-between',flexDirection:'row',marginTop:15,marginBottom:15}}>
              <Image source={require('./image/back.png')} style={{width:50,height:50}}></Image>
              <Image source={require('./image/cadanar.png')} style={{width:50,height:50}}></Image>
          </View>
            <View style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Text style={{ fontSize: 18, fontWeight: 800 }}>My</Text>
                <Text style={{ fontSize: 18, fontWeight: 800 }}>Order</Text>
            </View>
            <View style={styles.order}>
                <View style={{ width: 50, height: 50, borderRadius: 15, backgroundColor: '#ffcccc',display:'flex',justifyContent:'center',alignItems:'center' }}>
                    <Image source={require('./image/orange ++.png')} style={{ width: 30, height: 30 }}></Image>
                </View>
                <Text style={{fontSize:16,fontWeight:500}}>1x</Text>
                <View style={{ display: 'flex', flexDirection: 'column',width:100,justifyContent:'flex-start' }}>
                    <Text style={{fontSize:16,fontWeight:500}}>Orange</Text>
                    <Text style={{fontSize:16,fontWeight:500}}>$10</Text>
                </View>
                    <View style={{ width: 50, height: 50, borderRadius: 15, backgroundColor: '#f1f1f1f1',display:'flex',justifyContent:'center',alignItems:'center' }}>
                        <Image source={require('./image/poubelle.png')} style={{ width: 30, height: 30 }}>
                        </Image>
                    </View>
            </View>
            <View style={styles.order}>
            <View style={{ width: 50, height: 50, borderRadius: 15, backgroundColor: '#ffcccc',display:'flex',justifyContent:'center',alignItems:'center' }}>
                    <Image source={require('./image/fraise.png')} style={{ width: 30, height: 30 }}></Image>
                </View>
                <Text style={{fontSize:16,fontWeight:500}}>1x</Text>
                <View style={{ display: 'flex', flexDirection: 'column',width:100,justifyContent:'flex-start' }}>
                    <Text style={{fontSize:16,fontWeight:500}}>Strawberry</Text>
                    <Text style={{fontSize:16,fontWeight:500}}>$12</Text>
                </View>
                    <View style={{ width: 50, height: 50, borderRadius: 15, backgroundColor: '#f1f1f1f1',display:'flex',justifyContent:'center',alignItems:'center' }}>
                        <Image source={require('./image/poubelle.png')} style={{ width: 30, height: 30 }}></Image>
                    </View>
            </View>
            <View style={styles.order}>
            <View style={{ width: 50, height: 50, borderRadius: 15, backgroundColor: '#ffcccc',display:'flex',justifyContent:'center',alignItems:'center' }}>
                    <Image source={require('./image/pomme.png')} style={{ width: 30, height: 30 }}></Image>
                </View>
                <Text style={{fontSize:16,fontWeight:500}}>1x</Text>
                <View style={{ display: 'flex', flexDirection: 'column',width:100,justifyContent:'flex-start' }}>
                    <Text style={{fontSize:16,fontWeight:500}}>Green Apple</Text>
                    <Text style={{fontSize:16,fontWeight:500}}>$13</Text>
                </View>
                    <View style={{ width: 50, height: 50, borderRadius: 15, backgroundColor: '#f1f1f1f1',display:'flex',justifyContent:'center',alignItems:'center' }}>
                        <Image source={require('./image/poubelle.png')} style={{ width: 30, height: 30 }}></Image>
                    </View>
            </View>
            <View style={styles.order}>
            <View style={{ width: 50, height: 50, borderRadius: 15, backgroundColor: '#ffcccc',display:'flex',justifyContent:'center',alignItems:'center' }}>
                    <Image source={require('./image/raisain.png')} style={{ width: 30, height: 30 }}></Image>
                </View>
                <Text style={{fontSize:16,fontWeight:500}}>1x</Text>
                <View style={{ display: 'flex', flexDirection: 'column',width:100,justifyContent:'flex-start' }}>
                    <Text style={{fontSize:16,fontWeight:500}}>Grape</Text>
                    <Text style={{fontSize:16,fontWeight:500}}>$15</Text>
                </View>
                    <View style={{ width: 50, height: 50, borderRadius: 15, backgroundColor: '#f1f1f1f1',display:'flex',justifyContent:'center',alignItems:'center' }}>
                      <Image source={require('./image/poubelle.png')} style={{ width: 30, height: 30 }}></Image>
                    </View>
            </View>
            <View style={styles.order}>
                <Text style={{fontSize:18,fontWeight:800,marginTop:25}}>Total Price</Text>
                <Text style={{fontSize:16,fontWeight:500,margin:25}}>$50</Text>
            </View>
            <TouchableOpacity style={{ width: 250, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 15, backgroundColor: '#f2a8a9', color: 'white',margin:'auto' }}>Payment</TouchableOpacity>
        </View>

    );
}

const styles=StyleSheet.create({
    container:
    {
        flex:1,
        width:'100vw',
        height:'100vh',
        backgroundColor:'white',
        padding:25,
        display:'flex',
        flexDirection:'column'
    },
    icon:
    {
      width:'100%',
      height:'auto',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    order:
    {
        width:'auto',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:25
    }
})