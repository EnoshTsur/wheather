import React from "react";

export default function useGet(url) {

    const [response, setResponse] = React.useState({
        loading: true,
        data: null,
        error: null
    });

    const mount = React.useRef(false)

    React.useEffect(() => {
        if (mount.current) {
            (async () => {
                await fetch(url)
                    .then((res) => res.json())
                    .then((data) => setResponse({ error: null, data, loading: false }))
                    .catch((error) => setResponse({ data: null, error, loading: false }))

            })()
        } else {
            mount.current = true;
        }
    }, []);

    return response;
}