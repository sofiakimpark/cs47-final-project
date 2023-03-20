import { View, Text , Image, StyleSheet, Dimensions } from "react-native";
import { Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <View></View>
            <Text style={styles.title}>wanderlust</Text>
            <Pressable onPress={() => navigation.navigate('AddScreen')}>
                <Ionicons name="add-outline" size={25} color="white"/>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 32,
        // padding: 40,
        margin: 40,
        paddingLeft: 28,
    },
    header: {
        alignItems: 'center',
        flexDirection: "row",
        padding: 10,
        justifyContent: 'space-between',
        // backgroundColor: 'black',

    },
});

export default Header;