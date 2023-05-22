/** @format */
'use client';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
export default function SectionHeader(props) {
  return (
    <header css={head}>
      <span css={line}></span>
      <h1 css={title}> {props.title} </h1>
      <span css={line}></span>
    </header>
  );
}

const head = css`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:hover {
    & > h1 {
      background-color: #ddd;
    }
    & > span {
      border-top: 1px solid #ddd;
    }
  }
`;

const title = css`
  width: 24%;
  min-width: 100px;
  padding: 4px 10px;
  border-radius: 32px;
  font-weight: 500;
  text-align: center;
  background-color: rgb(245, 245, 245);
  font-size: larger;
`;

const line = css`
  width: 30%;
  border-top: 1px solid #ededed;
`;
