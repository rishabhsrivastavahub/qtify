import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import AlbumCard from "./AlbumCard";
import SongCard from "./SongCard";

function Carousel({ items, type }) {
  return (
    <div style={{ position: 'relative' }}>
    <Swiper
      modules={[Navigation]}           // ← Register Navigation module
      navigation                       // ← Enables arrows (creates .swiper-button-prev/next)
      spaceBetween={20}
      slidesPerView={4}                // 4 visible at once (adjust as needed)
      // Optional: make it responsive
      // breakpoints={{
      //   640: { slidesPerView: 2 },
      //   1024: { slidesPerView: 4 },
      // }}
      // loop={true}                   // uncomment if you want infinite loop
    >
     
      {items.map((item) => (
        <SwiperSlide key={item.id}> 
          {type === "song" ? (
            <SongCard song={item} />
          ) : (
            <AlbumCard album={item} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}

export default Carousel;