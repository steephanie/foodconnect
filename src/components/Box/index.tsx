import React, { ReactNode } from 'react'
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

interface BoxProps {
    children: ReactNode;
    style?: any;
}

function Box({ children, style }: BoxProps) {
    return (
        <ScrollView>
            <View style={[styles.box, style]}>
                <StatusBar barStyle="dark-content" hidden={false} />
                {children}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    box: {
        display: 'flex',
        flex: 1,
        padding: 10,
        marginTop: 40,
    },
});

export default Box;