export default function BackgroundPic() {
  return (
    <>
      <picture className="absolute top-0 dark:hidden pointer-events-none">
        <source srcSet="/images/docbg.avif" type="image/avif" />
        <img src="/images/docbg.png" alt="docbg" />
      </picture>
      <picture className="absolute top-0 dark:block hidden pointer-events-none">
        <source srcSet="/images/docbg_dark.avif" type="image/avif" />
        <img src="/images/docbg_dark.png" alt="docbg" />
      </picture>
    </>
  );
}
