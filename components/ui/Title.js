import { Text, StyleSheet, Platform } from 'react-native';


function Title({ children }) {
    return <Text style={style.title}>{children}</Text>
}

export default Title;

const style = StyleSheet.create({
    title: {
        fontSize:24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        //borderWidth: Platform.OS==='android'? 2: 0,
        borderWidth:Platform.select({ios:0 , android:2 }),  // te njejtin funksion si me larte 
        borderColor: 'white',
        padding: 12,
        maxWidth:'80%'
    }
})