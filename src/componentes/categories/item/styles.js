import { StyleSheet } from "react-native";
import { COLORS,FONTS } from "../../../themes";

export const styles = StyleSheet.create({

    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        borderRadius:10,
        marginBottom:10,

    },
    ImageBackground: {
        width:'100%',
        height:150,
        justifyContent:'flex-end',
    },
    categoryName: {
        fontSize:20,
        fontFamily:FONTS.bold,
        color:COLORS.wihte,
        padding:20,
        textShadowColor:'rgba(0,0,0,0.75)',
        textShadowOffset:{whidth:-1,height:1},
        textShadowRadius:6,
    },

})