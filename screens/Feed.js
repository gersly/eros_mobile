import React from 'react'
import { View, Text, TextInput, Alert, Image, Animated, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import TopTab from '../navigation/TopTab'

//styling
import {theme_style} from '../styles/theme'

//components
import StickyParallaxHeader from 'react-native-sticky-parallax-header'
import { Entypo } from '@expo/vector-icons'; 

export default class Feed extends React.Component {

    state = {
      scroll: new Animated.Value(0)
    }
  
    componentDidMount() {
      const { scroll } = this.state
      scroll.addListener(({ value }) => (this._value = value))
    }
  
    renderChildren = () => (
        <View style={{padding: 10, marginTop: 10}}>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        </View>
    )

  
    renderForeground = () => {
      const { scroll } = this.state
      const titleOpacity = scroll.interpolate({
        inputRange: [0, 106, 154],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp'
      })
  
      return (
        <View style={styles.foreground}>
          <Animated.View style={{ opacity: titleOpacity, flex: 1 }}>
            <Text style={styles.message}>Welcome,</Text>
            <Text style={styles.messageTitle}>Gerson</Text>
            <Text style={{marginVertical: 14, color: '#fff', fontWeight: 'bold', fontSize: 18}}>What are you trying to find out?</Text>
          </Animated.View>
        </View>
      )
    }
  
    renderHeader = () => {
        const {navigation} = this.props
      const { scroll } = this.state
      const opacity = scroll.interpolate({
        inputRange: [0, 90, 190],
        outputRange: [0, 0, 1],
        extrapolate: 'clamp'
      })
      
      return (
        <View style={styles.headerWrapper}>
          <Animated.View style={{ opacity, flex: 1, flexDirection: 'row' }}>
            <View style={{flex: 1, justifyContent: 'flex-end' }}>
            <View style={{backgroundColor: '#fff',  justifyContent: 'center', alignItems: 'center', padding: 4, borderRadius: 6}}>
            <Image source={require('../assets/icon.png')} style={{width: 32, height: 32}} />
            </View>
            
            </View>
            <View style={{flex: 7.5, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => navigation.navigate("Create Question")}>
            <Entypo name="new-message" size={28} color="#fff" />
            </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      )
    }
  
    render() {
      const { scroll } = this.state
       
      return (
        <View style={styles.container}>
        <StickyParallaxHeader
          foreground={this.renderForeground()}
          header={this.renderHeader()}
          parallaxHeight={130}
          headerHeight={90}
          headerSize={() => {}}
          scrollEvent={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scroll } } }],
              {useNativeDriver: false}
        )}
        snapToEdge={true}
        bounces={false}
        snapValue={0}
        >
        <View style={{flex: 1, backgroundColor: '#ebebeb', marginTop: 75}}>
       
            <TopTab />
        </View>
        </StickyParallaxHeader>
       
        </View>
      )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:theme_style.droidSafeArea.backgroundColor
    },
    content: {
        marginTop: 170
      },
      foreground: {
          backgroundColor: theme_style.droidSafeArea.backgroundColor,
        flex: 1,
        padding: 12,
        height: 130,
        justifyContent: 'flex-start'
      },
      message: {
        color: 'white',
        fontSize: 22,
        // paddingTop: 22,
      },
      messageTitle: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
      },
      headerWrapper: {
        backgroundColor: theme_style.droidSafeArea.backgroundColor,
        height: 90,
        flex: 1,
        padding: 12,
        marginTop: theme_style.droidSafeArea.paddingTop,
        flexDirection: 'row',
      },
      headerTitle: {
        fontSize: 16,
        color: 'white',
        margin: 12
      }
})


