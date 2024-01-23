type CustomTilesProps<T> = {
  data: T;
};

const CustomTiles = <T extends Record<string, string>[]>({
  data,
}: CustomTilesProps<T>): JSX.Element => {
  return (
    <div className="custom-tiles">
      {data.map((item, index) => (
        <div className="custom-tiles__item" key={index}>
          <ul>
            {Object.values(item).map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CustomTiles;
