import { useState } from "react";

export function useOpenMenu(){
    const [isOpen, setIsOpen] = useState(false);

  function handleOpenMenu(){
    setIsOpen((open)=> !open);
  }

  return {handleOpenMenu, isOpen, setIsOpen};
}