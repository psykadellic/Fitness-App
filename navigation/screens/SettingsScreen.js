import * as React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function SettingsScreen({ navigation }) {
    
    return (
        <ScrollView style={{}}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    onPress={() => navigation.navigate('Home')}
                        style={{ fontSize: 26, fontWeight: 'bold', color: 'black', marginTop: 10 }}>Profile</Text>
                <View style= {{display:"flex",justifyContent:"space-around",margin:"18px 0px",}}>
                    <div>
                        //profile pic
                        <image style={{width:"160px", height:"160px", borderRadius: "80px"}}
                        src="https://unsplash.com/photos/qfjuh4OLdxw"/>
                    </div>
                    <div> //profile
                        <View style={{display: flex, justifyContent: "space-between", width:"110%"}}>//personal info
                            <h4>John Doe</h4> //name
                            <h4>New York, NY</h4> //location
                            <h5>Weight:190 lbs</h5>
                            <h5>Height: 6 feet, 0 inches</h5>
                        </View>
                        <div> //friends section
                            <h1>Friends</h1> //make it so you can add friends
                            <h4>You currently have no friends.</h4>
                        </div>
                    </div>
                </View>
            </View>
        </ScrollView>  
    );
}
