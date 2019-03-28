cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-firebase/www/firebase.js",
        "id": "cordova-plugin-firebase.FirebasePlugin",
        "pluginId": "cordova-plugin-firebase",
        "clobbers": [
            "FirebasePlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ionic-keyboard/www/ios/keyboard.js",
        "id": "cordova-plugin-ionic-keyboard.keyboard",
        "pluginId": "cordova-plugin-ionic-keyboard",
        "clobbers": [
            "window.Keyboard"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
        "id": "cordova-plugin-ionic-webview.IonicWebView",
        "pluginId": "cordova-plugin-ionic-webview",
        "clobbers": [
            "Ionic.WebView"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
        "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
        "pluginId": "cordova-plugin-ionic-webview",
        "clobbers": [
            "cordova.exec"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});