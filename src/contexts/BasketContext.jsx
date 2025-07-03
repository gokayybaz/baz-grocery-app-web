"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

export const BasketContext = createContext(null)

export const BasketContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [totalProductsPrice, setTotalProductsPrice] = useState(0)

    useEffect(() => {
        let totalProductPrice = cartItems.reduce((productAccumulator, currentProduct) => {
            return productAccumulator + (currentProduct.product.unitPrice * currentProduct.quantity)
        }, 0)
        setTotalProductsPrice(totalProductPrice)
    }, [cartItems])

    const addCartItem = (quantity, addedDate, product) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => item.product.id === product.id)
            if (existingItemIndex <= -1) {
                return [...prevItems, { quantity, addedDate, product }]
            } else {
                return [...prevItems]
            }
        })
    }
    const updateCartItemQuantity = (productId, newQuantity) => {
        setCartItems(prevItems => {
            return prevItems.map(item => {
                if (item.product.id === productId) {
                    // Eğer yeni miktar 1'den küçükse ürünü sepetten çıkar
                    if (newQuantity <= 0) {
                        item.quantity = 1
                    }
                    else {
                        return { ...item, quantity: newQuantity };
                    }
                }
                return item;
            })
        });
    };

    const removeCartItem = (productId) => {
        setCartItems(prevItems => {
            return prevItems.filter(item => item.product.id !== productId);
        });
    };


    const contextValue = { cartItems, addCartItem, updateCartItemQuantity, removeCartItem, totalProductsPrice }
    return (
        <BasketContext.Provider value={contextValue}>{children}</BasketContext.Provider>
    )
}

export const useBasket = () => {
    const context = useContext(BasketContext)

    if (context === null) {
        throw new Error("Context Bulunamadı!!")
    }

    const { cartItems, addCartItem, updateCartItemQuantity, removeCartItem, totalProductsPrice } = context

    return { cartItems, addCartItem, updateCartItemQuantity, removeCartItem, totalProductsPrice }
}

