import {StyleSheet, TouchableOpacity, Text} from 'react-native'

const Buttons = ({texto, action}) => {

    return(
        <TouchableOpacity onPress={action} styles={styles.boton}>
            <Text styles={styles.texto}>
                {texto}
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