# ALAMI home test project
This project is a mandatory assigment for recruitment process

### Features
- [x] Get device id by making bridging module on android and ios
  - [x] Android Module
  - [x] iOS Module
- [x] Create cart component that can increment/decrement cart count
- [x] Make a progress bar that can be paused when user press the view

## How to run the app
After cloning the repo, please run the following commands
```
yarn install
```
After you already installed all project dependencies, you can follow the instructions below

#### 1. Run for Android
```
yarn android
```

#### 2. Run for iOS
Before run on ios device, please make sure all ios depedencies are installed correctly by running this commands
```
// go to ios folder
cd ios/
// install dependencies
pod install
// go back to root folder
cd ../
```
Then you should good to go by running 
```
yarn ios
```

