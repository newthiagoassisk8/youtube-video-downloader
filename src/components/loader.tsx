import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

type LoaderProps = {
  progress?: number;
};

const Loader: React.FC<LoaderProps> = ({ progress }) => {
  const percentage = Math.round((progress ?? 0) * 100);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container]}>
        <View style={styles.innerContainer}>
          <ActivityIndicator size="large" color="#00ff00" />
          {typeof progress === 'number' && (
            <Text style={styles.progressText}>{percentage}%</Text>
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  progressText: {
    marginTop: 12,
    fontSize: 18,
    color: '#00ff00',
    fontWeight: 'bold',
  },
});

export default Loader;
