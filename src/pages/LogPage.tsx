import CardDeviceLog from "@/components/CardDeviceLog";
import useApiDeviceLog from "@/hooks/useApiDeviceLog";
import { useState } from "react";

export default function LogPage() {
  const [selectedLog, setSelectedLog] = useState<string | null>(null);
  const { isLoading, isError, data } = useApiDeviceLog();

  const extractlog = (val: string) => {
    return val
      .replace(/^b"/, "")
      .replace(/"$/, "")
      .replaceAll("\\n\\t", "\n")
      .replaceAll("\\n", "\n")
      .trim();
  };

  const onSelectLog = (id: string) => {
    if (!data) return;
    setSelectedLog(id);
  };

  const onDeselectLog = () => {
    setSelectedLog(null);
  };

  return (
    <div className="py-3 px-2 space-y-8">
      <h1 className="text-lg font-medium">Device Log</h1>

      {isLoading && (
        <div className="w-full min-h-32 rounded-lg border-2 border-gray-300 flex items-center justify-center">
          <p className="text-lg font-medium">Loading</p>
        </div>
      )}

      {!isLoading && isError && (
        <div className="w-full min-h-32 rounded-lg border-2 border-gray-300 flex items-center justify-center">
          <p className="text-lg font-medium">Fail fetch data</p>
        </div>
      )}

      {!isLoading && !isError && data && (
        <div className="flex flex-row items-start justify-between gap-7">
          <div className="space-y-5 basis-1/2">
            {Object.keys(data).map((key, idx) => {
              const isActive = selectedLog === key;

              return (
                <CardDeviceLog
                  key={key + idx}
                  isActive={isActive}
                  id={data[key].device_id}
                  name={data[key].device_type}
                  onClick={() =>
                    isActive ? onDeselectLog() : onSelectLog(key)
                  }
                />
              );
            })}
          </div>
          <div className="basis-1/2">
            <div
              className={`rounded-lg border-2 border-gray-300 p-3 ${selectedLog && "bg-[#1e1e1e]"}`}
            >
              {selectedLog ? (
                <textarea
                  value={extractlog(data[selectedLog].log)}
                  readOnly
                  style={{
                    width: "100%",
                    height: "400px",
                    fontFamily: "monospace",
                    backgroundColor: "#1e1e1e",
                    color: "#d4d4d4",
                    whiteSpace: "pre",
                  }}
                />
              ) : (
                <div className="min-h-52 flex items-center justify-center">
                  <p>Select log to show detail log</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {!isLoading && !isError && !data && (
        <div className="w-full min-h-32 rounded-lg border-2 border-gray-300 flex items-center justify-center">
          <p className="text-lg font-medium">No Data available</p>
        </div>
      )}
    </div>
  );
}
