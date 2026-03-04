import Image from "next/image";

export default function ImageGallery({ images = [] }) {
  if (!images.length) return null;

  return (
    <div className="cust-content-container " style={{ marginTop: "2rem" }}>
      <h3>Gallery</h3>
      <div
        className="grid grid-cols-2"
      >
        {images.map((src, index) => (
          <div
            key={src}
            className="w-full h-full"
          >
            <Image
              src={src}
              alt=""
              width={800}
              height={500}
              className="w-full"
              /*  style={{ objectFit: "cover", borderRadius: "6px" }} */
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}