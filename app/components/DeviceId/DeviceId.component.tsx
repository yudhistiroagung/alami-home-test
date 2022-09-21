import React, { useMemo } from 'react';
import { ActivityIndicator, View, Text, Button } from 'react-native';

import { useGetDeviceId } from '../../hooks';
import s, { btnColor } from './DeviceId.style';

const DeviceId = () => {
  const { get, deviceId, loading, error } = useGetDeviceId();

  const errorMessage = useMemo(
    () => <Text style={s.error}>Something went wrong, try again.</Text>,
    [],
  );

  const deviceInfo = useMemo(
    () => (
      <View>
        <Text style={s.label}>Device Unique ID</Text>
        {error && errorMessage}
        {!error && <Text style={s.deviceId}>{deviceId || '-'}</Text>}
      </View>
    ),
    [deviceId, error, errorMessage],
  );

  const activityIndicator = useMemo(() => <ActivityIndicator />, []);

  const button = useMemo(
    () => <Button onPress={get} color={btnColor} title="GET DEVICE ID" />,
    [get],
  );

  return (
    <View style={s.container}>
      {deviceInfo}
      {!deviceId && !loading && button}
      {loading && activityIndicator}
    </View>
  );
};

export default DeviceId;
