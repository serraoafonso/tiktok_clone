import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

export function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.labels}>
              <TouchableOpacity>
                <Text style={styles.labelText}>Seguindo</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.labelText}>Para voçê</Text>
                <View style={styles.indicator}>
                    
                </View>
              </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,//para apanhar o tamnho inteiro da tela
        backgroundColor: '#000'
    },
    labels:{

    },
    labelText:{

    },
    indicator: {

    }
})