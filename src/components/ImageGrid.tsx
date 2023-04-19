import { FC } from 'react';

interface GridDataItem {
  id: number;
  url: string;
  image: string;
}

interface ImageGridProps {
  gridData: GridDataItem[];
}

const ImageGrid: FC<ImageGridProps> = ({ gridData }) => {
  const component = gridData.map(({ id, url, image }, i) => (
    <li key={id} className="image-grid__item item text-c-mercury">
      {i === 0 || i === 3 ? (
        <div
          className="item__image image"
          style={{ backgroundImage: `url(${image})` }}
        />
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="item__image image"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
    </li>
  ));

  return <ul className="image-grid">{component}</ul>;
};

export default ImageGrid;
