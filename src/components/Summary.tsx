import { FC } from 'react';

interface SummaryProps {
  summary: { title: string; text: string }[];
}

const Summary: FC<SummaryProps> = ({ summary }) => {
  const summaryItems = summary.map((item, i) => (
    <li key={i + 1} className="summary__item">
      <h3 className="summary__title font-s-12-secondary">{item.title}</h3>
      <p className="summary__text font-s-16 font-f-sec font-w-r">{item.text}</p>
    </li>
  ));

  return <ul className="summary">{summaryItems}</ul>;
};

export default Summary;
