import React from "react";
import { useLocation } from "wouter";
import useForm from "./hook";
import css from "./SearchForm.module.css";

const RATINGS = ["g", "pg", "pg-13", "r"];

export default function SearchForm({
  initialKeyword = "",
  initialRating = "g",
}) {
  const { keyword, rating, times, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  });

  const [_, pushLocation] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //navegar a otra ruta
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChange = (evt) => {
    updateKeyword(evt.target.value);
  };

  const handleChangeRating = (evt) => {
    updateRating(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={css["c-search"]}>
      <button className={css["c-search-btn"]}>Buscar</button>
      <input
        className={css["c-search-input"]}
        placeholder="Buscar un gif aquí..."
        onChange={handleChange}
        type="text"
        value={keyword}
      />
      <select onChange={handleChangeRating} value={rating}>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <small>{times}</small>
    </form>
  );
}

//export default React.memo(SearchForm);
