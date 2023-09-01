import React, { ReactNode } from 'react'
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

interface BoxComponentProps {
    children: ReactNode;
    style?: any;
}

function BoxComponent({ children, style }: BoxComponentProps) {
    return (
        <ScrollView>
            <View style={[styles.box, style]}>
                <StatusBar barStyle="default" hidden={false} />
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

export default BoxComponent;