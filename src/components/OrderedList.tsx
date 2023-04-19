import React, { FC } from 'react';

import LinkMasked from '@/components/LinkMasked';
import { LINK_MASKED } from '@/utils/constants';
import { LinkProps } from '@/utils/types';

interface OrderedListProps {
  title?: string;
  items?: Array<
    LinkProps & {
      id: string;
    }
  >;
  type?: string;
}

const OrderedList: FC<OrderedListProps> = ({
  title = '',
  items = [],
  type = '',
}) => {
  const cssClassesLinkMasked =
    'orderedlist__text font-s-18 text-c-mercury-light';
  const orderedListItems = items?.map(({ id, url, text }) => {
    if (type === LINK_MASKED) {
      return (
        <li key={id} className="orderedlist__item">
          <div className="orderedlist__item-dash" />
          <LinkMasked
            text={text}
            url={url!}
            cssClasses={cssClassesLinkMasked}
            target="_blank"
          />
        </li>
      );
    }

    return (
      <li key={id} className="orderedlist__item">
        <div className="orderedlist__item-dash" />
        <a href={url} target="_blank" className="orderedlist__text">
          {text}
        </a>
      </li>
    );
  });

  return (
    <div className="orderedlist">
      {title?.length > 0 && (
        <h5 className="orderedlist__title font-s-12-secondary">{title}</h5>
      )}
      <ol className="orderedlist__list">{orderedListItems}</ol>
    </div>
  );
};

export default OrderedList;
