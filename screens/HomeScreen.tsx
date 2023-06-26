import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import IMG1 from "../assets/sampleImg_1.png"
export default function HomeScreen (){
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        setTimeout(() =>{
            setLoading(false);
        }, 6000)
    })

    const RenderMainContent = () =>{
        return(
            <View>
                <Text style={{fontSize: 20, marginBottom: 10}}>
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

    const RenderLogo = () =>{
        return(
            <View style={[styles.logoView, styles.shadowProp]}>
                <Image source={IMG1} style={styles.logo}/>
            </View>
        )
    }
    return(
        <View style={styles.container}>
            {loading ? RenderLogo() : RenderMainContent()}
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

    logoView:{
        borderRadius: 10,
        backgroundColor: 'white'
    },

    logo:{
        height: 120,
        width: 120,
        borderRadius: 10
    },

    shadowProp:{
        shadowOffset: {width: -2, height: 4},
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 20
    }
})