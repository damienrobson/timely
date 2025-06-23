import { createContext } from "react";
import { useMediaQuery } from "../hooks";

export type MediaContextType = {
  isMobile: boolean;
  isDarkMode: boolean;
  isReducedMotion: boolean;
};

export type MediaContextProviderProps = {
  children: React.ReactNode;
};

const MediaContext = createContext<MediaContextType>({
  isMobile: false,
  isDarkMode: false,
  isReducedMotion: false,
});

export const MediaContextProvider = ({
  children,
}: MediaContextProviderProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const isReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <MediaContext.Provider value={{ isMobile, isDarkMode, isReducedMotion }}>
      {children}
    </MediaContext.Provider>
  );
};

export default MediaContext;
