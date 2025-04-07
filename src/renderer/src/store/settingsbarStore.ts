import { create } from 'zustand';

interface SettingBarState {
  isOpen: boolean;
  setOpenBar: (value: boolean) => void;
}

export const useSettingBarStore = create<SettingBarState>((set) => ({
  isOpen: false,
  setOpenBar: (value) => set({ isOpen: value }),
}));
