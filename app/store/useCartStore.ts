import { persist } from "zustand/middleware";
import { CartItem, Product } from "../types/general-types";
import { create } from "zustand";

interface CartState {
    cart: CartItem[];
    totalQuantity: number;
    addToCart: (product: Product, quantity: number) => void;
    updateTotalQuantity: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],
            addToCart: (product, quantity) => {
                set((state) => {
                    const existingItem = state.cart.find(
                            (item) => item.id === product.id
                    );
                    if (existingItem) {
                        const updateCart = state.cart.map((item) => {
                            if (item.id === product.id) {
                                return {
                                    ...item,
                                    quantity: item.quantity + quantity,
                                };
                            }
                            return item;
                        });
                        return { cart: updateCart };
                    }
                    const newItem = { ...product, quantity };
                    return {
                        cart: [...state.cart, newItem]
                    };
                });
            },
            totalQuantity: 0,
            updateTotalQuantity: () => {
                const latestCart = get().cart;
                console.log(latestCart);
                let total = 0;
                latestCart.map((cartItem) => {
                    total += cartItem.quantity;
                })
                console.log(total);
                // return total;
                set({totalQuantity: total})
            }
        }),
        { name: "cart" },
    )
)