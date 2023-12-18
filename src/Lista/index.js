import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

class Lista extends Component {

    constructor(props) {
        super(props)
        this.state = {
            feed: this.props.data
        };
    }

    render() {
        return (
            <View style={styles.areaFeed}>
                <View style={styles.viewPerfil}>
                    <Image
                        source={{ uri: this.state.feed.imgperfil }}
                        style={styles.fotoPerfil}
                    />
                    <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>

                </View>
                <Image
                    resizeMode="cover"
                    source={{ uri: this.state.feed.imgPublicacao }}
                    style={styles.fotoPublicacao}
                />

                <View style={styles.areaBtn}>
                    <TouchableOpacity>
                        <Image 
                        source={require('../img/like.png')}
                        style={styles.iconeLike}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSend}>
                        <Image 
                        source={require('../img/send.png')}
                        style={styles.iconeLike}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}>
                        {this.state.feed.nome}
                    </Text>
                    <Text style={styles.descRodape}>
                        {this.state.feed.descricao}
                    </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    areaFeed: {

    },

    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,

    },

    fotoPerfil: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },

    nomeUsuario: {
        fontSize: 23,
        textAlign: 'left',
        color: '#000000',
    },

    fotoPublicacao: {
        flex: 1,
        height: 400,
        alignItems: 'center',
    },

    areaBtn: {
        flexDirection: 'row',
        padding: 5,
    },
    iconeLike: {
        width: 33,
        height: 33,
    },
    btnSend: {
        paddingLeft: 5,
    },
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nomeRodape: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
        paddingLeft: 5,
    },
    descRodape: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000',
    },
});

export default Lista;