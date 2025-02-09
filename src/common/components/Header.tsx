import React from "react";
import { Dimensions, Pressable, StyleSheet } from "react-native";
import Animated, { interpolate, interpolateColor, SharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";
import { BACKGROUND_IMAGE, STATUSBAR_HEIGHT } from "../constants";

interface HeaderProps {
    leftElement: JSX.Element;
    leftAction?: () => void;
    rightElement?: JSX.Element;
    rightAction?: () => void;
    hasGradient?: boolean;
    scrollY?: SharedValue<number>;
}

export default function Header(props: HeaderProps) {
    const { leftElement, leftAction, rightElement, rightAction, hasGradient, scrollY } = props;

    const headerAnimatedStyle = scrollY && useAnimatedStyle(() => {
        const backgroundColor = withSpring(interpolateColor(scrollY.value, [0, 100], ['transparent', '#000000']));
        const paddingLeft = withSpring(interpolate(scrollY.value, [0, 100], [20, 25], 'clamp'));
        const paddingRight = withSpring(interpolate(scrollY.value, [0, 100], [20, 25], 'clamp'));
        return {
            backgroundColor,
            paddingLeft,
            paddingRight
        };
    });

    const gradientAnimatedStyle = scrollY && hasGradient && useAnimatedStyle(() => {
        const translateY = interpolate(scrollY.value, [0, 100], [0, -scrollY.value], 'clamp');
        return {
            transform: [{ translateY }]
        };
    });

    return (
        <>
            <Animated.View style={[styles.headerContainer, headerAnimatedStyle]}>
                <Pressable style={styles.headerLeft} onPress={leftAction}>
                    {leftElement}
                </Pressable>
                <Pressable style={styles.headerRight} onPress={rightAction}>
                    {rightElement}
                </Pressable>
            </Animated.View>

            {hasGradient && (
                <Animated.Image
                    style={[styles.background, gradientAnimatedStyle]}
                    source={BACKGROUND_IMAGE}
                />
            )}
        </>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        zIndex: 2,
        height: (50 + STATUSBAR_HEIGHT),
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        paddingTop: (STATUSBAR_HEIGHT),
    },
    headerLeft: {
        flex: 1,
    },
    headerRight: {
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end',
    },
    background: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: Dimensions.get('window').height * 0.6,
        marginTop: (-70 + STATUSBAR_HEIGHT),
    },
});
