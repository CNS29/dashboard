export default function Image({ url, alt }) {
  return (
    <img
      style={{
        width: '100%',
      }}
      loading="lazy"
      src={url}
      alt={alt}
    />
  );
}
