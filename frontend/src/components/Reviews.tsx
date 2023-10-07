import { useQuery } from "@tanstack/react-query";
import axios from "axios"

type PropType = {
    productId: string | undefined;
}

type Reviews = {
    data: {
        reviews: string[];
    }
}

const Reviews = ({ productId }: PropType) => {

    const getReviews = async () => {

        const allReviews: Reviews = await axios.get(`${import.meta.env.VITE_SERVER_PORT}/reviews/${productId}`)

        return allReviews.data
    }

    const {
        isLoading,
        // isError,
        data,
        // error,
    } = useQuery({
        queryKey: ["reviews"],
        queryFn: getReviews
    })

    return (
        <div>
            {

                isLoading ?
                    <span>Loading...</span> :
                    // isError ?
                    //   <Error /> :

                    < div>
                        {data
                            ? data.reviews.map((review: string) => (
                                <div
                                    key={review}
                                    className="
                                bg-gray-200
                                py-2
                                w-1/3"
                                >
                                    <p
                                        className="
                                    text-lg"
                                    >{review}</p>
                                </div>
                            ))
                            : null}
                    </div>
            }
        </div>
    );
}

export default Reviews;