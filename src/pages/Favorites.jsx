import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My Favorites</h1>
      </div>

      {favorites.length > 0 ? (
        <div className="d-flex flex-wrap">
          {favorites.map((item, index) => (
            <Card
              key={index}
              favorited={true}
              onFavorite={onAddToFavorite}
              {...item}
            />
          ))}
        </div>
      ) : (
        <div
  className="d-flex flex-column align-items-center justify-content-center"
  style={{ minHeight: '50vh', width: '100%', alignItems: 'center', justifyContent: 'center' }}
>
  <h2>You don't have any favorites yet</h2>
  <img
    src="img/empty-cart.jpg"
    alt="Empty favorites"
    style={{ width: '200px', height: '200px' }}
  />
</div>

      )}
    </div>
  );
}

export default Favorites;
