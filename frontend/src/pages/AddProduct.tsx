import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";
import {
    keywordsStringAtom,
    newProductAtom,
    productCategoryAtom,
    productDetailsAtom,
    productImageAtom,
    productKeywordsAtom,
    productNameAtom,
    productPriceAtom,
    productStockAtom,
    sellerIdAtom,
    productState
} from "../stores/addProduct.ts";
import { ChangeEvent } from "react";
import { sellerAtom } from "../stores/auth.ts";


const AddProduct = () => {

    const [name, setName] = useAtom(productNameAtom)
    const [image, setImage] = useAtom(productImageAtom)
    const [price, setPrice] = useAtom(productPriceAtom)
    const [details, setDetails] = useAtom(productDetailsAtom)
    const [category, setCategory] = useAtom(productCategoryAtom)
    const [keywordsString, setKeywordsString] = useAtom(keywordsStringAtom)
    const [keywords] = useAtom(productKeywordsAtom)
    const [stock, setStock] = useAtom(productStockAtom)
    const [state, setState] = useAtom(productState)

    // const handleImage = async (e: ChangeEvent) => {
    //     const file: File = e.target.files[0];
    //     const base64 = await convertToBase64(file);
    //     setImage(base64)
    // }

    const handleImage = (e: ChangeEvent) => {
        const file = (e.target as HTMLInputElement).files;
        if (file) {
            convertToBase64(file[0])
                .then(data => setImage(data))
                .catch((err) => console.log(err))
        }
    }

    // const handleKeywords = () => {
    //     setKeywords(keywords.split(""))
    // }

    const [product, setProduct] = useAtom(newProductAtom)

    const [seller] = useAtom(sellerAtom)
    const [sellerId, setSellerId] = useAtom(sellerIdAtom)

    const addProduct = async () => {

        const savedProduct = await axios.post(`${import.meta.env.VITE_SERVER_PORT}/seller/add`, product)
        return savedProduct

    }

    const mutation = useMutation({ mutationFn: addProduct })

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        // console.log(keywords);

        setSellerId(seller._id)

        setProduct({
            name,
            image,
            price,
            details,
            category,
            keywords,
            stock,
            sellerId,
            state
        })

        // console.log(product);

        mutation.mutate()
    }


    return (
        <div className="m-8">

            {mutation.isLoading ? (
                "Adding todo..."
            ) : (
                <div>
                    {mutation.isError ? (
                        <div>An error occurred</div>
                    ) : null}

                    {mutation.isSuccess ?
                        <div>
                            Product added!
                        </div> : null}
                </div>
            )}

            <h1 className="text-4xl">Add Product</h1>
            <br />

            <form
                onSubmit={handleSubmit}
                className="flex
                flex-col
                w-1/4">

                {/* Product Name */}
                <div>
                    <label>Name:</label>
                    <input
                        name="name"
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        title="product-name"
                        className="
                        border-2 
                        border-black" />
                </div>

                {/* Product Image */}
                <div>
                    <label>Image:</label>
                    {image ? <img src={image} alt="product-image" /> : null}
                    <input
                        name="image"
                        type="file"
                        required
                        onChange={(e) => handleImage(e)}
                        accept=".jpeg, .jpg, .png, .webp"
                        title="product-image"
                        className="
                        border-2 
                        border-black" />
                </div>

                {/* Product Price */}
                <div>
                    <label>Price:</label>
                    <input
                        name="price"
                        type="number"
                        required
                        // value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        title="product-price"
                        className="
                        border-2 
                        border-black" />
                </div>

                {/* Product Details */}
                <div>
                    <label>Details:</label>
                    <input
                        name="details"
                        type="text"
                        required
                        value={details}
                        onChange={e => setDetails(e.target.value)}
                        title="product-details"
                        className="
                        border-2 
                        border-black" />
                </div>

                {/* Product Image */}
                <div>
                    <label>Category:</label>
                    <select
                        name="category"
                        required
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        title="product-category">
                        <option value="">Select</option>
                        <option value="apparel">Apparel</option>
                        <option value="footwear">Footwear</option>
                        <option value="electronics">Electronics</option>
                        <option value="activa">Activa</option>
                    </select>
                </div>
                
                {/*product state*/}
                <div>
                    <label>Current State:</label>
                    <select
                        name="state"
                        required
                        value={state}
                        onChange={e => setState(Number(e.target.value))}
                        title="product-category">
                        <option value="0">Select</option>
                        <option value="1">Used</option>
                        <option value="0">New</option>
                    </select>
                </div>

                {/* Product Keywords */}
                <div>
                    <label>Keywords:</label>
                    <input
                        name="keywords"
                        type="text"
                        required
                        value={keywordsString}
                        onChange={(e) => setKeywordsString(e.target.value)}
                        title="product-keywords"
                        className="
                        border-2 
                        border-black" />
                </div>

                {/* Product Stock */}
                <div>
                    <label>Stock:</label>
                    <input
                        name="stock"
                        type="number"
                        required
                        // value={stock}
                        onChange={e => setStock(Number(e.target.value))}
                        title="product-stock"
                        className="
                        border-2 
                        border-black" />
                </div>

                <button
                    type="submit"
                    className="p-2
                     m-2
                     bg-blue-600
                     text-white
                      rounded-lg">
                    Submit
                </button>

            </form>
        </div>
    );
}

export default AddProduct;

// /*
function convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            if (typeof fileReader.result === 'string') {
                resolve(fileReader.result)
            }
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}
// */