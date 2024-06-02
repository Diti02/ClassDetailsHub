// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions, ToastAndroid, Platform, Alert } from 'react-native';
import Toast from 'react-native-toast-message'

const { width: screenWidth } = Dimensions.get('window');

const images = [
  { id: '1', uri: 'https://img.freepik.com/free-photo/smiling-young-female-teacher-sits-table-with-school-supplies-points-blackboard-with-pointer-stick-showing-thumb-up-classroom_141793-120078.jpg?t=st=1717264059~exp=1717267659~hmac=1b78091d21016e775bb468d955974ad5884573a09fc52f0f13dd8ce030424e7d&w=740' },
  { id: '2', uri: 'https://img.freepik.com/free-photo/young-woman-teacher-wearing-glasses-standing-near-blackboard-classroom-explaining-lesson-pointing-with-index-finger-blackboard-smiling-confident_141793-133120.jpg?size=626&ext=jpg&ga=GA1.1.1917939237.1717264004&semt=sph' },
  { id: '3', uri: 'https://as2.ftcdn.net/v2/jpg/02/37/57/11/1000_F_237571142_VA5kg8IaT9F7kaCXZ5K9vaQLbcYYioX4.jpg' }
];

const DotIndicator = ({ active }) => (
  <View style={[styles.dot, active ? styles.activeDot : styles.inactiveDot]} />
);

const App = () => {
  const scrollViewRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      scrollViewRef.current.scrollTo({ x: nextIndex * screenWidth, animated: true });
      setActiveIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleReserve = () => {
    if (Platform.OS === 'android') {
      
      Toast.show({
        type: 'success',
        text1: 'Reservation successful',
        text2: 'Physics Classes',
        visibilityTime: 4000,
        position: 'bottom',
      });
    } else {
      Alert.alert('Reservation successful');
    }
  };
  const handleInvite = () => {
    if (Platform.OS === 'android') {
      
      Toast.show({
        type: 'success',
        text1: 'Invite others',
        visibilityTime: 4000,
        position: 'bottom',
      });
    } else {
      Alert.alert('Invited successfully');
    }
  };

  const handleAdd = () => {
    if (Platform.OS === 'android') {      
      Toast.show({
        type: 'success',
        text1: 'Opening Add More',
        visibilityTime: 4000,
        position: 'bottom',
      });
    } else {
      Alert.alert('Opening Add More');
    }
    
  };
 
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            ref={scrollViewRef}
            onScroll={(event) => {
              const scrollPosition = event.nativeEvent.contentOffset.x;
              const currentIndex = Math.round(scrollPosition / screenWidth);
              setActiveIndex(currentIndex);
            }}
            scrollEventThrottle={16}
          >
            {images.map((image) => (
              <Image key={image.id} source={{ uri: image.uri }} style={styles.image} />
            ))}
          </ScrollView>
          <View style={styles.pagination}>
            {images.map((_, index) => (
              <DotIndicator key={index} active={index === activeIndex} />
            ))}
          </View>
          <View style={styles.hr} />
        </View>
        
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Class Details Hub</Text>
          <Text style={styles.description}>Physics: Instructor Dr. Pauline Adams</Text>
          <Text style={styles.time}>Sun, May 19 · 9:00 AM - 10:45 AM</Text>
          <Text style={styles.location}>Central Park, New York City</Text>
          {/* <TouchableOpacity style={styles.inviteButton}>
            <Text style={styles.buttonText} onPress={handleInvite}>Invite others</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText} onPress={handleAdd}>Add more</Text>
          </TouchableOpacity> */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.fullWidthButton} onPress={handleInvite}>
              <Text style={styles.buttonText}>Invite others</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fullWidthButton} onPress={handleAdd}>
              <Text style={styles.buttonText}>Add more</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.additionalInfo}>Practicals: Quantum Mechanics, Light & Optics</Text>
          
          <View style={styles.reviews}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            <Text style={styles.reviewScore}>4.9/5 (100+)</Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>See all reviews</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cancellation}>
            <Text style={styles.sectionTitle}>Cancellation policy</Text>
            <Text style={styles.cancellationText}>Cancel 12 hours in advance to avoid a late cancellation fee. A missed reservation will result in a €11.00 fee.</Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>Learn more</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.about}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.cancellationText}>Taught over 2500+ students for the last 5 years</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.reserveButtonContainer}>
        <Text style={styles.credits}>3 credits</Text>
        <TouchableOpacity style={styles.reserveButton} onPress={handleReserve}>
          <Text style={styles.reserveButtonText}>Reserve</Text>
        </TouchableOpacity>
              </View>
              <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 60,
  },
  imageContainer: {
    height: 250,
    marginVertical: 20,
  },
  image: {
    width: screenWidth,
    height: 250,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'white',
  },
  inactiveDot: {
    backgroundColor: 'black',
  },
  hr: {
    height: 10,
    backgroundColor: '#696969',
    
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 5,
    color: 'green',
    fontStyle: 'italic',
    fontWeight: 'bold',
    
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 10
  },
  fullWidthButton: {
    flex: 1,
    backgroundColor: 'black',
    paddingVertical: 10,
    borderRadius: 5,
  },
  time: {
    fontSize: 18,
    marginBottom: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  location: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
    fontStyle: 'italic',
    
  },
  inviteButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  additionalInfo: {
    fontSize: 18,
    marginVertical: 10,
  },
  
  reviews: {
    // marginTop: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  reviewScore: {
    fontSize: 18,
    marginTop: 5,
  },
  linkText: {
    color: '#007bff',
    fontSize: 18,
    marginTop: 5,
  },
  cancellation: {
    marginTop: 20,
  },
  
  cancellationText: {
    fontSize: 18,
    marginVertical: 5,
  },
  about: {
    marginVertical: 20,
  },
  reserveButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: '#D3D3D3',
    borderTopWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  credits: {
    fontSize: 18,
    fontWeight:'bold'
  },
  reserveButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  reserveButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
