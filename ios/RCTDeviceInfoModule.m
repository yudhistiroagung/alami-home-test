//
//  RCTDeviceInfoModule.m
//  AlamiHomeTest
//
//  Created by Yudhisitiro Agung on 22/09/22.
//

#import "RCTDeviceInfoModule.h"

@implementation DeviceInfoModule

// To export a module named RCTDeviceInfoModule
RCT_EXPORT_MODULE(DeviceInfoModule);

RCT_EXPORT_METHOD(getDeviceUniqueId:(RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock) reject
                  )
{
  NSString *uniqueIdentifier = [[[UIDevice currentDevice] identifierForVendor] UUIDString];
  if (uniqueIdentifier) {
    resolve(uniqueIdentifier);
  } else {
    reject(@"get_device_id_failure", @"no device id found", nil);
  }
}

@end
