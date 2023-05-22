/** @format */
'use client';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
export default function EditButton() {
  const [designMode, setDesignMode] = useState(false);
  function edit() {
    if (document.designMode === 'off') {
      document.designMode = 'on';
      setDesignMode(true);
    } else if (document.designMode === 'on') {
      document.designMode = 'off';
      setDesignMode(false);
    }
  }
  return (
    <div
      css={button}
      style={{ backgroundColor: designMode ? 'gray' : 'var(--c1)' }}
      onClick={edit}
    >
      {designMode ? '退出编辑' : '编辑'}
    </div>
  );
}
const button = css`
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
`;
