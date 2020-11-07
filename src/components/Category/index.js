import React from "react";
import { Link } from "wouter";
/*import {
  CategoryTitle,
  CategoryListItem,
  CategoryLink,
  CategoryList,
} from "./styles";*/
import "./styles.css";

export default function Category({ name, options = [] }) {
  return (
    <div className="Category">
      <h3 className="Category-title">{name}</h3>
      <ul className="Category-list">
        {options.map((singleOption, index) => (
          <li key={singleOption}>
            <Link className="Category-link" to={`/search/${singleOption}`}>
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
export default function Category({ name, options = [] }) {
  return (
    <section>
      <CategoryTitle>{name}</CategoryTitle>
      <CategoryList>
        {options.map((singleOption, index) => (
          <CategoryListItem key={singleOption} index={index} type="primary">
            <CategoryLink to={`/search/${singleOption}`}>
              {singleOption}
            </CategoryLink>
          </CategoryListItem>
        ))}
      </CategoryList>
    </section>
  );
}

*/
