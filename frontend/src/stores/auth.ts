import { atom } from "jotai";

export type User = {
    _id: string;
    name: string;
    email: string;
    address?: string;
}

export type Seller = {
    _id: string;
    name: string;
    email: string;
}

const isAuthAtom = atom(false)
const isSellerAuthAtom = atom(false)


const nameAtom = atom("")
const emailAtom = atom("")
const passwordAtom = atom("")
const addressAtom = atom("")

const userAtom = atom<User>(<User>{ })
const sellerAtom = atom<Seller>(<Seller>{})


export {
    isAuthAtom,
    isSellerAuthAtom,
    nameAtom,
    emailAtom,
    passwordAtom,
    addressAtom,
    userAtom,
    sellerAtom,
}