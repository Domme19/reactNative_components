import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, TouchableHighlight} from "react-native";
import IMG1 from "../assets/sampleImg_1.png"
import {useState} from "react";

export default function LoginScreenV1(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <View style={styles.container}>
            <Image source={IMG1} style={styles.img}/>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={(email) => setEmail(email)}
                    placeholder={"Email"}
                    placeholderTextColor="#003f5c"
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={(password) => setPassword(password)}
                    placeholder={"Password"}
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={{marginBottom: 30}}>
                <Text style={styles.forgotBtn}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={{fontSize: 20, color: 'white'}}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    img: {
        marginBottom: 40,
        height: 140,
        width: 140,
        borderRadius: 70
    },

    inputView:{
        backgroundColor: "#FFC0CB",
        height: 45,
        width: "75%",
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 20,
    },

    inputBox:{
        height: 45,
        flex: 1,
        padding: 10,
    },

    forgotBtn:{
        height: 30,
        color: 'white'
    },

    loginBtn:{
        backgroundColor: "#FF1493",
        height: 50,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    }
})