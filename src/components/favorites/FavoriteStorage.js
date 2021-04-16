const setFavorite = (favorite) => {
  let favoriteContainer = JSON.parse(localStorage.getItem("favoriteContainer")) || [];

  if ((favoriteContainer.filter(item => item.id === favorite.id)).length === 0) {
    favoriteContainer.push(favorite);
  }
  localStorage.setItem("favoriteContainer", JSON.stringify(favoriteContainer));
}


const getFavorite = () => {
  let favorites = JSON.parse(localStorage.getItem("favoriteContainer")) || [];
  return favorites;
}


const amountOfAddedToFavorites = () => {
  const favorites = getFavorite();
  const favoritesID = favorites.map(favorite => favorite.id);
  return favoritesID;
};


const removeFavorite = (id) => {
  let favoriteContainer = JSON.parse(localStorage.getItem("favoriteContainer")) || [];

  const favoriteToRemove = favoriteContainer.findIndex(item => item.id === id);

  if (favoriteToRemove > -1) {
    favoriteContainer.splice(favoriteToRemove, 1);
    localStorage.setItem("favoriteContainer", JSON.stringify(favoriteContainer));
  }
}

export {
  setFavorite,
  getFavorite,
  amountOfAddedToFavorites,
  removeFavorite,
};