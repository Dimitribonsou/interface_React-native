import { StyleSheet, Text, View ,Image,ScrollView,Dimensions,TouchableOpacity,} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

export default function app()
{
    const [count,setcount]=useState(0);

    return (
       
        <View style={styles.container}>
             <ScrollView>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
               <View><Ionicons name="chevron-back-outline" size={30} color="black" /></View>
                <View style={{width:100,height:50,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Ionicons name="download-outline"size={30} color="black" />
                    <Ionicons name="information-circle-outline"size={30} color="black" />
                </View>
            </View>
            <View style={{width:'100%',height:'auto',borderRadius:20,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#ccffff',marginBottom:25,marginTop:15,padding:25}}>
                 <Image source={require('./image/scolli.png')} style={{width:300,height:250}}></Image>
            </View>
            <View  ><TouchableOpacity style={{ width:100,borderWidth:2,borderColor:'green',color:'green',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:5}}>Vegetables</TouchableOpacity></View>
            <View style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{fontSize:18,fontWeight:800}}>Broccoli</Text>
                <View style={{display:'flex',flexDirection:'row',gap:10}}>
                  <TouchableOpacity onPress={()=>{if(count>0) {setcount(count-1)}}}><View style={{borderWidth:2,borderColor:'green',borderRadius:10,padding:5,display:'flex',justifyContent:'center',alignItems:'center'}}><Ionicons  name="remove-outline"size={20} color="green" /></View> </TouchableOpacity> 
                    <Text style={{fontSize:20,fontWeight:800}}>{count}</Text>
                  <TouchableOpacity onPress={()=>setcount(count+1)}><View style={{ borderWidth:2,borderColor:'green',borderRadius:10,padding:5,display:'flex',justifyContent:'center',alignItems:'center'}}><Ionicons name="add-outline" size={20} color="green" /><ion-icon ></ion-icon></View> </TouchableOpacity> 
                </View>
            </View>
            <View><Text>approx 100 gm</Text></View>
            <View style={styles.note}>
                <View style={styles.left}>
                    <View style={{ width: 60, height: 60, borderRadius: 15, display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:'gray' }}>
                        <Image source={require('./image/carote.png')} style={{ width: 50, height: 50 }}></Image>
                    </View>
                    <View style={{display:'flex',flexDirection:'column'}}>
                        <Text style={{fontSize:18,fontWeight:800}}>Agrifarm Inc</Text>
                        <Text>F5RJ+FJF,Charirtakol</Text>
                    </View>
                </View>
                <View style={styles.left}>
                          <Ionicons name="star"size={30} color="#ffcc00" />
                          <Text>4.9</Text>
                          <Text>(89)</Text>
                </View>
            </View>
             <View><Text style={{fontSize:18,fontWeight:800,marginBottom:10}}>Description</Text></View>
             <View style={{ display:'flex', flexDirection:'row',justifyContent:'flex-start',marginBottom:20}}>
                <Text>Broccoli is an edible green plant in the cabbage family whosw large flowering head,stalk and small associated leaves are  <Text style={{color:'green'}}>  Read more</Text></Text>
             </View>
             <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{width:50,height:50,borderRadius:5, display:'flex',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#333333'}}>
                <View style={{width:35,height:35,position:'relative'}}>
                   <Ionicons name="briefcase-outline" size={30} color="black" />
                   <View style={styles.notif}><Text style={{color:'white',display:'flex',margin:'auto'}}>3</Text></View>
                </View>
              </View>
             <View  ><TouchableOpacity style={{width:200,height:50, borderWidth:2,borderColor:'green',color:'green',display:'flex',justifyContent:'center',alignItems:'center',padding:10,paddingLeft:25,paddingRight:25,borderRadius:5}}>Add to cart $1.50</TouchableOpacity></View>
             </View>
            </ScrollView>

        </View>
    );
}
const styles= StyleSheet.create({
    container:
    {
        flex:1,
        width:'100vw',
        height:'100vh',
        backgroundColor:'white',
        borderRadius:15,
        padding:20,
        position:'relative'
    },
    note:
    {
        width:'100%',
        height:80,
        borderTopWidth:2,
        borderTopColor:'black',
        borderBottomWidth:2,
        borderBottomColor:'black',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:10,
        marginTop:25,
        marginBottom:25
    },
    left:
    {
        display:'flex',
        flexDirection:'row',
        gap:10,
        justifyContent:'center',
        alignItems:'center'
        
    },
    notif:
    {
        width:20,
        height:20,
        borderRadius:'50%',
        backgroundColor:'green',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        position:'absolute',
        right:0,
        bottom:0
    }
}

)