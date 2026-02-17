interface DropdownProps<T> {
  optionList: T[];
  onClick?: (value: T) => void;
}

const Dropdown = <T,>(props: DropdownProps<T>) => {
  const { optionList, onClick } = props;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    const selectedItem = optionList.find(
      (item) => String(item) === selectedValue,
    );

    if (selectedItem) {
      onClick?.(selectedItem);
    }
  };

  return (
    <select
      className={`w-3xs px-2.5 py-2 
        rounded-md
        outline-0
        transition-[border]
        duration-300
        border-2
      bg-slate-950
      border-slate-600
      `}
      onChange={handleChange}
    >
      {optionList?.map((item) => (
        <option key={String(item)}>{String(item)}</option>
      ))}
    </select>
  );
};

export default Dropdown;
