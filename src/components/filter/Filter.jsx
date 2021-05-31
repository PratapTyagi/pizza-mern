import "./Filter.css";
const Filter = () => {
  return (
    <div className="filter">
      <div className="filter__inner">
        <input type="text" placeholder="Search Pizza" />
        <select name="" id="">
          <option value="all">All</option>
          <option value="veg">Veg</option>
          <option value="nonveg">Non Veg</option>
        </select>
        <button>Filter</button>
      </div>
    </div>
  );
};

export default Filter;
