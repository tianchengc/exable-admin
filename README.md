[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

## License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License. You may use, share, and adapt this project for non-commercial purposes as long as proper credit is given to the original author(s). For more details, visit [Creative Commons BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).

### :memo: TwoHundredK & Ex-Able End-of-Year Hackathon Overview

- **Duration**: 2 weeks (Nov. 26th to Dec. 10th)
- **Objective**: Become React, TypeScript, and CSS expert in 2 weeks
- **Project Design**: [https://js.design/v?i=gNMMz4&p=zCNLbPnMlU&f=0:1978](https://js.design/v?i=gNMMz4&p=zCNLbPnMlU&f=0:1978)
- **Key Milestone**: A final Demo Day where teams will present their work and celebrate their achievements.

#### :page_facing_up: [Onboarding Document](https://github.com/tianchengc/exable-admin/wiki/Hackathon-Onboarding-Document)

### :wrench: Setup

Clone this repository and install dependencies


```bash
npm install
```

### :wrench: Run App 

```bash
npm run dev
```

### :firefox: Running on Firefox (Localhost)

If you are serving this project on `localhost` and using Firefox, you need to configure Firefox to avoid restrictions related to cookies and HTTPS. Follow these steps:

1. Open Firefox and type `about:config` in the address bar, then press Enter.
2. Accept the warning message to proceed to the advanced settings.
3. Search for the following settings and update them:
   - `network.cookie.sameSite.noneRequiresSecure` → Set this to `false`.
   - *(Optional)* `network.cookie.sameSite.laxByDefault` → Set this to `false` if you encounter issues with cookies.

These changes will allow the app to function correctly in a local development environment without HTTPS.
