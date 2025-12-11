export type Tab = "pokemon" | "items";

export type TabHeaderProps = {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
};

