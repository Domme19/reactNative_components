import {TextInput, View, StyleSheet} from "react-native";

type InputProps = {
    placeHolderText: string
    borderColor: string
    onPress: any
    secureTextEntry?: boolean
}
export default function InputBoxV1(props: InputProps){
    const styles = StyleSheet.create({
        inputView:{
            borderWidth: 1,
            height: 45,
            borderColor: props.borderColor,
            justifyContent: 'center',
            paddingLeft: 10,
            marginBottom: 20,
            borderRadius: 5
        },

        input:{
            height: 30,
            flex: 1
        }
    })

    return(
        <View style={styles.inputView}>
            <TextInput
                placeholder={props.placeHolderText}
                fontSize={16}
                onChangeText={props.onPress}
                style={styles.input}
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    )
}