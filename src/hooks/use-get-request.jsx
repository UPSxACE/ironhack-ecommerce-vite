import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useGetRequest(route, queryParams) {
  const [done, setDone] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [queryParamsRef, setQueryParamsRef] = useState(queryParams);

  useEffect(() => {
    const buildQueryParamsString = (params) => {
      let result = "";

      if (params) {
        Object.keys(params).map((param, index) => {
          if (index === 0) {
            result += "?";
          } else {
            result += "&";
          }

          result += param + "=" + params[param];
        });
      }

      return result;
    };

    // remove '/' if the route string starts with it
    const routeFixed = route.startsWith("/") ? route.slice(1) : route;

    const token = localStorage.getItem("accessToken");
    const config = token
      ? {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      : null;

    axios
      .get(
        import.meta.env.VITE_API_URL +
          "/" +
          routeFixed +
          buildQueryParamsString(queryParamsRef),
        config
      )
      .then((res) => {
        setDone(true);
        setResult(res.data);
      })
      .catch((err) => {
        setDone(true);
        setError(err);
      });
  }, [queryParamsRef, route]);

  const updateParamsRef = useRef((newParams) => {
    setDone(false);
    setError(null);
    setQueryParamsRef(newParams);
  });

  return {
    done,
    result,
    error,
    updateParams: updateParamsRef.current,
  };
}
