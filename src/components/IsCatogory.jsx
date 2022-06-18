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
          navigate(`/reviews/category_name/${event.target.value}`);
        }}
      >
        <option key="ask" value="" className="ask-to-select">
          Select a category
        </option>
        <option key="all" value="all" className="all">
          Show all categories
        </option>
        {category.map((elem, index) => {
          return (
            <option value={elem.slug} key={index}>
              {elem.slug}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default IsCategory;
