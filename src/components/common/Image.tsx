import "../../styles/index.scss";

export interface ImageProps {
  alt?: string;
  cName?: string;
  cName2?: string;
  imgClass?: string;
  src: string;
  children?: JSX.Element[];
}

export default ({
  alt,
  cName,
  cName2,
  imgClass,
  src,
  children,
}: ImageProps): JSX.Element => (
  <>
    <div className={cName}>
      <div className={cName2}>
        <img alt={alt || "image"} className={imgClass} src={src} />
      </div>
    </div>
    {children}
  </>
);
