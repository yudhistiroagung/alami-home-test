import React, { useMemo } from 'react';
import { View, Text, Button } from 'react-native';

import s, { btnColor } from './DeviceId.style';

const DeviceId = () => {
  const deviceInfo = useMemo(
    () => (
      <View>
        <Text style={s.label}>Device Unique ID</Text>
        <Text style={s.deviceId}>ASD-123123</Text>
      </View>
    ),
    [],
  );

  const button = useMemo(
    () => <Button color={btnColor} title="GET DEVICE ID" />,
    [],
  );

  return (
    <View style={s.container}>
      {deviceInfo}
      {button}
    </View>
  );
};

export default DeviceId;
