const ResponsiveImage = (props) => {
  const mobile = `${props.mobileUrl}`;
  const desktop = `${props.desktopUrl}`;
  return (
    <picture>
      <source
        type="image/svg"
        srcSet={`${desktop} 768w, ${desktop} 1280w, ${desktop} 1440w `}
        sizes="(max-width: 768px) 768px, 1280px"
      />
      <img
        id="id"
        type="image/svg"
        src={mobile}
        alt="Decorative illustration"
      />
    </picture>
  );
};
export default ResponsiveImage;
