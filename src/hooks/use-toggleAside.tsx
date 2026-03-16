import { useState, useEffect } from "react";

interface UseToggleAsideProps {
  initialState?: boolean;
}

const ASIDE_STATE_KEY = "aside-panel-state";

const useToggleAside = ({ initialState = false }: UseToggleAsideProps) => {
  // Initialize state from localStorage or fall back to initialState
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const savedState = localStorage.getItem(ASIDE_STATE_KEY);
    return savedState !== null ? JSON.parse(savedState) : initialState;
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(ASIDE_STATE_KEY, JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  // Auto-collapse sidebar on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    // Run on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return { isCollapsed, toggleCollapse };
};

export default useToggleAside;
