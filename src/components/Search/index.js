import React from "react";


const SearchBar = ({ onChange, placeholder }) => {
    const [data, setData] = useState(employees);

    return (
        <div className="Search">
            <span className="SearchSpan">

            </span>
            <input
                className="SearchInput"
                type="text"
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default SearchBar;