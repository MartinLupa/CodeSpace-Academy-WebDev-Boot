import { useEffect } from "react";
export default function useFetch(url, setState, responseField) {
  return useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setState(responseField ? data[responseField] : data))
      .catch((err) => err);
  }, [url, setState, responseField]);
}

export { useFetch };
