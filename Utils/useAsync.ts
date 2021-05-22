import { useState } from "react";

const useAsync = (fetchingData: () => any) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const req = async () => {
        setLoading(true);
        const response = await fetchingData();
        setLoading(false);

        if (!response?.ok) return setError(true);
        setError(false);
        setData(response.data);
    }

    return { req, data, error, loading };

}


export default useAsync;