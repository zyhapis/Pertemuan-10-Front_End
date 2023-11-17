import React from "react";
import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";

const Movies = (props) => {
  const { data } = props;

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {data.map(function (data) {
            return (
              <>
                <Movie title={data.title} date={data.date} image={data.image} genre={data.genre} />
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Movies;
