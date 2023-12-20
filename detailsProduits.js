
import { StyleSheet, Text, View } from 'react-native';

export default function App  ({navigation}) {
    return(
      <View style={styles.container}>
        
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%',height:90,padding:15 ,marginTop:-300,alignContent:'center',alignItems:'center'}}>
             <TouchableOpacity  onPress={() => { navigation.navigate("Acceuil") }}>
               <View style={{backgroundColor:'#f2a8a9',padding:15,height:50,borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
                      <Image source={require('./image/back.png')} style={{ width: 20, height: 20, flex: 0.5 }}></Image>
                </View> 
             </TouchableOpacity>
                <Text style={{fontSize:18}}>Product Detail</Text>
                <Image source={require('./image/partager.png')} style={{ width: 20, height: 20 }}></Image>
            </View>
            <Text style={{ fontSize: 18 ,textAlign:'left'}}>Juicy Orange</Text>
            <Text style={{ color: '#f2a8a9' ,textAlign:'left'}}>Sweet and Juicy</Text>
            <View style={styles.desc}>
                <Text style={{ width: 'auto', display: 'flex' }}>labore? Sint ipsum accusamus consectetur obcaecati veritatis debitis tempora voluptas veniam odit, inventore doloribus dolore quisquam, vero sapiente totam!
                </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' ,gap:25,display:'flex',marginLeft:'auto',marginRight:'auto',marginTop:15,justifyContent:'center',alignItems:'center'}}>
              <View style={{width:50,height:50 ,borderColor:'#f2a8a9',borderWidth:2,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:15}}><Image source={require('./image/coeur.png')} style={{width:30, height:30}}></Image></View>  
                <TouchableOpacity style={{ width: 250, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 15, backgroundColor: '#f2a8a9', color: 'white' }}>Find Nearest Store</TouchableOpacity>
            </View>
            <View style={styles.stat}>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', top: -50, marginLeft: 'auto', marginRight: 'auto' }}>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', marginLeft: 'auto', marginRight: 'auto' }}>
              <Image source={require('./image/orange ++.png')} style={{ width: 200, height: 80 }} ></Image>
              <View style={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column',marginTop:15 }}>
                 <Text style={{ marginTop: 10,fontSize:15,fontWeight:500 }}>Nutrition Facts</Text>
                <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: '90vw' }}>
                  <View><Text> Fiber 3g</Text></View>
                  <View><Text>7%</Text></View>
                </View>
                <View style={styles.bar}>
                  <View style={styles.progresbar1}></View>
                </View>
                {/* <Image source={require('./image/statistique.png') }style={{ width:350,height: 80,marginTop:35}}></Image> */}
              </View>
          <View style={{width:'100%',height:'auto',display:'flex',flexDirection:'column',marginTop:15}}>
          <View style={{display:'flex',justifyContent:'space-between',flexDirection:'row',width:'90vw'}}>
             <View><Text> Good sugar 12g</Text></View>
             <View><Text>5%</Text></View>
          </View>
             <View style={styles.bar}>
                    <View style={styles.progresbar2}></View>
             </View>
           {/* <Image source={require('./image/statistique.png') }style={{ width:350,height: 80,marginTop:35}}></Image> */}
          </View>
            </View>
          </View>
{/*           
          <View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
             <View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:"100%"}}>
              <Text style={{width:300,flex:1}}>Fiber  3g</Text>
              <View style={{width:'100%', height:5,borderRadius:15,backgroundColor:'gray'}}>
                  <View style={{width:300,height:5,backgroundColor:'#f2a8a9'}}>  </View>
              </View>
             </View>
            </View> */}

       </View>
            </View>
    );
}
const styles=StyleSheet.create(
    {
    container:
    {
       width:'100vw',
       height:'100vh',
       display:'flex',
       flexDirection:'column',
       gap:5,
       justifyContent:'center',
      //alignItems:'center',
       margin:0,
       padding:15,
       backgroundColor:'#fce9c8',

       position:'relative',
       
    },
    stat:
    {
      flex:1,
       width:'98%',
       height:300,
       backgroundColor:'white',
       borderTopLeftRadius:50,
       borderTopRightRadius:50,
       position:'absolute',
       bottom:0,
       display:'flex',
       justifyContent:'center',
       alignSelf:'center',

      
    },
    sidebar:
    {
      width:'100vw',
      height:50,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      position:'absolute',
      bottom:0,
      backgroundColor:'blue',
      padding:10
    
    },
    side_text:
    {
      color:'white',
      fontSize:18,
      fontWeight:'bold'
    },
    side_item:
    {
      width:'100%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    img_side:
    {
       width:30,
       height:30,
    },
    header:
    {
      width:'100%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:85,
      marginBottom:25
    },
    profil:
    {
      width:'100%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
    },
   
    menu:
    {
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      width:'100%',
      marginBottom:20
    },
    item_menu:
    {
      width:'auto',
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:25,
      paddingRight:25,
      // backgroundColor:'orange',
      borderRadius:25,
      marginRight:20
    },
    bg_orange:{
        backgroundColor:'#f8e0e2'
    },
    /*combiner deux styles pour en faire un meme style */
    // item_orange:{
    //   ...StyleSheet.flatten([styles.item_menu, styles.bg_orange]),
    // },
    price:
    {
      width:'100%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    elements:
    {
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      width:'100%',
      marginBottom:20,
      //  display:'flex',
      //  flexDirection:'row',
      //  justifyContent:'center',
      //  alignItems:'center',
      //  marginTop:'50px'
    },
    box:
    {
      width:'auto',
      height:80,
      padding:25,
      display:'flex',
      gap:35,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:15,
      borderWidth:0.2,
      borderColor:'black',
      marginRight:50,
      marginTop:30
    },
    box_texte:
    {
      display:'flex',
      flexDirection:'column'
    },
    img_box:
    {
      width:'auto',
      height:60,
      padding:25,
      borderRadius:15,
      backgroundColor:'#f8e0e2'
    },
    products:
    {
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      width:'100%',
      marginBottom:20,
      //  width:'auto',
      //  display:'flex',
      //  flexDirection:'row',
      //  justifyContent:'center'
    },
    img:
    {
      width:'80%',
      height:'80%',
      display:'flex',
      margin:'auto'
    },
    bar:
    {
      // flex:1,
       width:'90vw',
       height:10,
      //  borderWidth:2,
       borderRadius:15,
       display:'flex',
       justifyContent:'flex-start',
       alignItems:'flex-start',
       backgroundColor:'#e6e6e6'
    },
    progresbar1:
    {
      width:'30%',
      borderRadius:15,
      height:'100%',
      backgroundColor:'pink'
    },
    progresbar2:
    {
      width:'50%',
      borderRadius:15,
      height:'100%',
      backgroundColor:'pink'
    }
  });