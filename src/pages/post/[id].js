import { useState } from "react";
import Link from "next/link";

import Avatar from "src/components/Avatar";
import Modal from "src/components/Modal";

import styled from "styled-components";

export default function Home() {
  const [isShowModal, setShowModal] = useState(false);
  const [liked, setLike] = useState(false);
  const [saved, setSave] = useState(false);

  return (
    <>
      <StyledPostDetail>
        {/* <div className="image" onDoubleClick={() => setLike(!liked)}>
          <img src="https://picsum.photos/600/600" alt="" />
        </div> */}
        <div className="detail">
          <div className="header">
            <Avatar size="sm" />
            <Link href="#">
              <a>mehmetsagirdev</a>
            </Link>
            <button>
              <svg fill="#262626" height="16" viewBox="0 0 48 48" width="16">
                <circle cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle>
                <circle
                  clip-rule="evenodd"
                  cx="24"
                  cy="24"
                  fill-rule="evenodd"
                  r="4.5"
                ></circle>
                <circle clip-rule="evenodd" cx="40" cy="24" r="4.5"></circle>
              </svg>
            </button>
          </div>

          <div className="description">
            <Avatar size="sm" />
            <div>
              <Link href="#">
                <a>mehmetsagirdev</a>
              </Link>
              <p>Lorem ipsum dolor.</p>
              <span>9h</span>
            </div>
          </div>

          <div className="comments">
            {/* <div>
              <Avatar size="sm" />
              <div>
                <Link href="#"><a>mehmetsagirdev</a></Link>
                <p>Lorem ipsum dolor.</p>
              </div>
            </div> */}
          </div>

          <div className="actions">
            <div>
              <button onClick={() => setLike(!liked)}>
                {liked ? (
                  <svg
                    fill="#ed4956"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    
                  </svg>
                ) : (
                  <svg
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                   
                  </svg>
                )}
              </button>
              <button>
                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                  
                </svg>
              </button>
              <button>
                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                  <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                </svg>
              </button>
            </div>
            <button onClick={() => setSave(!saved)}>
              {saved ? (
                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                  <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 28.9 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1z"></path>
                </svg>
              ) : (
                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                  <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                </svg>
              )}
            </button>
          </div>
          <button onClick={() => setShowModal(true)}>130 likes</button>
          <div className="comment">
            <input type="text" placeholder="Add a comment" />
            <button>Post</button>
          </div>
        </div>
      </StyledPostDetail>
      {isShowModal && <Modal type="likes" isHide={setShowModal} />}
    </>
  );
}

const StyledPostDetail = styled.div`
  display: flex;

  .image {
    width: 600px;
    height: 600px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .detail {
    flex: 1;
    border: 1px solid #dbdbdb;
    border-left: none;

    & > button {
      margin: 0 16px;
      font-size: 14px;
      font-weight: 600;
    }
  }

  .header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 72px;
    padding: 16px;
    border-bottom: 1px solid #efefef;

    a {
      font-size: 14px;
      font-weight: 600;
      color: #262626;
      &:hover {
        text-decoration: underline;
      }
    }
    a:nth-child(2) {
      margin-left: 10px;
    }
    button {
      margin-left: auto;
    }
  }

  .description {
    display: flex;
    width: 100%;
    height: 72px;
    padding: 16px;

    div {
      margin-left: 10px;
      a {
        font-size: 14px;
        font-weight: 600;
        color: #262626;
        margin-right: 5px;
        &:hover {
          text-decoration: underline;
        }
      }
      p {
        display: inline-block;
        font-size: 14px;
      }
      span {
        display: block;
        font-size: 12px;
        font-weight: 400;
        color: #8e8e8e;
        margin-top: 7px;
      }
    }
  }

  .comments {
    min-height: 323px;
    max-height: 323px;
    overflow-y: auto;
    div {
      display: flex;
      width: 100%;
      padding: 10px 16px;
      & > a {
        margin-top: 15px;
      }
      div {
        display: block;
        a {
          font-size: 14px;
          font-weight: 600;
          color: #262626;
          &:hover {
            text-decoration: underline;
          }
        }
        p {
          font-size: 14px;
        }
      }
    }
  }

  .actions {
    border-top: 1px solid #efefef;
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;

    div {
      display: flex;
      gap: 16px;
    }
  }

  .comment {
    margin-top: 10px;
    display: flex;
    height: 55px;
    border-top: 1px solid #efefef;
    input {
      padding: 0 16px;
      flex: 1;
    }
    button {
      padding: 0 16px;
      font-weight: 600;
      color: #0095f6;
    }
  }
`;
