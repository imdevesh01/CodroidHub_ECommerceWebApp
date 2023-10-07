import { atom } from "jotai";
import { Product } from "./addProduct.ts";

const productAtom = atom<Product>(<Product>{})

export {
    productAtom
}