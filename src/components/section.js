/** @format */
'use client';
/** @jsxImportSource @emotion/react */
import Item from './item';
import SectionHeader from './sectionHeader';

export default function Section(props) {
  const { title, items } = props.section;

  return (
    <div>
      <SectionHeader title={title} />
      <div style={{ margin: '0 auto' }}>
        {items?.map((item, index) => {
          return <Item key={index} item={item}></Item>;
        })}
      </div>
    </div>
  );
}
