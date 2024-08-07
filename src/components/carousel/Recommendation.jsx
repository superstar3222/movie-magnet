import React from "react";
import Carousel from "./Carousel";
import useFetch from "../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;
