"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  betType: string;
  setBetType: Dispatch<SetStateAction<string>>;
  oddsType: string;
  setOddsType: Dispatch<SetStateAction<string>>;
  conditionEachWay: boolean;
  setConditionEachWay: Dispatch<SetStateAction<boolean>>;
  conditionRuleFour: boolean;
  setConditionRuleFour: Dispatch<SetStateAction<boolean>>;
  conditionDeadHeat: boolean;
  setConditionDeadHeat: Dispatch<SetStateAction<boolean>>;
  betStake: number;
  setBetStake: Dispatch<SetStateAction<number>>;
}

const GlobalContext = createContext<ContextProps>({
  betType: "",
  setBetType: (): string => "",

  oddsType: "",
  setOddsType: (): string => "",

  conditionEachWay: false,
  setConditionEachWay: (): boolean => false,

  conditionRuleFour: false,
  setConditionRuleFour: (): boolean => false,

  conditionDeadHeat: false,
  setConditionDeadHeat: (): boolean => false,

  betStake: 0,
  setBetStake: (): number => 0,
});

export const GlobalContextProvider = ({ children }) => {
  const [betStake, setBetStake] = useState(0);
  const [betType, setBetType] = useState("Single");
  const [oddsType, setOddsType] = useState("Fractional");
  const [conditionEachWay, setConditionEachWay] = useState(true);
  const [conditionRuleFour, setConditionRuleFour] = useState(true);
  const [conditionDeadHeat, setConditionDeadHeat] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        betStake,
        setBetStake,
        betType,
        setBetType,
        oddsType,
        setOddsType,
        conditionEachWay,
        setConditionEachWay,
        conditionRuleFour,
        setConditionRuleFour,
        conditionDeadHeat,
        setConditionDeadHeat,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
