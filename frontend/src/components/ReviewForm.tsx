import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

type PropType = {
    productId: string | undefined;
}

const ReviewForm = ({ productId }: PropType) => {

    const [review, setReview] = useState("")

    const addReview = async () => {

        await axios.post(`${import.meta.env.VITE_SERVER_PORT}/addReview`, {
            review,
            productId
        })
    }

    const mutation = useMutation({ mutationFn: addReview })

    const handleSubmit = () => {
        // event.preventDefault()

        mutation.mutate()
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="
                    flex 
                    items-center">
                <textarea
                    name="review"
                    required
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    cols={30}
                    rows={5}
                    placeholder="Add a review"
                    className="
                        border-2 
                        border-black"
                ></textarea>

                <button
                    type="submit"
                    className="
                    p-2
                    m-2
                    bg-green-600
                    text-white
                    rounded-lg"
                >Add</button>
            </form>
        </div>
    );
}

export default ReviewForm;