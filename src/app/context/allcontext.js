"use client"

import { createContext, useContext, useState } from "react";
const AllContext = createContext();

export const AllContextProvider = ({children}) => {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const [lendYourVoiceThribeModal, setLendYourVoiceThribeModal] = useState(false)
    const [joinTournament, setJoinTournament] = useState(false)
     const [partnerWithUs, setPartnerWithUs] = useState(false)
     const [premiumMemberModal, setPremiumMemberModal] = useState(false)
     const [premiumThankYouModal, setPremiumThankYouModal] = useState(false)
     const [freeThankYouModal, setFreeThankYouModal] = useState(false)
     const [partnerThankYouModal, setPartnerThankYouModal] = useState(false)
      const [lendVoiceThankYouModal, setLendVoiceThankYouModal] = useState(false)
     const [lendYourVoiceMobileSideBar, setLendYourVoiceMobileSideBar] = useState(false);
      const [partnerMobileSideBar, setPartnerMobileSideBar] = useState(false);

    const toggleMobileNavbarFunction = () => setToggleNavbar((prev) => !prev)

    const toggleLendYourVoiceMobileSideBar = () => {
            setPartnerThankYouModal(false)
             setJoinTournament(false)
            setPartnerWithUs(false)
            setLendYourVoiceThribeModal(false)
            setPremiumMemberModal(false)
            setPremiumThankYouModal(false)
            setFreeThankYouModal(false)
            setPartnerMobileSideBar(false)
             setLendVoiceThankYouModal(false)
            setLendYourVoiceMobileSideBar((prev) => !prev)
    }

    const togglePartnerMobileSideBar = () => {
         setPartnerMobileSideBar(false)
            setPartnerThankYouModal(false)
             setJoinTournament(false)
            setPartnerWithUs(false)
            setLendYourVoiceThribeModal(false)
            setPremiumMemberModal(false)
            setPremiumThankYouModal(false)
            setLendYourVoiceMobileSideBar(false)
            setFreeThankYouModal(false)
             setLendVoiceThankYouModal(false)
            setPartnerMobileSideBar((prev) => !prev)
    }

    const togglePartnerThankYouModal = () => {
            setPremiumThankYouModal(false)
             setPartnerMobileSideBar(false)
            setJoinTournament(false)
            setPartnerWithUs(false)
            setLendYourVoiceThribeModal(false)
            setPremiumMemberModal(false)
             setLendVoiceThankYouModal(false)
             setFreeThankYouModal(false)
            setPartnerThankYouModal((prev) => !prev)
            setLendYourVoiceMobileSideBar(false)
    }

    const toggleLendVoiceThankYouModal = () => {
            setPremiumThankYouModal(false)
             setPartnerMobileSideBar(false)
            setJoinTournament(false)
            setPartnerWithUs(false)
            setLendYourVoiceThribeModal(false)
            setPremiumMemberModal(false)
            setPartnerThankYouModal(false)
            setFreeThankYouModal(false)
            setLendVoiceThankYouModal((prev) => !prev)
            setLendYourVoiceMobileSideBar(false)

    }

    const togglePremiumThankYouModal = () => {
             setJoinTournament(false)
             setPartnerThankYouModal(false)
            setPartnerMobileSideBar(false)
            setPartnerWithUs(false)
            setLendYourVoiceThribeModal(false)
            setPremiumMemberModal(false)
            setFreeThankYouModal(false)
             setLendVoiceThankYouModal(false)
            setPremiumThankYouModal((prev) => !prev)
            setLendYourVoiceMobileSideBar(false)

    }

        const toggleFreeThankYouModal = () => {
             setJoinTournament(false)
             setPartnerThankYouModal(false)
            setPartnerMobileSideBar(false)
            setPartnerWithUs(false)
            setLendYourVoiceThribeModal(false)
            setPremiumMemberModal(false)
            setFreeThankYouModal((prev) => !prev)
             setLendVoiceThankYouModal(false)
            setPremiumThankYouModal(false)
            setLendYourVoiceMobileSideBar(false)
    }


    const togglePremiumMemberModal = () => {
            setJoinTournament(false)
             setPartnerMobileSideBar(false)
            setPartnerWithUs(false)
            setPartnerThankYouModal(false)
            setLendYourVoiceThribeModal(false)
            setPremiumThankYouModal(false)
            setLendYourVoiceMobileSideBar(false)
             setLendVoiceThankYouModal(false)
             setFreeThankYouModal(false)
            setPremiumMemberModal((prev) => !prev)
    }

    const toggleLendYourVoiceThribeModal = () => {
         setJoinTournament(false)
          setPartnerMobileSideBar(false)
         setPartnerWithUs(false)
         setPremiumMemberModal(false)
          setPremiumThankYouModal(false)
          setLendYourVoiceMobileSideBar(false)
          setPartnerThankYouModal(false)
           setLendVoiceThankYouModal(false)
           setFreeThankYouModal(false)
        setLendYourVoiceThribeModal((prev) => !prev)
    }

    const toggleJoinTournamentModal = () => {
        setLendYourVoiceThribeModal(false)
         setPartnerMobileSideBar(false)
        setPartnerWithUs(false)
        setPartnerThankYouModal(false)
         setPremiumMemberModal(false)
          setPremiumThankYouModal(false)
           setLendVoiceThankYouModal(false)
          setLendYourVoiceMobileSideBar(false)
          setFreeThankYouModal(false)
        setJoinTournament((prev) => !prev)
    }

    const togglePartnerWithUsModal = () => {
        setLendYourVoiceThribeModal(false)
         setPartnerMobileSideBar(false)
         setJoinTournament(false)
          setPremiumMemberModal(false)
           setPremiumThankYouModal(false)
           setPartnerThankYouModal(false)
            setLendVoiceThankYouModal(false)
           setLendYourVoiceMobileSideBar(false)
           setFreeThankYouModal(false)
        setPartnerWithUs((prev) => !prev)
    }

    return (
        <AllContext.Provider 
            value={{
                toggleNavbar,
                toggleMobileNavbarFunction,
                lendYourVoiceThribeModal,
               toggleLendYourVoiceThribeModal,
               joinTournament,
               toggleJoinTournamentModal,
               partnerWithUs,
               togglePartnerWithUsModal,
               premiumMemberModal,
               togglePremiumMemberModal,
               premiumThankYouModal,
               togglePremiumThankYouModal,
                partnerThankYouModal,
               togglePartnerThankYouModal,
               lendYourVoiceMobileSideBar,
               toggleLendYourVoiceMobileSideBar,
               partnerMobileSideBar,
               togglePartnerMobileSideBar,
               lendVoiceThankYouModal,
               toggleLendVoiceThankYouModal,
               toggleFreeThankYouModal,
               freeThankYouModal
            }}
        >
            {children}
        </AllContext.Provider>
    )
};

export const useAllContext = () => {
  const context = useContext(AllContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
