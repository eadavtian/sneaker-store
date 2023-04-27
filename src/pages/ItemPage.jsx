import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ContentLoader from "react-content-loader";


function ItemPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);




  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(
          `https://64276eb346fd35eb7c3fbedd.mockapi.io/items/?id=4`
        );

        setItem(response.data[0]);
      } catch (error) {
        alert('Ошибка');
        console.error(error);
      }
    };

    fetchItem();
  }, []);

  console.log(item)

  if (!item) {
    return (
      <ContentLoader
        speed={2}
        width={800}
        height={500}
        viewBox="0 0 800 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="10" ry="10" width="400" height="300" />
        <rect x="420" y="0" rx="10" ry="10" width="350" height="40" />
        <rect x="420" y="60" rx="5" ry="5" width="200" height="20" />
        <rect x="0" y="320" rx="5" ry="5" width="750" height="20" />
      </ContentLoader>
    );
  }

  return (
     <div style={{ display: "flex", flexDirection: "column", margin: '3rem' }}>
      <div style={{ display: "flex" }}>
        <img
          src={`.${item.imageUrl}`}
          alt={item.title}
          style={{ maxWidth: "800px", maxHeight: "600px", objectFit: "contain" }}
        />
        <div style={{ marginLeft: "20px" }}>
          <h1>{item.title}</h1>
          <h4>Price: {item.price} $</h4>
          <button className="addToCartButton">Add to Cart</button>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h2>Description:</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default ItemPage;
