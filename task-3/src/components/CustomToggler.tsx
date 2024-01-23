type CustomTogglerProps<T> = {
  value: T;
  data: { label: string; value: T }[];
  onChange: (value: T) => void;
};

const CustomToggler = <T,>({
  value,
  data,
  onChange,
}: CustomTogglerProps<T>): JSX.Element => {
  return (
    <div className="custom-toggler">
      {data.map((item, index) => (
        <button
          className={
            item.value === value
              ? 'custom-toggler__item custom-toggler__item--active'
              : 'custom-toggler__item'
          }
          onClick={() => onChange(item.value)}
          key={index}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default CustomToggler;
