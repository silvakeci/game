    import { View, Text, Pressable, StyleSheet} from "react-native";
    import Colors from "../../constants/colors";
    
    function PrimaryButton({children, onPress}){
    function pressHandler(){
        console.log('Pressed!');
    }

    return(
        <View style={styles.buttonOuterContenier}>
        <Pressable 
        style={({pressed})=> pressed ? [styles.buttonInnerContainer, styles.pressed]: styles.buttonInnerContainer} 
        onPress={onPress} 
        android_ripple={{color:Colors.primary600}}>
            <Text style={styles.buttontext}>{children}</Text>
        </Pressable>
        </View>
    )
    }  

    export default PrimaryButton;

    const styles= StyleSheet.create({
        buttonOuterContenier:{
            borderRadius:28,
            margin:4,
            overflow: 'hidden'
        },
        buttonInnerContainer: {
            backgroundColor:Colors.primary500,
             paddingVertical: 8,
            paddingHorizontal:16,
            elevation:2,
           
        },
        buttontext:{
            color:'white',
            textAlign:'center'
        },
        pressed:{
            opacity:0.75
        }
    })