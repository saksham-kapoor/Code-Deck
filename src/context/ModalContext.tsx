import { createContext, useState } from "react";

interface ModalContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalProvider({ children }: { children: any }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
