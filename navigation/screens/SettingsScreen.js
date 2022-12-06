import * as React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

export default function SettingsScreen({ navigation }) {
    return (
        <ScrollView style = {{}}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    onPress={() => navigation.navigate('Home')}
                    style={{ fontSize: 26, fontWeight: 'bold', color: 'black', marginTop:10 }}>Profile</Text>
            </View>
        </ScrollView>
    );
}
