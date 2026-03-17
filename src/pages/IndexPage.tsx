import useApiTransaction from "@/hooks/useApiTransaction";

export default function IndexPage() {
  const { isLoading, isError, data } = useApiTransaction();

  return (
    <div className="py-3 px-2 space-y-8">
      <h1 className="text-lg font-medium">List Transaction</h1>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Order ID</th>
                <th>Product name</th>
                <th>SKU</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Date time</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan={7} className="text-center">
                    Loading
                  </td>
                </tr>
              )}

              {!isLoading && isError && (
                <tr>
                  <td colSpan={7} className="text-center">
                    Fail fetch data
                  </td>
                </tr>
              )}

              {!isLoading &&
                !isError &&
                data &&
                Object.keys(data).map((key, idx) => {
                  return (
                    <tr key={key}>
                      <td>{idx + 1}</td>
                      <td>{key}</td>
                      <td>{data[key].product.name}</td>
                      <td>{data[key].product.sku}</td>
                      <td>{data[key].payment.amount}</td>
                      <td>{data[key].detail.transaction_status}</td>
                      <td>
                        {new Date(
                          data[key].time.timestamp,
                        ).toLocaleTimeString()}{" "}
                        {new Date(
                          data[key].time.timestamp,
                        ).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })}

              {!isLoading && !isError && !data && (
                <tr>
                  <td colSpan={7} className="text-center">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <th>No</th>
                <th>Order ID</th>
                <th>Product name</th>
                <th>SKU</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Date time</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
