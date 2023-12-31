import {View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from "react-native";
import InputBoxV1 from "../components/InputBoxV1";
import {useState} from "react";


export default function LoginScreenV2(){
    const [email, setEmail] = useState("" );
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const onLogin = () =>{
        setLoading(true)
        setTimeout(() =>{
            setLoading(false);
        }, 3000)
    }

    return(
        <View style={styles.container}>
            <View style={styles.mainView}>
                <Text style={{marginBottom: 10, textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>Sign in</Text>
                <InputBoxV1
                    placeHolderText={"Email Address"}
                    borderColor={"lightblue"}
                    onPress={setEmail}
                />
                <InputBoxV1
                    placeHolderText={"Password"}
                    borderColor={"lightblue"}
                    onPress={setPassword}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={[styles.mainBtn, {backgroundColor: 'black'}]}
                    onPress={() => onLogin()}
                >
                    <Text style={{color: 'white', fontSize: 16}}>Sign in</Text>
                </TouchableOpacity>

                {/* activity loader*/}
                {loading &&
                    <ActivityIndicator
                        size="large"
                    />
                }
                <TouchableOpacity style={styles.forgotBtn}>
                    <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>Forgot Password?</Text>
                </TouchableOpacity>

                <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <View style={{borderWidth: 0.5, flex: 1}}></View>
                    <Text style={{marginRight: 10, marginLeft: 10}}>Or</Text>
                    <View style={{borderWidth: 0.5, flex: 1}}></View>
                </View>

            </View>
            <View style={styles.bottomView}>
                <TouchableOpacity style={{marginBottom: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color:'lightgray', fontSize: 16}}>Don't have an account?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.mainBtn, {borderWidth: 1, borderColor: 'black'}]}>
                    <Text style={{fontSize: 16}}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },

    mainView:{
        flex: 1,
    },
    bottomView:{
    },

    mainBtn:{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20
    },

    forgotBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },

})