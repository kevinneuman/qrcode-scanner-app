import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Camera from 'react-native-camera';

export default class Scanner extends Component {
    barcodeReceived = (e) => {
        this.props.onRead(e.data);
    }

    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                    onBarCodeRead={this.barcodeReceived}>

                    <View style={styles.rectangleContainer}>
                        <View style={styles.rectangle} />
                    </View>
                </Camera>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    rectangleContainer: {
        backgroundColor: 'transparent',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rectangle: {
        backgroundColor: 'transparent',
        height: 220,
        width: 220,
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center'
    },
});