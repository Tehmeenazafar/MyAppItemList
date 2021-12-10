import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


import { connect } from "react-redux";
const { height, width } = Dimensions.get('screen');
// interface Props {
//     visible: false
// }
var data = [{
    title:"Item 1",
    description:"this is first item",
    favourite:true,
    date:"9/12/2021"
},
{
    title:"Item 1",
    description:"this is first item",
    favourite:true,
    date:"9/12/2021"
},
{
    title:"Item 1",
    description:"this is first item",
    favourite:true,
    date:"9/12/2021"
},
{
    title:"Item 1",
    description:"this is first item",
    favourite:true,
    date:"9/12/2021"
},]
 const App: React.FC = (props) => {

    const [favourite , setFavourite] = useState<boolean | false>(false);
    
    return (
        <View >

        
        <ScrollView
        nestedScrollEnabled={true}
        style={{

            marginBottom: 0,
            width: '100%',
            height:height*0.75
            

        }}>
        <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={{ height: height * 0.12, borderRadius: height * 0.02, marginTop: height * 0.02, alignSelf: 'center', width: width * 0.95, backgroundColor: 'white' ,flexDirection:'row'}}

                >

                    <TouchableOpacity 
                    onPress={() => props.navigation.navigate('detail')}
                    style={{ height: height * 0.12, borderRadius: height * 0.02, width: width * 0.74, backgroundColor: 'white' }}>
                        <View style={{ flexDirection: 'row'}}>                        
                            <View style={{marginLeft:width*0.05, marginTop:height*0.02, width:width*0.6}}>
                                <Text>
                                    {item.title}
                                </Text>
                                <Text>
                                    {item.description}
                                </Text>
                            </View>
                            
                        </View>
                        <View style={{flexDirection:'row'}} >
                            <View style={{width:width*0.65}}>

                            </View>
                            
                        </View>
                       
                    </TouchableOpacity>

                    <View>
                    {item.favourite == true ? (
                                <TouchableOpacity style={{marginLeft:width*0.05, marginTop:height*0.02,}}>
                                <Image style={{height:height*0.04,width:height*0.046}}
                                    source={
                                        require("../../assests/images/likes.png")
                                    }/>
                                </TouchableOpacity>
                                
                            ): <TouchableOpacity style={{marginLeft:width*0.1, marginTop:height*0.02}}>
                                <Image style={{height:height*0.04,width:height*0.045}}
                                    source={
                                        require("../../assests/images/unlike.png")
                                    }/>
                                </TouchableOpacity>
                            
                            }

                            <View style={{marginTop:height*0.01}}>
                               <Text>
                                   {item.date}
                                </Text> 
                            </View>
                    </View>
                </View>
            )}
            style={{ marginTop: 10 }}
        />
    </ScrollView>
    <View style={{marginLeft:width*0.8, marginTop:height*0.01}} >
        <TouchableOpacity onPress={() => props.navigation.navigate('editupdate')}>
            <Image style={{height:40,width:40}} source={ require("../../assests/images/plus.png") }/>
        </TouchableOpacity>
    </View>

    </View>
        )
    }


  export default App; 
      
    const styles = StyleSheet.create({})