function AlbumCard({ album }) {
  return (
    <div>
      <img src={album.image} alt={album.title} width="200" />
      <p>{album.title}</p>
      <p>{album.follows} Follows</p>
    </div>
  );
}

export default AlbumCard;