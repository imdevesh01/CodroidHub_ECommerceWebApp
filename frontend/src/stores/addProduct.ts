import { atom } from "jotai";
import { sellerAtom } from "./auth.ts";

export type Product = {
    _id?: string;
    name: string;
    image: string;
    price: number;
    rating?: number;
    details: string;
    reviews?: string[];
    category: string;
    keywords: string[];
    state: number;
    stock: number;
    sellerId?: string;
}

// const products = atom<Product[]>([])

const productNameAtom = atom("")
const productImageAtom = atom("")
const productPriceAtom = atom(0)
const productDetailsAtom = atom("")
const productCategoryAtom = atom("")
const productStockAtom = atom(0)
const productState = atom(0)

const keywordsStringAtom = atom("")
const productKeywordsAtom = atom<string[]>((get) => (
    get(keywordsStringAtom).split(" ")
))

const sellerIdAtom = atom("")

const newProductAtom = atom<Product>(<Product>{})

// const addProductAtom = atom(
//     () => "",
//     (get, set) => {
//         set
//     }
// )

export {
    sellerIdAtom,
    newProductAtom,
    productNameAtom,
    productImageAtom,
    productPriceAtom,
    productDetailsAtom,
    productCategoryAtom,
    productKeywordsAtom,
    keywordsStringAtom,
    productStockAtom,
    productState
}