import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        if (!signal.aborted) {
          setResponse(json);
        }
      } catch (e) {
        if (!signal.aborted) {
          setError(e);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };
    doFetch();
    return () => {
      abortController.abort();
    };
  }, [options, url]);
  return { response, error, loading };
};

const useServerFetch = async (url, options) => {
  let response = null;
  let error = null;
  let loading = false;
  const abortController = new AbortController();
  const signal = abortController.signal;
  const doFetch = async () => {
    loading = true;
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      if (!signal.aborted) {
        response = json;
      }
    } catch (e) {
      if (!signal.aborted) {
        error = e;
      }
    } finally {
      if (!signal.aborted) {
        loading = false;
      }
    }
    abortController.abort();
  };
  await doFetch();

  return { response, error, loading };
};
export { useFetch, useServerFetch };
