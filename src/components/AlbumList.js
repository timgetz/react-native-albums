//Import a library to help create a component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList  extends Component {

    state = {
        albums: []
    };

    componentWillMount() {
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
          .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
// const styles = {
//     viewStyle: {
//         backgroundColor: '#F8F8F8',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: 60,
//         paddingTop: 15,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2
//         },
//         shadowOpacity: 0.2,
//         elevation: 2,
//         position: 'relative'
//     },
//     textStyle: {
//         fontSize: 20
//     }
// };

export default AlbumList;