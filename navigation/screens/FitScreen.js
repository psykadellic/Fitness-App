import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FitnessItems } from '../../Context'

const FitScreen = () => {
    const route = useRoute();
    //console.log(route.params);

    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const exersise = route.params.exercises;
    const current = exersise[index];
    //console.log(current, 'first exercise');

    const { completed, setCompleted, minutes, setMinutes, workout, setWorkout, calories, setCalories } = useContext(FitnessItems);
    console.log(completed, 'Completed');

    return (
        <SafeAreaView>
            <Image style={{ width: "100%", height: 370, borderRadius: 25, marginTop: 25 }} source={{ uri: current.image }} />

            <Text style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 30, fontSize: 30, fontWeight: 'bold' }} >{current.name}</Text>

            <Text style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 30, fontSize: 30, fontWeight: 'bold' }} >Total: {current.sets}</Text>

            {index + 1 >= exersise.length ? (

                <Pressable onPress={() => {
                    navigation.navigate("Home")
                }}
                    style={{ backgroundColor: 'dodgerblue', marginLeft: 'auto', marginRight: 'auto', marginTop: 20, borderRadius: 25, padding: 10, width: 150 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: 'white' }}>Complete</Text>
                </Pressable>) : (

                <Pressable onPress={() => {
                    navigation.navigate("Rest")

                    setCompleted([...completed, current.name])
                    setWorkout(workout + 1)
                    setMinutes(minutes + 3.5)
                    setCalories(calories + 7)

                    setTimeout(() => {
                        setIndex(index + 1);
                    }, 2000)
                }}
                    style={{ backgroundColor: 'dodgerblue', marginLeft: 'auto', marginRight: 'auto', marginTop: 20, borderRadius: 25, padding: 10, width: 150 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: 'white' }}>Complete</Text>
                </Pressable>)}
        </SafeAreaView>
    )
}

export default FitScreen

const styles = StyleSheet.create({})