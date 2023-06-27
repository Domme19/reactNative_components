import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function HomeScreen (){
    const navigation = useNavigation();


    const RenderMainContent = () =>{
        return(
            <View>
                <Text style={{fontSize: 30, marginBottom: 20, fontWeight: 'bold'}}>
                    Home screen
                </Text>
                <TouchableOpacity style={styles.navigateBtn} onPress={() => navigation.navigate("Login1" as never)}>
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
                        Navigate to Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navigateBtn} onPress={() => navigation.navigate("Login2" as never)}>
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
                        Navigate to Login 2
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }


    return(
        <View style={styles.container}>
            {RenderMainContent()}
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
        borderRadius: 10,
        marginBottom: 20
    },


})