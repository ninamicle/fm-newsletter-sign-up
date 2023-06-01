const ResponsiveImage = (props) => {
  const mobile = `${props.mobileUrl}`;
  const desktop = `${props.desktopUrl}`;
  return (
    <picture>
      <source media="(min-width:650px)" srcSet={desktop} />
      <img src={mobile} alt="Decorative illustration" />
    </picture>
  );
};
export default ResponsiveImage;
