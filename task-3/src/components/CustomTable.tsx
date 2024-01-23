type CustomTableProps<T> = {
  data: T;
};

const CustomTable = <T extends Record<string, string>[]>({
  data,
}: CustomTableProps<T>): JSX.Element => {
  return (
    <table className="custom-table">
      <tbody>
        {data.map((row, index) => (
          <tr className="custom-table__row" key={index}>
            {Object.values(row).map((col, index) => (
              <td className="custom-table__data" key={index}>
                {col}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
