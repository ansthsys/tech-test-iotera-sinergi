import type { ResponseLog } from "@/types/api";
import { useCallback, useEffect, useState } from "react";

export default function useApiDeviceLog() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<ResponseLog | null>(null);

  const fetchData = useCallback(async () => {
    try {
      reset();
      setIsLoading(true);

      const res = await fetch(
        "https://api-serverless.iotera.io/1000000021/data",
        { method: "POST" },
      );

      const data = (await res.json()) as ResponseLog;

      setData(data);
    } catch (error) {
      console.error("Error:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = () => {
    setIsLoading(false);
    setIsError(false);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    isLoading,
    isError,
    data,
    refetch: fetchData,
  };
}
