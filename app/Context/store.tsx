"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type DataType = {
  oddsNumerator: number;
  oddsDenominator: number;
  oddsDecimal: number;
  betResult: string;
  ewType: string;
  ruleFourValue: number;
  dhType: string;
};

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

  selectionsData: DataType[];
  setSelectionsData: Dispatch<SetStateAction<DataType[]>>;
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

  selectionsData: [],
  setSelectionsData: (): DataType[] => [],
});

export const GlobalContextProvider = ({ children }) => {
  const [betStake, setBetStake] = useState(0);
  const [betType, setBetType] = useState("Single");
  const [oddsType, setOddsType] = useState("Fractional");
  const [conditionEachWay, setConditionEachWay] = useState(true);
  const [conditionRuleFour, setConditionRuleFour] = useState(true);
  const [conditionDeadHeat, setConditionDeadHeat] = useState(true);

  const [selectionsData, setSelectionsData] = useState([
    {
      oddsNumerator: 2,
      oddsDenominator: 1,
      oddsDecimal: 2.0,
      betResult: "Win",
      ewType: conditionEachWay ? "1/4" : "",
      ruleFourValue: conditionRuleFour ? 0 : null,
      dhType: conditionDeadHeat ? "2 horses" : "",
    },
  ]);

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

        selectionsData,
        setSelectionsData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
