import {View, StyleSheet, Text} from 'react-native'

export function Profile(){
    return(
        <View style={styles.container}>
            <Text>Página perfil </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1//para apanhar o tamnho inteiro da tela
    }
})