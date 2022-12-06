import * as React from 'react';
import { ScrollView, View, Text, Image, Pressable } from 'react-native';
import FitnessCards from '../../components/FitnessCards';
import fitness from '../../data/fitness';

export default function HomeScreen({ navigation }) {
    const FitnessData = fitness;
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <Text
                    style={{ fontSize: 26, fontWeight: 'bold', color: 'black', textAlign: 'center', marginTop:10 }}>Welcome to FitMate
                    </Text>
            </View>

        
            <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginLeft: 15, marginRight: 10}}>

                <View>
                    <Text style = {{ textAlign: 'center', fontSize: 15}}>Activity</Text>
                    <Text style = {{textAlign: 'center', fontWeight: 'bold', color: 'black'}}>0</Text>
                </View>

                <View>
                <Text style = {{ textAlign: 'center', fontSize: 15}}>Calories Burned</Text>
                    <Text style = {{textAlign: 'center', fontWeight: 'bold', color: 'black'}}>0</Text>
                </View>

                <View>
                <Text style = {{ textAlign: 'center', fontSize: 15}}>Minutes</Text>
                    <Text style = {{textAlign: 'center', fontWeight: 'bold', color: 'black'}}>0</Text>
                </View>

            </View>





            <View style = {{ justifyContent: 'center', alignItems: 'center' }}>
                <Image style = {{
                    width: '100%',
                    height: 120,
                    marginTop: 20,
                    borderRadius: 0
                }}
                source = {{
                    uri: "https://img.freepik.com/premium-photo/colorful-powder-explosion-white-background_36326-3082.jpg?w=2000"
                }}
                >
                </Image>

            </View>
                
                <FitnessCards/>

        </ScrollView>
    );
}