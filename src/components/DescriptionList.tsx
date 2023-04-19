import { FC } from 'react';

import LinkMasked from '@/components/LinkMasked';
import { DescriptionItem } from '@/utils/types';

interface DescriptionListProps {
  listData: DescriptionItem[] | string;
}

const DescriptionList: FC<DescriptionListProps> = ({ listData }) => {
  const cssClassesLinkMasked =
    'link-masked--white font-f-sec font-s-20 text-c-l-dune';
  let component: JSX.Element | JSX.Element[] = [];

  if (typeof listData === 'string') {
    component = (
      <li key={1 + listData} className="description-list__item item">
        <p
          className="item__plain-text font-f-sec font-s-20 text-c-l-dune"
          dangerouslySetInnerHTML={{ __html: listData }}
        />
      </li>
    );
  } else {
    component = listData.map(
      ({ url, text, label }: DescriptionItem, i: number) => (
        <li key={i + 1} className="description-list__item item">
          <h6 className="item__title font-s-12-secondary">{label}</h6>
          {url ? (
            <div className="item__link">
              <LinkMasked
                text={text}
                url={url}
                cssClasses={cssClassesLinkMasked}
                target="_blank"
              />
            </div>
          ) : (
            <p className="item__plain-text font-f-sec font-s-20 text-c-l-dune">
              {text}
            </p>
          )}
        </li>
      )
    );
  }

  return <ul className="description-list">{component}</ul>;
};

export default DescriptionList;
