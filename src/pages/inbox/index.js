import {View, StyleSheet, Text} from 'react-native'

export function Inbox(){
    return(
        <View style={styles.container}>
            <Text>Inbox</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1//para apanhar o tamnho inteiro da tela
    }
})