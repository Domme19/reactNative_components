import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
export default function HomeScreen (){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 20, marginBottom: 10}}>
                Home screen
            </Text>
            <TouchableOpacity style={styles.navigateBtn} onPress={() => navigation.navigate("Login1" as never)}>
                <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
                    Navigate to Login
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'lightblue',
    },

    navigateBtn:{
        backgroundColor: 'blue',
        paddingHorizontal: 10,
        paddingVertical: 15,
        width: '60%',
        borderRadius: 10
    }
})