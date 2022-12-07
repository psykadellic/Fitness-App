import React, { useContext } from 'react';
import { ScrollView, View, Text, Image, Pressable } from 'react-native';
import FitnessCards from '../../components/FitnessCards';
import { FitnessItems } from '../../Context';
import fitness from '../../data/data';
import CircularProgress from 'react-native-circular-progress-indicator';

export default function HomeScreen({ navigation }) {
    const FitnessData = fitness;

    const { minutes, calories, workout } = useContext(FitnessItems);

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <Text
                    style={{ fontSize: 26, fontWeight: 'bold', color: 'black', textAlign: 'center', marginTop: 10 }}>Welcome to FitMate
                </Text>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginLeft: 15, marginRight: 10 }}>

                <View style = {{ alignItems: 'center'}}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Activity</Text>
                    <CircularProgress
                        value={workout}
                        progressValueFontSize= {20}
                        progressValueColor = {'black'}
                        maxValue={50}
                        radius={25}
                        activeStrokeColor={'limegreen'}
                        inActiveStrokeColor={'lightgreen'}
                        inActiveStrokeOpacity={0.4}
                        inActiveStrokeWidth={10}
                        activeStrokeWidth={11}
                        //titleColor = {'#ECF0F1'}
                        titleStyle={{ fontWeight: 'bold', color: 'black', }}
                    />
                </View>

                <View style = {{alignItems: 'center'}}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Calories</Text>
                    <CircularProgress
                        value={calories}
                        progressValueFontSize= {20}
                        progressValueColor = {'black'}
                        maxValue={1000}
                        radius={25}
                        activeStrokeColor={'fuchsia'}
                        inActiveStrokeColor={'hotpink'}
                        inActiveStrokeOpacity={0.3}
                        inActiveStrokeWidth={10}
                        activeStrokeWidth={11}
                        //titleColor = {'#ECF0F1'}
                        titleStyle={{ fontWeight: 'bold', color: 'black', }}
                    />
                </View>

                <View style = {{alignItems: 'center'}}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Minutes</Text>
                    <CircularProgress
                        value={minutes}
                        progressValueFontSize= {20}
                        progressValueColor = {'black'}
                        maxValue={1000}
                        radius={25}
                        activeStrokeColor={'red'}
                        inActiveStrokeColor={'lightcoral'}
                        inActiveStrokeOpacity={0.3}
                        inActiveStrokeWidth={10}
                        activeStrokeWidth={11}
                        //titleColor = {'#ECF0F1'}
                        titleStyle={{ fontWeight: 'bold', color: 'black', }}
                    />
                </View>

            </View>





            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{
                    width: '100%',
                    height: 250,
                    marginTop: 20,
                    borderRadius: 0
                }}
                    source={{
                        uri: "https://thumbs.dreamstime.com/b/lion-s-head-gym-iron-shadow-simple-vector-logo-234223654.jpg"
                    }}
                >
                </Image>

            </View>

            <FitnessCards />

        </ScrollView>
    );
}