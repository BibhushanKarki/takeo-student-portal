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
      fontSize: 20,
      colorTextLightSolid: `#fff`,
      colorText:`#fff`,
    },
    Menu: {
      colorPrimary: `#1E5FDA`,
      controlItemBgActive: `transparent`,
      itemSelectedColor: `rgb(30, 95, 218)`,
      colorText: `rgb(255, 255, 255)`,
      colorErrorBg: `rgb(255, 255, 255)`,
      colorBgContainer: `rgb(1, 29, 83)`
    },
    Card: {
      colorBgContainer: `rgb(5, 9, 90)`,
      colorText: `rgba(255, 255, 255, 0.88)`,
      colorTextHeading: `rgba(255, 255, 255, 0.88)`,
      headerFontSize: 26,
      fontSize: 16,
      borderRadiusLG: 12,
    },
    Typography: {
      fontSizeHeading1: 50
    },
    Anchor: {
      colorSplit: `rgb(42, 52, 243)`
    },
    Breadcrumb: {
      colorText:` rgb(42, 52, 243)`,
      colorTextDescription: `rgba(255, 255, 255, 0.45)`
    },
    Dropdown: {
      colorBgElevated: `rgb(5, 9, 90)`,
      colorText: `rgba(253, 253, 253, 0.88)`
    },
    Switch: {
      colorPrimary:`rgb(255, 255, 255)`,
      handleBg: `rgb(199, 21, 21)`,
      colorText: `#2A34F3`,
    },
    Layout:{
      bodyBg: `#010747`
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
      itemSelectedColor: `rgb(30, 95, 218)`,
      colorText: `rgb(30, 27, 27)`,
      colorErrorBg: `rgb(255, 255, 255)`
    },
    Typography: {
      fontSizeHeading1: 50
    },
    Anchor: {
      colorSplit: `rgb(42, 52, 243)`
    },
    Breadcrumb: {
      colorText:` rgb(42, 52, 243)`,
      colorTextDescription: `rgba(0, 0, 0, 0.45)`
    },
    Dropdown: {
      colorBgElevated: `rgb(255, 255, 255)`,
      colorText: `rgba(0, 0, 0, 0.88)`
    },
  }
}