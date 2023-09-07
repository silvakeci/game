import{View, Text, StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/colors';

function NumberConatiner({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>
{children}
            </Text>
        </View>
    )
};
export default NumberConatiner;

const deviceWidth = Dimensions.get('screen').width;    //Window is excluding the status bar, screen include the bar

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor: Colors.accent500,
        padding: deviceWidth <380 ? 12: 24,   //smaller <380 screens we take a padding of 12 pixels in >380  we take a padding of 24
        margin:deviceWidth <380 ? 12: 24,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },
    numberText :{
        color: Colors.accent500,
        fontSize: deviceWidth <380 ? 28: 36,
        fontWeight:'bold'
        
    }

});
