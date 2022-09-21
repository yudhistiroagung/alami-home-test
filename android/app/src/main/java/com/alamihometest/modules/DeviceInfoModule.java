package com.alamihometest.modules;

import android.provider.Settings;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class DeviceInfoModule extends ReactContextBaseJavaModule {

    public static final String NAME = "DeviceInfoModule";

    public DeviceInfoModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return DeviceInfoModule.NAME;
    }

    @ReactMethod
    public void getDeviceUniqueId(Promise promise) {
        try {
            String uniqueId = Settings.Secure.getString(
                    this.getReactApplicationContext().getContentResolver(),
                    Settings.Secure.ANDROID_ID
            );
            promise.resolve(uniqueId);
        } catch (Exception e) {
            promise.reject(new Error("Cannot obtain device unique id", e));
        }
    }
}
