/** @format */
'use client';
/** @jsxImportSource @emotion/react */
import { KEYS } from '@/assets/contains';
import { css } from '@emotion/react';
import IconP from './iconP';
function searchDo(item) {
  let content = item.content;
  if (!item.content) {
    return <br />;
  } else {
    let re;
    for (let i = 0; i < KEYS.length; i++) {
      let keyWord = KEYS[i];
      re = new RegExp(`${keyWord}`);
      // 关键词 加粗
      content = content?.replace(re, `<strong> ${keyWord}</strong>`);
    }
    return content;
  }
}

export default function Item(props) {
  const { item } = props;
  return (
    <div css={itemStyle}>
      {!item.name || (
        <header css={head}>
          <h3>{item.name}</h3>
          <h4>{item.time || ''}</h4>
        </header>
      )}

      <div>
        <div css={content}>
          {!item.content || (
            <>
              {item.hvIcon && (
                <i>
                  <IconP icon={'icon-dot'}></IconP>
                </i>
              )}
              <p dangerouslySetInnerHTML={{ __html: searchDo(item) }}></p>
            </>
          )}
        </div>
        {/* 如果有children，再渲染子item */}
        {item.childrens?.map((childrenItem, index) => {
          return (
            <div
              key={index}
              style={
                childrenItem.hvIcon
                  ? { paddingLeft: '0px' }
                  : { paddingLeft: '20px' }
              }
            >
              <Item item={childrenItem}></Item>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const strongStyle = css`
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Microsoft YaHei',
    '微软雅黑', Arial, sans-serif;
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
  color: #494949;
  margin: 0 3px;
  padding: 3px 8px;
  background-color: #f6f6f6;
  border-radius: 5px;
  border: 1px solid rgb(235, 235, 235);
  &:hover {
    background-color: #ddd;
  }
`;
const itemStyle = css`
  width: 100%;
  strong {
    ${strongStyle}
  }
`;

const head = css`
  line-height: 35px;
  overflow: hidden;
  padding: 0px 0;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &:hover {
    color: #222;
    background-color: rgb(250, 250, 250);
  }
  & > h3 {
    font-size: 16px;
  }
  & > h4 {
    font-size: 14px;
    color: #777777;
  }
`;

const content = css`
  line-height: 30px;
  overflow: hidden;
  font-weight: 500;
  color: #777777;
  display: flex;
  align-items: start;
  &:hover {
    color: #222;
    background-color: rgb(250, 250, 250);
  }
  & > i {
    color: var(--c1);
    padding-right: 5px;
  }
`;
