const transactions = [
  {
    id: 1,
    user: "John Doe",
    amount: "$240",
    status: "Completed",
  },
  {
    id: 2,
    user: "Sarah Smith",
    amount: "$180",
    status: "Pending",
  },
  {
    id: 3,
    user: "Michael Brown",
    amount: "$320",
    status: "Completed",
  },
];

export function RecentTransactions() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b text-left text-sm text-gray-500">
            <th className="pb-3 font-medium">User</th>
            <th className="pb-3 font-medium">Amount</th>
            <th className="pb-3 font-medium">Status</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr
              key={transaction.id}
              className="border-b last:border-none"
            >
              <td className="py-4 text-sm font-medium text-gray-900">
                {transaction.user}
              </td>

              <td className="py-4 text-sm text-gray-600">
                {transaction.amount}
              </td>

              <td className="py-4">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}