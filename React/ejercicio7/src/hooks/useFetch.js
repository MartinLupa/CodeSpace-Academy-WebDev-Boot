import { useEffect } from 'react';
export default function useFetch(url, setState, parameter) {
  return useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setState(parameter))
      .catch((err) => err);
  }, [url, setState, parameter]);
}

export { useFetch };
