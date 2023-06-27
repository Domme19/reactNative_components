import {Image, View, StyleSheet} from "react-native";
import IMG1 from "../assets/sampleImg_1.png";
import {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
export default function SplashScreen(){
    const navigation = useNavigation();
    useEffect(() =>{
        setTimeout(() =>{
            navigation.navigate("HomeScreen" as never)
        }, 6000)
    }, [])

    return(
        <View style={styles.container}>
            <View style={[styles.logoView, styles.shadowProp]}>
                <Image source={IMG1} style={styles.logo}/>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
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