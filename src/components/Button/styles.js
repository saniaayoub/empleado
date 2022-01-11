import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrix } from "../../config";

const styles = StyleSheet.create({
    floatingButtonView: {
        width: Metrix.HorizontalSize(60),
        height: Metrix.HorizontalSize(60),
        backgroundColor: Colors.Primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Metrix.HorizontalSize(60) / 2,
        position: "absolute",
        bottom: Metrix.VerticalSize(40),
        right: Metrix.HorizontalSize(20)
    },
    textStyle: {
        letterSpacing: 0.4,
        color: Colors.Text,
        fontFamily: Fonts["Montserrat-Medium"],
        fontSize: Metrix.FontRegular
    },
    standardView: {
        width: Metrix.HorizontalSize(280),
        height: Metrix.VerticalSize(50),
        backgroundColor: Colors.Button,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Metrix.fullRadius,
    },
});

export default styles;