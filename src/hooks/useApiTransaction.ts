import type { ResponseTransaction } from "@/types/api";
import type { Transaction } from "@/types/transaction";
import { useCallback, useEffect, useState } from "react";

export default function useApiTransaction() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<Transaction | null>(null);

  const fetchData = useCallback(async () => {
    try {
      reset();
      setIsLoading(true);

      const res = await fetch(
        "https://asia-southeast2-iotera-vending.cloudfunctions.net/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: "user",
            password: "password",
          }),
        },
      );

      const { data } = (await res.json()) as ResponseTransaction;

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
