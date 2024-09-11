export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button onClick={onToggleFavorite}>
      <img
        src={
          isFavorite
            ? "/resources/assets/heart.svg"
            : "resources/assets/heart.svg"
        }
        alt={isFavorite ? "Remove from favorites" : "Add to favorites"}
        width="24"
        height="24"
      />
    </button>
  );
}
