import {StyleSheet, TouchableOpacity, Text} from 'react-native'

const Buttons = ({text, action}) => {

    return(
        <TouchableOpacity onPress={action} style={styles.boton}>
            <Text style={styles.texto}>
                {text}
            </Text>
        </TouchableOpacity>
    );

}

const styles=StyleSheet.create({
    boton:{
        padding: 10,
        backgroundColor: '#0a7d7fff',
        borderRadius: 15
    },
    texto: {
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
        color: "#FFFFFF"
    }
})

export default Buttons;