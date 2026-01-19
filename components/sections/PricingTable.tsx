interface PricingRow {
  item: string;
  price: string;
}

interface PricingTableProps {
  rows: PricingRow[];
}

export function PricingTable({ rows }: PricingTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-terracotta">
            <th className="text-left py-4 px-4 font-bold text-navy">Item</th>
            <th className="text-right py-4 px-4 font-bold text-navy">Price</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={`border-b border-gray-200 ${
                index % 2 === 0 ? "bg-white" : "bg-warm-white"
              }`}
            >
              <td className="py-4 px-4 text-charcoal">{row.item}</td>
              <td className="py-4 px-4 text-right text-charcoal font-medium">
                {row.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
