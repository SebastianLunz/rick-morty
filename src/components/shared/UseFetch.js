import { useState, useEffect } from 'react';
import axios from 'axios';

const UseFetch = (url) => {
  const [ data, setData] = useState([]);
  const [ dataInfo, setDataInfo ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ isError, setIsError ] = useState(null);
  const [ numberOfPages, setNumberOfPages ] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await axios(url);
        setData(response.data.results);
        setDataInfo(response.data.info);
        setNumberOfPages(response.data.info.pages);
      } catch(error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, dataInfo, isLoading, isError, numberOfPages };
}

export default UseFetch;