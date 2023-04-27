import React from "react";
import styles from "./Trends.module.scss";

import axios from "axios";

function Trends() {
  const [trends, setTrends] = React.useState([]);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://64276eb346fd35eb7c3fbedd.mockapi.io/trends"
        );
        setTrends(response.data);
      } catch (error) {
        alert("Ошибка при запросе данных ;(");
        console.error(error);
      }
    }

    fetchData();

    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  }, []);

  return (
    <div className={styles.container}>
      <h2>Now in Trends</h2>
      <div
        className={`${styles.trendsList} ${
          isMobile ? "" : styles.infiniteScroll
        }`}
      >
        {trends.map((trend) => (
          <div key={trend.id} className={styles.trendCard}>
            <img
              src={trend.imageUrl}
              alt={trend.name}
              className={styles.image}
            />
            <div className={styles.name}>{trend.title}</div>
          </div>
        ))}
        {isMobile &&
          trends.map((trend) => (
            <div key={`${trend.id}-mobile`} className={styles.trendCard}>
              <img
                src={trend.imageUrl}
                alt={trend.name}
                className={styles.image}
              />
              <div className={styles.name}>{trend.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Trends;
