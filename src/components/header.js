/** @format */
'use client';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Header(props) {
  const { user, job, connects } = props.userData;

  return (
    <div css={header}>
      {/* title 名字和工作 */}
      <section css={title}>
        <p css={name}>
          {user.name}
          <small>{user.enName}</small>
        </p>
        <p css={jobStyle}>
          {job.postName}
          <small>/{job.city}</small>
        </p>
      </section>

      <div css={content}>
        {/* user info */}
        <section>
          <p>{`${user.sex} / ${user.bir} ${user.native}`}</p>
          <p>{`${user.degree} / ${user.endTime}年毕业`}</p>
          <p>
            <a href={user.schoolUrl}>{user.school}</a>
            <span style={{ marginLeft: '10px' }}>{user.professional}</span>
          </p>
        </section>
        {/*user connect  */}
        <section>
          <ul>
            {connects?.map((item) => {
              return (
                <li key={item.name}>
                  <a
                    href={item.url}
                    rel='noreferrer'
                    target={item.isBlank ? '_blank' : ''}
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}

const header = css`
  color: #fff;
  background: linear-gradient(90deg, var(--c1) 0%, var(--c2) 100%);
  padding: 10px 50px;
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    opacity: 0.8;
  }
`;

const title = css`
  padding: 20px 0;
  margin: 10px auto;
  border-bottom: 2px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const name = css`
  font-size: 52px;
  letter-spacing: 5px;
  & > small {
    margin-left: 10px;
    font-size: 24px;
    letter-spacing: 0;
  }
`;

const jobStyle = css`
  font-size: 24px;
  text-align: right;
  & > small {
    margin-left: 5px;
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;

const content = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
  & > section {
    font-size: 15px;
    line-height: 30px;
  }
  & > section:first-of-type {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
