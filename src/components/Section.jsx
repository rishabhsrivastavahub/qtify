import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "./Carousel";
import AlbumCard from "./AlbumCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Section({ title, apiUrl, genresUrl, type }) {
  const [items, setItems] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all");
  const [collapse, setCollapse] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(apiUrl);
      setItems(res.data);

      if (genresUrl) {
        const genreRes = await axios.get(genresUrl);
        setGenres([
          { key: "all", label: "All" },
          ...genreRes.data.data,
        ]);
      }
    };

    fetchData();
  }, [apiUrl, genresUrl]);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const filteredItems =
    selectedTab === "all"
      ? items
      : items.filter((item) => item.genre.key === selectedTab);

  return (
    <div style={{ marginBottom: "40px" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>{title}</h2>

        {/* Show All ONLY for albums */}
        {type !== "song" && (
          <button
            onClick={() => setCollapse(!collapse)}
            style={{
              background: "none",
              border: "none",
              color: "#34C94B",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            {collapse ? "Show all" : "Collapse"}
          </button>
        )}
      </div>

      {/* SONG TABS */}
      {type === "song" && genres.length > 0 && (
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#34C94B",
                height: "3px",
              },
            }}
            sx={{
              "& .MuiTab-root": {
                color: "#FFFFFF",
                textTransform: "none",
                fontWeight: 500,
              },
              "& .Mui-selected": {
                color: "#FFFFFF",
              },
            }}
          >
            {genres.map((genre) => (
              <Tab
                key={genre.key}
                label={genre.label}
                value={genre.key}
              />
            ))}
          </Tabs>
        </Box>
      )}

      {/* Content */}
      {type === "song" ? (
        <Carousel items={filteredItems} type="song" />
      ) : collapse ? (
        <Carousel items={items} />
      ) : (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {items.map((item) => (
            <AlbumCard key={item.id} album={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;