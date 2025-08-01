import ArtistItem from "../artist-item/artist-item.component";
import "./directory.style.scss";

const Directory = ({ artists }) => {
  return (
    <div className="directory-container">
      {artists.map((artist) => (
        <ArtistItem key={artist.id} artist={artist} />
      ))}
    </div>
  );
};

export default Directory;
