import localFont from "next/font/local";

export const pilat = localFont({
  src: [
    {
      path: "../../public/fonts/pilat/PilatExtended-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/pilat/PilatExtended-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/pilat/PilatExtended-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/pilat/PilatExtended-Book.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/pilat/PilatExtended-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/pilat/PilatExtended-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/pilat/PilatExtended-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/pilat/PilatExtended-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-pilat",
  display: "swap",
});

export const industry = localFont({
  src: [
    {
      path: "../../public/fonts/industry/Industry-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-industry",
  display: "swap",
});
