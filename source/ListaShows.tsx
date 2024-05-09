import React, { useEffect } from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { getShows } from './ListaShowsApi';
import { styles } from './ListaShowsStyles';
import { IShow } from './ListaShowsTypings';


export const ListaShows = () => {

    const [lista, setLista] = React.useState<IShow[]>([]);
    const [text, onChangeText] = React.useState('');

    const search = () => {
        getShows(text).then((value) => {
            if (value) {
                setLista(value);
            }
        })
    }


    return (
        <View>
            <View style={styles.searchContainer}>
                <Text style={styles.topTitle}>Pesquisar série/filme</Text>
                <View style={styles.menuBar}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                    <TouchableOpacity
                        style={styles.buttonPesquisar}
                        onPress={search}
                        accessibilityLabel="Clique para pesquisar sobre shows e séries"
                    >
                        <Text style={styles.buttonPesquisarFont}>Pesquisar</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.listContainer}>
                <ScrollView>
                    <View style={styles.container}>
                        {lista.map((item: IShow, index: number) => {
                            return (
                                <View style={styles.item} key={`${item.show.name}_${index}_row`}>
                                    <View key={`${item.show.name}_${index}_column`} style={styles.imageColumn}>

                                        {item.show.image?.original && <Image style={styles.imageSize}
                                            source={{
                                                uri: item.show.image.original,
                                            }}
                                        />}

                                    </View>
                                    <View key={`${item.show.name}_${index}_name_column`} style={styles.column}>
                                        <Text style={styles.title}>{item.show.name}</Text>
                                        <View style={styles.row} key={`${item.show.name}_${index}_genres`}>
                                            {item.show.genres.map((genre) => {
                                                return (

                                                    <Text key={`${genre}_${item.show.name}_${index}_genres`} style={styles.chip}>
                                                        {genre}
                                                    </Text>

                                                )
                                            })}
                                        </View>

                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        </View>
    )

}