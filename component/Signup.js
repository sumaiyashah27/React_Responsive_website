import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import { ScrollView } from 'react-native';

const Login = () => {
  const [data, setData] = useState([]);
  const getAPTData = async () => {
    // Get APT data here.
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPTData();
  }, []);
  return (
    <ScrollView>
      <Text>Json Api Data</Text>
      {data.length
        ? data.map(item => (
            <View style={{}}>
              <Text
                style={{
                  fontSize: 20,
                  marginBottom: 20,
                  backgroundColor: 'pink',
                }}>
                Id: {item.id}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  marginBottom: 20,
                  backgroundColor: 'pink',
                }}>
                Title: {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  marginBottom: 20,
                  backgroundColor: 'pink',
                }}>
                Body: {item.body}
              </Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
};

export default Login;
