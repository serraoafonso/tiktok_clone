import {View, StyleSheet, Text} from 'react-native'

export function Search(){
    return(
        <View style={styles.container}>
            <Text>Search</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1//para apanhar o tamnho inteiro da tela
    }
})