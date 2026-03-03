import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function SongCard({ song }) {
  return (
    <Card
  sx={{
    backgroundColor: "#181818",
    color: "white",
    borderRadius: "8px",
    paddingBottom: "8px",
  }}
>
      <CardMedia
        component="img"
        height="200"
        image={song.image}
        alt={song.title}
      />
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" noWrap>
          {song.title}
        </Typography>
        <Typography variant="body2">
          {song.likes} Likes
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SongCard;