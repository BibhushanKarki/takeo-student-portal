// theme/themeConfig.ts
import type { ThemeConfig } from 'antd';

export const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: `#011d53`,
    colorInfo: `#011d53`,
    colorLink: `#000`,
    fontSize: 16,
    borderRadius: 8,
    boxShadow:  `5px 5px 10px 0px #000000BF`,
    wireframe: false,
    colorPrimaryText: `#ffffff`,
    colorLinkHover: `#2a34f3`,
    colorPrimaryBg: `#010747`
  },
  components: {
    Button: {
      colorBgContainer: `rgb(10, 19, 180)`,
      colorBorder: `rgb(10, 19, 180)`,
      fontSize: 20
    },
    Menu: {
      colorPrimary: `#1E5FDA`,
      colorBgContainer: `rgb(1, 29, 83)`,
      controlItemBgActive: `transparent`,
      colorText: `#fff`
    }
  },
}

export const lightTheme = {
  token: {
    colorPrimary: `#011d53`,
    colorInfo: `#011d53`,
    colorLink: `#000`,
    fontSize: 16,
    borderRadius: 8,
    boxShadow:  `5px 5px 10px 0px #000000BF`,
    wireframe: false,
    colorPrimaryText: `#ffffff`,
    colorLinkHover: `#2a34f3`,
    colorPrimaryBg: `#010747`
  },
  components: {
    Button: {
      colorBgContainer: `rgb(10, 19, 180)`,
      colorBorder: `rgb(10, 19, 180)`,
      fontSize: 20
    },
    Menu: {
      colorPrimary: `#1E5FDA`,
      colorBgContainer: `#fff`,
      controlItemBgActive: `transparent`,
      colorText: `#1E1B1B`
    }
  }
}


