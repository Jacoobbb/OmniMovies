import { Dimensions, Image, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { BACKGROUND_IMAGE, STATUSBAR_HEIGHT } from "../constants";

interface HeaderProps {
    leftElement: JSX.Element;
    leftAction?: () => void;
    rightElement?: JSX.Element;
    rightAction?: () => void;
}

export default function Header(props: HeaderProps) {

    const {leftElement, leftAction, rightElement, rightAction} = props;

    return (
        <View>
            <View style={styles.headerContainer}>
                <Pressable style={styles.headerLeft} onPress={leftAction}>
                    {leftElement}
                </Pressable>
                <Pressable style={styles.headerRight} onPress={rightAction}>
                    {rightElement}
                </Pressable>
            </View>
            <Image style={styles.background} source={BACKGROUND_IMAGE} />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        zIndex: 2, 
        height: (70 + STATUSBAR_HEIGHT), 
        padding: 20, 
        flexDirection: 'row', 
        alignItems: 'center',
        alignSelf: 'center',
        paddingTop: STATUSBAR_HEIGHT
    },
    headerLeft: {
        flex: 1
    },
    headerRight: {
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end'
    },
    background: {
        flex: 1, 
        position: 'absolute', 
        width: '100%', 
        height: Dimensions.get('window').height * 0.6, 
        marginTop: (-70 + STATUSBAR_HEIGHT)
    }
})