# Measure XR

Measure XR is a web-based Augmented Reality (AR) measurement tool that allows users to measure spaces and objects in their environment using WebXR technology.

![Measure XR Demo](assets/videos/unnamed2.gif)

## Project History & Attribution

This project is based on "Measure Up" created by Google Creative Lab in April 2021. The original experiment is no longer active but served as inspiration for this implementation.

The concept draws from Google's original "Measure" app (2016-2021), which allowed users to measure objects using their device's camera with ARCore technology. After about 5 years of service, the original Measure app was discontinued.

Measure XR continues the legacy of these projects by providing similar functionality through modern web technologies, making AR measurement accessible through the browser without requiring app installation.

## Features

- Real-time AR measurements using WebXR
- Support for metric (cm) measurements
- Intuitive point-and-measure interface
- Privacy-focused: all processing happens locally in the browser
- Responsive design for mobile devices
- Dark/light mode support

## Requirements

- Chrome browser (version 83 or higher)
- Android device with ARCore support
- Internet connection for initial loading

## Usage

1. Visit the application using Chrome on your Android device
2. Grant necessary permissions for camera access
3. Point your phone downward to detect the ground plane
4. Use the pointer to mark measurement points
5. Toggle between measurement units as needed
6. Use the undo button to correct measurements
7. Click "Done" when finished

## Technical Details

The application is built using:
- WebXR Device API
- Three.js (r127)
- Vanilla JavaScript
- HTML5/CSS3

## Privacy

Measure XR is designed with privacy in mind:
- All data processing occurs locally in your browser
- No measurement data leaves your device
- Uses minimal cookies (Google Analytics only)

## Development

To run the project locally:

1. Clone the repository
```bash
git clone https://github.com/measurexr/measurexr.git
```

2. Serve the files using a local web server
3. Access the site through Chrome on Android

## Browser Support

Currently supported:
- Chrome for Android (83+)

Not supported:
- iOS devices
- Desktop browsers
- Other mobile browsers

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Third-Party Licenses

- Three.js - MIT License (included in the application)
