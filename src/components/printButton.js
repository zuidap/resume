/** @format */
'use client';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
export default function PrintButton() {
  async function printPdf() {
    const printJS = (await import('print-js')).default;
    printJS({
      printable: 'printImg',
      type: 'html',
    });
  }
  return (
    <div css={style} onClick={printPdf}>
      打印
    </div>
  );
}

const style = css`
  color: white;
  background-color: 'var(--c1)';
  padding: 8px 12px;
  border-radius: 4px;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
`;
