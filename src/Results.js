import React, { Component } from 'react';
import {
    Clipboard,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

export default class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            copy: false
        };
    }

    copyQR = () => {
        Clipboard.setString(this.props.qrcode);

        this.setState({
            copy: true
        });
    }

    render() {
        const copy = this.state.copy ?
            <Text style={styles.copy}>QR Code copied</Text> :
            <TouchableHighlight style={styles.button} onPress={this.copyQR}>
                <Text>Copy QR Code</Text>
            </TouchableHighlight>

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Scanned QR Code</Text>

                <Text style={styles.qrcode}>{this.props.qrcode}</Text>

                <View>
                    {copy}

                    <TouchableHighlight style={styles.button} onPress={() => this.props.scanAgain()}>
                        <Text>Scan again</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#111'
    },
    title: {
        textAlign: 'center',
        margin: 20,
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    qrcode: {
        textAlign: 'center',
        margin: 20,
        padding: 20,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 20,
        color: 'white'
    },
    button: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 10,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    copy: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 10,
        padding: 20,
        color: 'white'
    }
});