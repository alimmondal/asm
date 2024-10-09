import { create } from "zustand";

interface FooterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const onOffModal = create<FooterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default onOffModal;
