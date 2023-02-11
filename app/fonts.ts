import localFont from '@next/font/local';

export const hkCompaktFont = localFont({
  src: [
    {
      path: "./(fonts)/hkcompakt-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./(fonts)/hkcompakt-medium.woff2",
      weight: "500",
      style: "normal"
    },
  ],
  variable: "--font-hkcompakt"
});

export const monumentExtendedBlackFont = localFont({
  src: [
    {
      path: "./(fonts)/monumentextended-black.woff2",
      weight: "800",
      style: "normal"
    }
  ],
  variable: "--font-monumentextended"
})
