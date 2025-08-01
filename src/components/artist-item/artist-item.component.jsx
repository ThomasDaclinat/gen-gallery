import "./artist-item.style.scss";

const ArtistItem = ({ artist }) => {
  const { imageUrl, name } = artist;
  return (
    <div className="artist-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="artist-body-container">
        <h2>{name}</h2>
        <p>Discover</p>
      </div>
    </div>
  );
};

export default ArtistItem;
