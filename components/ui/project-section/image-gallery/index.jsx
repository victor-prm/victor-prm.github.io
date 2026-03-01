import Image from "next/image";

export default function ImageGallery({ images = [] }) {
  if (!images.length) return null;

  return (
    <div className="cust-content-container" style={{ marginTop: "2rem" }}>
      <h3>Gallery</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "12px",
        }}
      >
        {images.map((src, index) => (
          <div
            key={src}
            style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 600px) 100vw, 200px"
              style={{ objectFit: "cover", borderRadius: "6px" }}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}