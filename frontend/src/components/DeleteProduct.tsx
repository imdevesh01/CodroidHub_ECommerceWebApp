import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const DeleteProduct = ({ productId }: string) => {

    const deleteProduct = async () => {

        await axios.post(`${import.meta.env.VITE_SERVER_PORT}/seller/deleteProduct`, {
            productId
        })
    }

    const mutation = useMutation({ mutationFn: deleteProduct })

    const handleDelete = () => {
        mutation.mutate()
    }

    return (
        <div>
            <button
                onClick={handleDelete}
                type="button"
                className="p-2 bg-red-600 text-white"
            >Delete</button>
        </div>
    );
}

export default DeleteProduct;