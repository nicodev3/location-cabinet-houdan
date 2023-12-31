module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "Black": "#000000",
          "White": "#FFFFFF"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "FiveUnits": "80px",
        "OneAndHalfUnits": "24px",
        "Unit": "16px",
        "TwoUnits": "32px",
        "FourUnits": "64px",
        "SixUnits": "96px",
        "ThreeUnits": "48px",
        "HalfUnit": "8px"
      },
      "borderRadius": {
        "Radius8": "8px",
        "Radius2": "2px",
        "Radius4": "4px",
        "Round": "50%"
      },
      "scale": {
        "XXLarge": "288px",
        "MaxWidth": "1400px",
        "Small": "48px",
        "XSmall": "16px",
        "XLarge": "192px",
        "Large": "144px",
        "Medium": "96px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}