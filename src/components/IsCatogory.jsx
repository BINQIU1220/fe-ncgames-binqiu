import { useNavigate } from "react-router-dom";

const IsCategory = ({ category, setCategory, setIsCategory }) => {
  const navigate = useNavigate();

  return (
    <div id="slect-category">
      <select
        id="category-name"
        name="category"
        defaultValue=""
        onChange={(event) => {
          setCategory([event.target.value]);
          setIsCategory([event.target.value]);
          navigate(`/${event.target.value}`);
        }}
      >
        <option value="" key="ask-to-select">
          Select a category
        </option>
        <option value="all" key="all">
          Show all categories
        </option>
        {category.map((elem) => {
          return (
            <option value={elem.slug} key={elem.slug}>
              {elem.slug}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default IsCategory;
