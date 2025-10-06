import { Outfit } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"
import { AllContextProvider } from "./context/allcontext";
import LendYourVoice from "./components/Modals/LendYourVoice"
import JoinTournament from "./components/Modals/JoinTournament" 
import PartnerWithUs from "./components/Modals/PartnerWithUs"
import PremiumMember from "./components/Modals/PremiumMember"
import PremiumThankYouMember from "./components/Modals/PremiumThankYouModal";
import FreeThankYouModal from "./components/Modals/FreeThankYouModal";
import PartnerThankYouMessage from "./components/Modals/PartnerThankYouMessage";
import LendVoiceThankYouMessage from "./components/Modals/LendVoiceThankYouMessage";
import LendYourVoiceMobileSideBar from "./components/Modals/LendYourVoiceMobileLinks"
import PartnerMobileSideBar from "./components/Modals/PartnerMobileLinks"


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-outfit",
});

const clashDisplay = localFont({
  src: [
    {
      path: "./utils/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./utils/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
     {
      path: "./utils/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-clash",
});

export const metadata = {
  title: "Thribe Community",
  description: "Thribe community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${outfit.variable} ${clashDisplay.variable} font-[400] antialiased text-[18px] sm:text-[20px]`}> 
     <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body 
        className={outfit.className}>
         <AllContextProvider>
            <LendYourVoice />
            <JoinTournament />
            <PartnerWithUs />
            <PremiumMember />
            <PremiumThankYouMember />
             <PartnerThankYouMessage />
            <LendYourVoiceMobileSideBar />
            <PartnerMobileSideBar />
            <LendVoiceThankYouMessage />
            <FreeThankYouModal />
            {children}
        </AllContextProvider>
      </body>
    </html>
  );
}
