import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const Login = () => {
  const [data, setData] = useState(undefined);
  const getAPTData = async () => {
    // Get APT data here.
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPTData();
  }, []);
  return (
    <View>
      <Text>Json Api Data</Text>
      {data ? (
        <View style={{}}>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 20,
              backgroundColor: 'pink',
            }}>
            {data.id}
          </Text>
          <Text
            style={{fontSize: 20, marginBottom: 20, backgroundColor: 'pink'}}>
            {data.title}
          </Text>
          <Text
            style={{fontSize: 20, marginBottom: 20, backgroundColor: 'pink'}}>
            {data.body}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default Login;
