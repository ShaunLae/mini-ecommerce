import { create } from "zustand";
import { useCartStore } from "./useCartStore";

interface CartQuantityState {
    totalCartQuantity: number;
    setTotalCartQuantity: () => void;
}

export const useSumCartQuantityStore = create<CartQuantityState>((set) => ({
    totalCartQuantity: 0,
    // setTotalCartQuantity: () => set((state) => ({ totalCartQuantity: state.totalCartQuantity + 1 }))
    setTotalCartQuantity: () => {
        set(() => {
            const { cart} = useCartStore((state) => state);
           let cartQuantity = 0;
            cart.map((cartItem) => {
                cartQuantity += cartItem.quantity;
            })
            return {totalCartQuantity: cartQuantity};
        })
    }
}));