import React, { useMemo } from 'react';
import { ActivityIndicator, View, Text, Button } from 'react-native';

import { useGetDeviceId } from '../../hooks';
import s, { btnColor } from './DeviceId.style';

const DeviceId = () => {
  const { get, loading, deviceId } = useGetDeviceId();

  const deviceInfo = useMemo(
    () => (
      <View>
        <Text style={s.label}>Device Unique ID</Text>
        <Text style={s.deviceId}>{deviceId || '-'}</Text>
      </View>
    ),
    [deviceId],
  );

  const activityIndicator = useMemo(() => <ActivityIndicator />, []);

  const button = useMemo(
    () => <Button onPress={get} color={btnColor} title="GET DEVICE ID" />,
    [get],
  );

  return (
    <View style={s.container}>
      {deviceInfo}
      {!deviceId && button}
      {loading && activityIndicator}
    </View>
  );
};

export default DeviceId;
