import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const HomeScreen = () => {
    const [data, setData] = useState(
        [
            {
                "id": "1",
                "title": "Big Buck Bunny",
                "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
                "duration": "8:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "Vlc Media Player",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
                "subscriber": "25254545 Subscribers",
                "isLive": true
            },
            {
                "id": "2",
                "title": "The first Blender Open Movie from 2006",
                "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
                "duration": "12:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "Blender Inc.",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
                "subscriber": "25254545 Subscribers",
                "isLive": true
            },
            {
                "id": "3",
                "title": "For Bigger Blazes",
                "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
                "duration": "8:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "T-Series Regional",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
                "subscriber": "25254545 Subscribers",
                "isLive": true
            },
            {
                "id": "4",
                "title": "For Bigger Escape",
                "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
                "duration": "8:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "T-Series Regional",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
                "subscriber": "25254545 Subscribers",
                "isLive": false
            },
            {
                "id": "5",
                "title": "Big Buck Bunny",
                "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
                "duration": "8:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "Vlc Media Player",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
                "subscriber": "25254545 Subscribers",
                "isLive": true
            },
            {
                "id": "6",
                "title": "For Bigger Blazes",
                "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
                "duration": "8:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "T-Series Regional",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
                "subscriber": "25254545 Subscribers",
                "isLive": false
            },
            {
                "id": "7",
                "title": "For Bigger Escape",
                "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
                "duration": "8:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "T-Series Regional",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
                "subscriber": "25254545 Subscribers",
                "isLive": true
            },
            {
                "id": "8",
                "title": "The first Blender Open Movie from 2006",
                "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
                "duration": "12:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "Blender Inc.",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
                "subscriber": "25254545 Subscribers",
                "isLive": false
            }
        ]
    )
    const [data1, setData1] = useState(
        [
            {
                "id": "1",
                "title": "Big Buck Bunny",
                "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
                "duration": "8:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "Vlc Media Player",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
                "subscriber": "25254545 Subscribers",
                "isLive": true
            },
            {
                "id": "2",
                "title": "The first Blender Open Movie from 2006",
                "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
                "duration": "12:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "Blender Inc.",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
                "subscriber": "25254545 Subscribers",
                "isLive": true
            },
            {
                "id": "3",
                "title": "For Bigger Blazes",
                "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
                "duration": "8:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "T-Series Regional",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
                "subscriber": "25254545 Subscribers",
                "isLive": true
            },
            {
                "id": "4",
                "title": "For Bigger Escape",
                "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
                "duration": "8:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "T-Series Regional",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
                "subscriber": "25254545 Subscribers",
                "isLive": false
            },
            {
                "id": "5",
                "title": "Big Buck Bunny",
                "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
                "duration": "8:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "Vlc Media Player",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
                "subscriber": "25254545 Subscribers",
                "isLive": true
            },
            {
                "id": "6",
                "title": "For Bigger Blazes",
                "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
                "duration": "8:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "T-Series Regional",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
                "subscriber": "25254545 Subscribers",
                "isLive": false
            },
            {
                "id": "7",
                "title": "For Bigger Escape",
                "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
                "duration": "8:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "T-Series Regional",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
                "subscriber": "25254545 Subscribers",
                "isLive": true
            },
            {
                "id": "8",
                "title": "The first Blender Open Movie from 2006",
                "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
                "duration": "12:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "Blender Inc.",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
                "subscriber": "25254545 Subscribers",
                "isLive": false
            }
        ]
    )

    const [titles, setTitle] = useState('')

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.listCon}>
                <View style={styles.imgCon}>
                    <Image source={{ uri: item.thumbnailUrl }} style={styles.imgStyle} resizeMode='contain' />

                </View>
                <View style={styles.videoTitleCon}>
                    <Text style={styles.videoTitleText}>{item.title}</Text>
                </View>
                <View style={styles.arrowCon}>
                    <AntDesign name='right' size={18} color='lightgrey' />
                    {/* <Text>icon</Text> */}
                </View>
            </TouchableOpacity>
        )
    }

    const searchData = (text) => {
        // setTitle(text)

        const newData = data1.filter(item => {
            return item.title.toLowerCase().includes(text.toLowerCase())
        })
        setData(newData)
    }


    return (
        <View style={styles.mainCon}>
            <View style={styles.titleCon}>
                <Text style={styles.titleText}>Videos</Text>
            </View>
            <View style={styles.searchBoxCon}>
                <TextInput placeholder='Search'
                    // value={titles}
                    onChangeText={text => searchData(text)}
                />
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
            />

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    searchBoxCon: {
        marginHorizontal: '5%',
        borderWidth: 1,
        borderRadius: 10,
        height: 40
    },
    videoTitleText: {
        fontSize: 16,
        color: 'black',
        // fontWeight: '500',
        width: '95%'
    },
    arrowCon: {
        width: '10%',
        // backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    videoTitleCon: {
        width: '70%',
        // backgroundColor: 'green',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    imgCon: {
        width: '20%',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    listCon: {
        marginTop: 5,
        marginHorizontal: '4%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 5,
        borderColor: 'lightgrey',
    },
    imgStyle: {
        height: 40,
        width: 40,
        borderRadius: 4
    },
    titleText: {
        fontSize: 26,
        color: '#000',
        fontWeight: 'bold'
    },
    titleCon: {
        marginHorizontal: '5%',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginTop: 10
    },
    mainCon: {
        flex: 1
    }
})