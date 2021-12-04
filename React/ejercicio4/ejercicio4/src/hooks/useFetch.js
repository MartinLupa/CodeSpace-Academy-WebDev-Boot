//----------------------------------------
//React N° 6 - 02:26:00 - Explanation custom hooks
//----------------------------------------

import { useState, useEffect } from 'react';

//Custom hook that receives a url and updates a state with the received data from the fetch.
function useFetch(url, setState) {
  return useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setState(data.slice(0, 5)));
  }, []);
}

export { useFetch };
