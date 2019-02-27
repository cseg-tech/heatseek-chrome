# heatseek-chrome
Chrome Extension for Heat Seek

## Developer Installation
1. Clone the repository
2. Open Google Chrome
3. Top-right menu - `More Tools` - `Extensions`
4. Top-right `Developer mode` toggle `on`
5. `Load unpacked`
6. Select repository folder
7. Installed! Extension will automatically update with changes
8. Any errors with the extension will show up under the `Errors` button to the right of the `Remove` button in the card for the sensor

## Notes
- Read the Chrome Extension Overview linked below for how the extension js structure is organized
- Inline scripts **and** inline event handlers are [not allowed](https://developer.chrome.com/extensions/contentSecurityPolicy#JSExecution). That means no `<button onclick="...">`
- Avoiding jquery for `popup.js`, maybe for `sensor.js`?
- Also open to bootstrapping the sensor page for convenience

## Style
- Tell the rest of the team if you feel strongly about any elements.
- Current tabbing: **two space tabs**. 
- JS strings: **single quotes**
- HTML strings: **double quotes**

## Chrome Extension Resources
Getting Started Tutorial [https://developer.chrome.com/extensions/getstarted ]
Chrome Extension Overview [https://developer.chrome.com/extensions/overview ]
Manifest File Format [https://developer.chrome.com/extensions/manifest ]
Extensions Devguide [https://developer.chrome.com/extensions/devguide ]

## Design Resources
Chrome extension UI documentation [https://developer.chrome.com/extensions/user_interface ]
Heat Seek visual guidelines [https://github.com/heatseeknyc/heat-seek-nyc-front-end/tree/master/assets/visual-guidelines ]
Chrome extension UI examples [https://uxplanet.org/chrome-extension-popups-design-inspiration-b38de2cbd589 ]


## Hardware Comms Resources
Google Developers USB devices guide [https://developers.google.com/web/updates/2016/03/access-usb-devices-on-the-web#talk_to_an_arduino_usb_board ]

## File tree

```bash
heatseek-chrome
├── README.md
├── imgs
│   ├── icons				extension icon/favicon
│   │   ├── 128.png
│   │   ├── 16.png
│   │   └── 48.png
│   └── logo.png			extension header img
├── js
│   ├── background.js 		unused
│   ├── popup.js 			popup js
│   └── sensor.js 			sensor page js
├── manifest.json 			extension required
├── popup.html 				popup html
├── sensor.html 			sensor html
└── style
    ├── popup.css 			popup css
    └── sensor.css 			sensor css
```