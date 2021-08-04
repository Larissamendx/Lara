import Link from "next/link";
import React, { createContext, ReactNode, useEffect, useState } from "react";

type HomeContextData = {
    imgAnterior: number;
    imgAtual: number;
    imgProximo: number;
    back: () => void;
    next: () => void;
};

type HomeContextProviderProps = {
  children: ReactNode;
};

export const HomeContext = createContext({} as HomeContextData);

export function HomeContextProvider({ children }: HomeContextProviderProps) {
    const [imgAnterior, setImgAnterior] = useState(0);
    const [imgAtual, setImgAtual] = useState(1);
    const [imgProximo, setImgProximo] = useState(2);
  
    function next() {
        if(imgAtual == 4) {
            setImgAnterior(imgAnterior + 1);
            setImgAtual(imgAtual + 1);
            setImgProximo(0);
          } else if(imgAtual == 5){
            setImgAnterior(5);
            setImgAtual(0);
            setImgProximo(imgProximo + 1);
          } else if (imgAtual == 0) {
            setImgAnterior(0);
            setImgAtual(imgAtual + 1);
            setImgProximo(imgProximo + 1);
          } else {
            setImgAnterior(imgAnterior + 1);
            setImgAtual(imgAtual + 1);
            setImgProximo(imgProximo + 1);
          }
    } 

    function back() {
        if(imgAtual == 5) {
            setImgAnterior(imgAnterior - 1);
            setImgAtual(imgAtual - 1);
            setImgProximo(5);
          } else if(imgAtual == 1){
            setImgAnterior(5);
            setImgAtual(imgAtual - 1);
            setImgProximo(imgProximo - 1);
          } else if (imgAtual == 0) {
            setImgAnterior(imgAnterior - 1);
            setImgAtual(5);
            setImgProximo(imgProximo - 1);
          } else {
            setImgAnterior(imgAnterior - 1);
            setImgAtual(imgAtual - 1);
            setImgProximo(imgProximo - 1);
          }
    }

  return (
    <HomeContext.Provider
      value={{
        imgAnterior,
        imgAtual,
        imgProximo,
        back,
        next,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
