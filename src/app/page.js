/** @format */
'use client';
/** @jsxImportSource @emotion/react */
import { PENG } from '@/assets/contains';
import EditButton from '@/components/editButton';
import Header from '@/components/header';
import Section from '@/components/section';
import { css } from '@emotion/react';
export default function Home() {
  const {
    userData,
    sectionJob,
    sectionSkills,
    sectionProject,
    sectionAssessment,
  } = PENG;
  return (
    <main css={resume} className='page'>
      <div id='printImg' css={content}>
        <Header userData={userData} />
        <div css={sections}>
          <div css={column}>
            <Section section={sectionJob} />
            <Section section={sectionSkills} />
          </div>
          <div css={column}>
            <Section section={sectionProject} />
          </div>
        </div>
        <div style={{ margin: '40px' }}>
          <Section section={sectionAssessment} />
        </div>
      </div>
      <div css={editButton}>
        <EditButton />
      </div>
    </main>
  );
}
const resume = css`
  width: 100%;
  background-color: #f5f7fa;
  padding: 0.1px;
  @media print {
    padding: 0;
    background-color: #fff;
  }
`;
const content = css`
  max-width: 1024px;
  min-height: 1440px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  border-radius: 10px;
  margin: 60px auto;
  font-size: 14px;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
  @media print {
    margin: 0;
    padding: 0;
    border-radius: 0;
    box-shadow: none;
  }
`;
const sections = css`
  width: 100%;
  background-color: #ffffff;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media print {
    page-break-after: always;
  }
`;
const column = css`
  flex: 1 1 auto;
  padding: 10px 40px;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const editButton = css`
  margin-left: 530px;
  position: fixed;
  top: 16px;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media print {
    display: none;
  }
`;
