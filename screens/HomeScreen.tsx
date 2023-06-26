import {View, Text, StyleSheet} from "react-native";
export default function HomeScreen (){
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>
                Home screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'lightblue',
        paddingTop: 40,
        paddingLeft: 20
    }
})