export default {
  ios: {
    googleServicesFile: process.env.GOOGLE_SERVICES_PLIST,
  },
  android: {
    googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
  },
  expo: {
    name: 'movieIt',
    slug: 'movieApp',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#000',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.monvance.movieIt',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
        googleServicesFile: './google-services.json',
      },
      package: 'com.monvance.movieIt',
    },
    web: {
      favicon: './assets/favicon.png',
      bundler: 'metro',
    },
    plugins: ['expo-router', 'expo-localization', 'expo-secure-store'],
    scheme: 'your-app-scheme',
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: '9cb0c9d3-79d1-4a50-820a-00b7171cd879',
      },
    },
    runtimeVersion: {
      policy: 'appVersion',
    },
    updates: {
      url: 'https://u.expo.dev/9cb0c9d3-79d1-4a50-820a-00b7171cd879',
    },
    owner: 'monvance',
  },
};
