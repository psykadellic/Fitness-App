import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const Rest = () => {
    const navigation = useNavigation();
    let timer = 0;
    const [timeLeft, setTimeLeft] = useState(30);

    const startTime = () => {
        setTimeout(() => {
            if (timeLeft <= 0) {
                navigation.goBack();
                clearTimeout(timer);
            }
            setTimeLeft(timeLeft - 1);
        }, 1000);
    }
    useEffect(() => {
        startTime();
        return () => clearTimeout(timer);
    },)

    return (
        <View>
            <Image
                source={{
                    uri: "https://media.istockphoto.com/id/1222178625/vector/stay-home-concept-people-doing-exercise-in-cozy-modern-interior-vector-illustration-in-flat.jpg?s=612x612&w=0&k=20&c=urkPKOi8j2wcHxaoDBummTwezO38qA3BSvqHqc6Mzb8=",
                }}
                style={{ width: "100%", height: 450, alignItems: 'center', borderRadius: 25 }}
            />
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 50, textAlign: 'center' }}>Rest</Text>

            <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>{timeLeft} seconds</Text>
        </View>
    )
}

export default Rest

const styles = StyleSheet.create({})