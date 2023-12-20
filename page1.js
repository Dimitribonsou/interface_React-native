import {useState} from 'react';
import { StyleSheet, Text, View ,Image,ScrollView,Dimensions,TouchableOpacity,} from 'react-native';
import {createStackNavigation} from  "@react-navigation/stack";
import Ionicons from 'react-native-vector-icons/Ionicons';
// import MyOtherFile from './MyOtherFile'; // voici comment importer un projet

const screenwidth=Dimensions.get("window").width
const screenheight=Dimensions.get("window").height


 export default function App  ({navigation}) {
  const legumes=[
            {nom:"carote",prix:25,image: require('./image/carote.png')},
            {nom:"salade",prix:15,image: require('./image/salade.png')},
            {nom:"scolli",prix:35,image: require('./image/scolli.png')},
         ]
         const produits_divers=[
          {nom:"viande",prix:65,image: require('./image/viande.png')},
          {nom:"eau Potable",prix:15,image: require('./image/bouteilEau.png')},
          {nom:"panier condiment",prix:35,image: require('./image/panier.png')},
       ]
         const [activeButton, setActiveButton] = useState('fruits');
         const [content, setContent] = useState(
           <View style={{width:'100%',display:'flex',flexDirection:'row'}}>

          <TouchableOpacity onPress={() => {
            navigation.navigate('Details')
          }}>
            <View
              style={{
                width: 250,
                height: 280,
                minWidth: 150,
                borderRadius: 25,
                backgroundColor: '#fce9c8',
                marginRight: 50,
                padding: 20
              }}
            >

              <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('./image/coeur.png')} style={{ width: 20, height: 20 }} ></Image></View>
              <View ><Image source={require('./image/orange.png')} style={{ width: 120, height: 90 }} ></Image></View>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginTop: 15 }}>
                <Text style={{ color: 'orange', fontSize: 18 }}>Orange</Text>
                <Text style={{ color: 'orange', fontSize: 18 }}>$10</Text>
              </View>
              {/* <Button  tittle='ADD' style={{ width:'auto',height: 25 ,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:15,color:'orange',marginTop: 25 }}/> */}
              <TouchableOpacity style={{ width: 100, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 15, backgroundColor: '#fb9b13', marginTop: 20, color: 'white' }}>ADD</TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate('detailresains') }}>
            <View
              style={{
                width: 250,
                height: 280,
                minWidth: 150,
                borderRadius: 25,
                backgroundColor: '#d9defe',
                marginRight: 50,
                padding: 20
              }}>
              <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('./image/coeur.png')} style={{ width: 20, height: 20 }} ></Image></View>
              <View ><Image source={require('./image/raisain.png')} style={{ width: 120, height: 90 }} ></Image></View>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginTop: 15 }}>
                <Text style={{ color: 'blue', fontSize: 18 }}>Grape</Text>
                <Text style={{ color: 'blue', fontSize: 18 }}>$15</Text>
              </View>
              {/* <Button  tittle='ADD' style={{ width:'auto',height: 25 ,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:15,color:'orange',marginTop: 25 }}/> */}
              <TouchableOpacity style={{ width: 100, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 15, backgroundColor: '#3645ac', marginTop: 20, color: 'white' }}>ADD</TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate('Details') }}>
            <View
              style={{
                width: 250,
                height: 280,
                minWidth: 150,
                borderRadius: 25,
                backgroundColor: '#ff9966',
                marginRight: 50, padding: 20
              }}>
              <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('./image/coeur.png')} style={{ width: 20, height: 20 }} ></Image></View>
              <View ><Image source={require('./image/fraise.png')} style={{ width: 120, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }} ></Image></View>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                <Text style={{ color: 'red', fontSize: 18 }}>Fraise</Text>
                <Text style={{ color: 'red', fontSize: 18 }}>$15</Text>
              </View>
              {/* <Button  tittle='ADD' style={{ width:'auto',height: 25 ,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:15,color:'orange',marginTop: 25 }}/> */}
              <TouchableOpacity style={{ width: 100, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 15, backgroundColor: 'red', marginTop: 20, color: 'white' }}>ADD</TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>);
       
         const handleButtonClick = (buttonName) => {
           setActiveButton(buttonName);
           // Mettez à jour le contenu en fonction du bouton cliqué
           if (buttonName === 'fruits') {
             setContent( 
              
                   <View style={{width:'100%',display:'flex',flexDirection:'row'}}>

                     <TouchableOpacity onPress={() => {
                       navigation.navigate('Details')
                     }}>
                       <View
                         style={{
                           width: 250,
                           height: 280,
                           minWidth: 150,
                           borderRadius: 25,
                           backgroundColor: '#fce9c8',
                           marginRight: 50,
                           padding: 20
                         }}
                       >

                         <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('./image/coeur.png')} style={{ width: 20, height: 20 }} ></Image></View>
                         <View ><Image source={require('./image/orange.png')} style={{ width: 120, height: 90 }} ></Image></View>
                         <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginTop: 15 }}>
                           <Text style={{ color: 'orange', fontSize: 18 }}>Orange</Text>
                           <Text style={{ color: 'orange', fontSize: 18 }}>$10</Text>
                         </View>
                         {/* <Button  tittle='ADD' style={{ width:'auto',height: 25 ,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:15,color:'orange',marginTop: 25 }}/> */}
                         <TouchableOpacity style={{ width: 100, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 15, backgroundColor: '#fb9b13', marginTop: 20, color: 'white' }}>ADD</TouchableOpacity>
                       </View>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => { navigation.navigate('detailresains') }}>
                       <View
                         style={{
                           width: 250,
                           height: 280,
                           minWidth: 150,
                           borderRadius: 25,
                           backgroundColor: '#d9defe',
                           marginRight: 50,
                           padding: 20
                         }}>
                         <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('./image/coeur.png')} style={{ width: 20, height: 20 }} ></Image></View>
                         <View ><Image source={require('./image/raisain.png')} style={{ width: 120, height: 90 }} ></Image></View>
                         <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginTop: 15 }}>
                           <Text style={{ color: 'blue', fontSize: 18 }}>Grape</Text>
                           <Text style={{ color: 'blue', fontSize: 18 }}>$15</Text>
                         </View>
                         {/* <Button  tittle='ADD' style={{ width:'auto',height: 25 ,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:15,color:'orange',marginTop: 25 }}/> */}
                         <TouchableOpacity style={{ width: 100, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 15, backgroundColor: '#3645ac', marginTop: 20, color: 'white' }}>ADD</TouchableOpacity>
                       </View>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => { navigation.navigate('Details') }}>
                       <View
                         style={{
                           width: 250,
                           height: 280,
                           minWidth: 150,
                           borderRadius: 25,
                           backgroundColor: '#ff9966',
                           marginRight: 50, padding: 20
                         }}>
                         <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('./image/coeur.png')} style={{ width: 20, height: 20 }} ></Image></View>
                         <View ><Image source={require('./image/fraise.png')} style={{ width: 120, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }} ></Image></View>
                         <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                           <Text style={{ color: 'red', fontSize: 18 }}>Fraise</Text>
                           <Text style={{ color: 'red', fontSize: 18 }}>$15</Text>
                         </View>
                         {/* <Button  tittle='ADD' style={{ width:'auto',height: 25 ,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:15,color:'orange',marginTop: 25 }}/> */}
                         <TouchableOpacity style={{ width: 100, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 15, backgroundColor: 'red', marginTop: 20, color: 'white' }}>ADD</TouchableOpacity>
                       </View>
                     </TouchableOpacity>
                   </View>

                
           );
           } else if (buttonName === 'legumes') {
             setContent(   legumes.map((legume)=>(
                
              <View key={legume}
              style={{
                width: 250,
                height: 280,
                minWidth: 150,
                borderRadius: 25,
                backgroundColor: '#f1f1f1f1',
                marginRight: 50,
                padding: 20
              }}>

              <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('./image/coeur.png')} style={{ width: 20, height: 20 }} ></Image></View>
              <View ><Image source={legume.image} style={{ width: 120, height: 90 }} ></Image></View>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginTop: 15 }}>
                <Text style={{ color: 'orange', fontSize: 18 }}>{legume.nom}</Text>
                <Text style={{ color: 'orange', fontSize: 18 }}>{legume.prix}$</Text>
              </View>
              {/* <Button  tittle='ADD' style={{ width:'auto',height: 25 ,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:15,color:'orange',marginTop: 25 }}/> */}
              <TouchableOpacity   style={{ width: 100, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center',alignSelf:'center', borderRadius: 15, backgroundColor: '#fb9b13',marginTop: 20, color: 'white' }}>ADD</TouchableOpacity>
            </View>
        )));
           } else if (buttonName === 'viande') {
             setContent(    
               produits_divers.map((produit)=>(
                
              <View key={produit}
              style={{
                width: 250,
                height: 280,
                minWidth: 150,
                borderRadius: 25,
                backgroundColor: '#f1f1f1f1',
                marginRight: 50,
                padding: 20
              }}>

              <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('./image/coeur.png')} style={{ width: 20, height: 20 }} ></Image></View>
              <View ><Image source={produit.image} style={{ width: 120, height: 90 }} ></Image></View>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginTop: 15 }}>
                <Text style={{ color: 'orange', fontSize: 18 }}>{produit.nom}</Text>
                <Text style={{ color: 'orange', fontSize: 18 }}>{produit.prix} $</Text>
              </View>
              {/* <Button  tittle='ADD' style={{ width:'auto',height: 25 ,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:15,color:'orange',marginTop: 25 }}/> */}
              <TouchableOpacity   style={{ width: 100, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center',alignSelf:'center', borderRadius: 15, backgroundColor: '#fb9b13',marginTop: 20, color: 'white' }}>ADD</TouchableOpacity>
            </View>
        )));
           }
         };
        // function fruitsData()
        // {
        //   <View>

        //     <TouchableOpacity onPress={() => {
        //       navigation.navigate('Details')
        //     }}>
        //       <View
        //         style={{
        //           width: 250,
        //           height: 280,
        //           minWidth: 150,
        //           borderRadius: 25,
        //           backgroundColor: '#fce9c8',
        //           marginRight: 50,
        //           padding: 20
        //         }}>

        //         <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('./image/coeur.png')} style={{ width: 20, height: 20 }} ></Image></View>
        //         <View ><Image source={require('./image/orange.png')} style={{ width: 120, height: 90 }} ></Image></View>
        //         <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginTop: 15 }}>
        //           <Text style={{ color: 'orange', fontSize: 18 }}>Orange</Text>
        //           <Text style={{ color: 'orange', fontSize: 18 }}>$10</Text>
        //         </View>
        //         {/* <Button  tittle='ADD' style={{ width:'auto',height: 25 ,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:15,color:'orange',marginTop: 25 }}/> */}
        //         <TouchableOpacity style={{ width: 100, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 15, backgroundColor: '#fb9b13', marginTop: 20, color: 'white' }}>ADD</TouchableOpacity>
        //       </View>
        //     </TouchableOpacity>
        //     <TouchableOpacity onPress={() => { navigation.navigate('detailresains') }}>
        //       <View
        //         style={{
        //           width: 250,
        //           height: 280,
        //           minWidth: 150,
        //           borderRadius: 25,
        //           backgroundColor: '#d9defe',
        //           marginRight: 50,
        //           padding: 20
        //         }}>
        //         <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('./image/coeur.png')} style={{ width: 20, height: 20 }} ></Image></View>
        //         <View ><Image source={require('./image/raisain.png')} style={{ width: 120, height: 90 }} ></Image></View>
        //         <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginTop: 15 }}>
        //           <Text style={{ color: 'blue', fontSize: 18 }}>Grape</Text>
        //           <Text style={{ color: 'blue', fontSize: 18 }}>$15</Text>
        //         </View>
        //         {/* <Button  tittle='ADD' style={{ width:'auto',height: 25 ,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:15,color:'orange',marginTop: 25 }}/> */}
        //         <TouchableOpacity style={{ width: 100, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 15, backgroundColor: '#3645ac', marginTop: 20, color: 'white' }}>ADD</TouchableOpacity>
        //       </View>
        //     </TouchableOpacity>
        //     <TouchableOpacity onPress={() => { navigation.navigate('Details') }}>
        //       <View
        //         style={{
        //           width: 250,
        //           height: 280,
        //           minWidth: 150,
        //           borderRadius: 25,
        //           backgroundColor: '#ff9966',
        //           marginRight: 50, padding: 20
        //         }}>
        //         <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('./image/coeur.png')} style={{ width: 20, height: 20 }} ></Image></View>
        //         <View ><Image source={require('./image/fraise.png')} style={{ width: 120, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }} ></Image></View>
        //         <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        //           <Text style={{ color: 'red', fontSize: 18 }}>Fraise</Text>
        //           <Text style={{ color: 'red', fontSize: 18 }}>$15</Text>
        //         </View>
        //         {/* <Button  tittle='ADD' style={{ width:'auto',height: 25 ,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:15,color:'orange',marginTop: 25 }}/> */}
        //         <TouchableOpacity style={{ width: 100, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 15, backgroundColor: 'red', marginTop: 20, color: 'white' }}>ADD</TouchableOpacity>
        //       </View>
        //     </TouchableOpacity>
        //   </View>
        // }
        // function legumeData()
        // {
          
        //     legumes.map((legume)=>(
                
        //           <View key={legume}
        //           style={{
        //             width: 250,
        //             height: 280,
        //             minWidth: 150,
        //             borderRadius: 25,
        //             backgroundColor: '#fce9c8',
        //             marginRight: 50,
        //             padding: 20
        //           }}>
    
        //           <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('./image/coeur.png')} style={{ width: 20, height: 20 }} ></Image></View>
        //           <View ><Image source={legume.image} style={{ width: 120, height: 90 }} ></Image></View>
        //           <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginTop: 15 }}>
        //             <Text style={{ color: 'orange', fontSize: 18 }}>{legume.nom}</Text>
        //             <Text style={{ color: 'orange', fontSize: 18 }}>{legume.prix}</Text>
        //           </View>
        //           {/* <Button  tittle='ADD' style={{ width:'auto',height: 25 ,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:15,color:'orange',marginTop: 25 }}/> */}
        //           <TouchableOpacity   style={{ width: 100, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center',alignSelf:'center', borderRadius: 15, backgroundColor: '#fb9b13',marginTop: 20, color: 'white' }}>ADD</TouchableOpacity>
        //         </View>
        //     ))
          
       
                
        // }
        // function AutreProduit()
        // {
          
        //     produits_divers.map((produit)=>(
                
        //           <View key={produit}
        //           style={{
        //             width: 250,
        //             height: 280,
        //             minWidth: 150,
        //             borderRadius: 25,
        //             backgroundColor: '#fce9c8',
        //             marginRight: 50,
        //             padding: 20
        //           }}>
    
        //           <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', marginLeft: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image source={require('./image/coeur.png')} style={{ width: 20, height: 20 }} ></Image></View>
        //           <View ><Image source={produit.image} style={{ width: 120, height: 90 }} ></Image></View>
        //           <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginTop: 15 }}>
        //             <Text style={{ color: 'orange', fontSize: 18 }}>{produit.nom}</Text>
        //             <Text style={{ color: 'orange', fontSize: 18 }}>{produit.prix} $</Text>
        //           </View>
        //           {/* <Button  tittle='ADD' style={{ width:'auto',height: 25 ,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:15,color:'orange',marginTop: 25 }}/> */}
        //           <TouchableOpacity   style={{ width: 100, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center',alignSelf:'center', borderRadius: 15, backgroundColor: '#fb9b13',marginTop: 20, color: 'white' }}>ADD</TouchableOpacity>
        //         </View>
        //     ))
          
       
                
        // }

        
 return(
   <View style={styles.container}>
     {/* <ScrollView> */}
       {/* <ScrollView snapToInterval={screenheight} decelerationRate='fast' alwaysBounceVertical={true} verticale> */}
         
      
       <View style={styles.profil}>
         <Image source={require('./image/image/menu.png')} style={{ width: 30, height: 30, borderRadius: 10 }}></Image>
         <Image source={require('./image/dimiphoto.jpg')} style={{ width: 40, height: 40, borderRadius: '50%' }}></Image>
       </View>
       <View style={styles.header_text}>
         <Text style={{ fontSize: 25 }}>Discover Seasonal Fruits and Vegitables</Text>
       </View>
          {/* gerer les cathegories de produit de presentation de produits */}
       <View style={styles.menu}>
         <ScrollView snapToInterval={screenwidth} decelerationRate='fast' alwaysBounceHorizontal={true} horizontal>
           <TouchableOpacity style={[styles.button, activeButton === 'fruits']}
          onPress={() => handleButtonClick('fruits')}>

           <View style={{
             width: 'auto',
             paddingTop: 10,
             paddingBottom: 10,
             paddingLeft: 25,
             paddingRight: 25,
             backgroundColor: '#ffcccc',
             borderRadius: 25,
             marginRight: 20
           }} >
             <Text style={{ color: '#ff6666' }}>Fruits</Text>
           </View>
           </TouchableOpacity >
           <TouchableOpacity style={[styles.button, activeButton === 'legume' && styles.activeButton]}
          onPress={() => handleButtonClick('legumes')}>

           <View style={styles.item_menu}>
             <Text>Legumes</Text>
           </View>
           </TouchableOpacity>
           <TouchableOpacity style={[styles.button, activeButton === 'viande' && styles.activeButton]}
          onPress={() => handleButtonClick('viande')}>
           <View style={styles.item_menu}>
             <Text>Autre Produits</Text>
           </View>
           </TouchableOpacity>
         
         </ScrollView>
       </View>
       {/* gerer les box de presentation de produits */}

       <View style={{width:'100%',display:'flex',flexDirection:'row'}}>
       <ScrollView snapToInterval={screenwidth} decelerationRate='fast' alwaysBounceHorizontal={true} horizontal>
          <Text>{content}</Text> 
        </ScrollView>
       </View>
     
       <View style={{ marginTop: 20, display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
         <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Nearby Shop</Text>
       </View>
       <View style={styles.elements}>
         <ScrollView snapToInterval={screenwidth} decelerationRate='fast' alwaysBounceHorizontal={true} horizontal>
           <View style={styles.box}>
             <View style={styles.img_box}>
               <Image source={require('./image/boutique.png')} style={{ width: 50, height: 50 }}></Image>
             </View>
             <View style={styles.box_texte}>
               <Text> Xenter Shop</Text>
               <Text> 2356 Toltrican Streeet</Text>
               <Text> 9AM - 7PM</Text>
             </View>
           </View>
           <View style={styles.box}>
             <View style={styles.img_box}>
               <Image source={require('./image/boutique2.png')} style={{ width: 50, height: 50 }}></Image>
             </View>
             <View style={styles.box_texte}>
               <Text> Xenter Shop</Text>
               <Text> 2356 Toltrican Streeet</Text>
               <Text> 9AM - 7PM</Text>
             </View>
           </View>
           <View style={styles.box}>
             <View style={styles.img_box}>
               <Image source={require('./image/boutique.png')} style={{ width: 50, height: 50 }}></Image>
             </View>
             <View style={styles.box_texte}>
               <Text> Xenter Shop</Text>
               <Text> 2356 Toltrican Streeet</Text>
               <Text> 9AM - 7PM</Text>
             </View>
           </View>
         </ScrollView>
       </View>
          {/* <View style={styles.sidebar}>
          <View style={styles.side_item}>
            <Text style={styles.side_text}>Home</Text>
            <Text style={styles.side_text}>Search</Text>
            <Text style={styles.side_text}>More</Text>
            <Text style={styles.side_text}>User</Text>
            {/* <Image source={require('./Image/Home.png')} style={styles.img_side}></Image>
            <Image source={require('./Image/Icon Search.png')} style={styles.img_side}></Image>
            <Image source={require('./Image/calandrier.png')} style={styles.img_side}></Image>
            <Image source={require('./Image/user-icon.png')} style={styles.img_side}></Image> */}
          {/* </View>
        </View>  */}
    {/* </ScrollView> */}
  </View>
  
 );
}
const styles=StyleSheet.create(
  {
  container:
  {
   flex: 1, 
     width:'100vw',
    //  height:'auto',
    paddingTop: 75,
     display:'flex',
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'center',
     padding: 15 ,
     backgroundColor:'white',
     overflow:'scroll'
    //  overflow:'scroll'
    //  position:'relative',
     
  },
  btn:
  {
    width: 50,
     borderRadius:10,
     backgroundColor:'black'
  },
  sidebar:
  {
    width:'100vw',
    height: 50 ,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    position:'absolute',
    bottom:0,
    backgroundColor:'blue',
    padding: 10 
  
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
     width: 30 ,
     height: 30 ,
  },
  header:
  {
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: 85 ,
    marginBottom: 25 
  },
  profil:
  {
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  header_text:{
  width:'80%',
  height:'auto',
  marginBottom: 20 
  },
  menu:
  {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    width:'100%',
    marginBottom: 20 
  },
  item_menu:
  {
    width:'auto',
    paddingTop: 10 ,
    paddingBottom: 10 ,
    paddingLeft: 25 ,
    paddingRight: 25 ,
    // backgroundColor:'orange',
    borderRadius:25,
    marginRight: 20 
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
    marginBottom: 20 ,
    //  display:'flex',
    //  flexDirection:'row',
    //  justifyContent:'center',
    //  alignItems:'center',
    //  marginTop: 50 
  },
  box:
  {
    width:'auto',
    height: 80 ,
    padding: 25 ,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    borderWidth:0.2,
    borderColor:'black',
    marginRight: 20 ,
    marginTop: 30 
  },
  box_texte:
  {
    display:'flex',
    flexDirection:'column',
    fontSize:12
  },
  img_box:
  {
    width:80,
    height: 60 ,
    padding: 25 ,
    borderRadius:15,
    backgroundColor:'#f8e0e2',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  products:
  {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    width:'100%',
    marginBottom: 20 ,
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
  /* gerer l'etat des buttons*/
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  activeButton: {
    // backgroundColor: 'lightblue',
    width: 180,
    minWidth: 150,
    borderRadius: 25,
    backgroundColor: '#fce9c8',
    marginRight: 50,
    padding: 20
  },
  content: {
    marginVertical: 20,
    alignItems: 'center',
  },
});
