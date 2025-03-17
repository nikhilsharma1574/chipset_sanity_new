"use client";
import React from "react";
import styled from "styled-components";

interface ParagraphEffectProps {
  children: React.ReactNode;
  title?: string;
}

const ParagraphEffect: React.FC<ParagraphEffectProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <div className="parent">
        <div className="card">
          <div className="glass" />
          <div className="content">
            {title && <div className="title">{title}</div>}
            <div className="text">{children}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* Adjust the container to grow based on text */
  .parent {
    width: 100%;
    max-width: 600px; /* increased width for more text */
    margin: 0 auto; /* center the card */
    perspective: 1000px;
    padding-bottom: 20px;
  }

  .card {
    width: 100%;
    min-height: 300px; /* minimum height, but can grow */
    border-radius: 50px;
    background: linear-gradient(135deg, rgb(243, 158, 47) 0%, rgb(243, 159, 48) 100%);
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px,
                rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
    position: relative;
    padding: 20px;
    overflow: hidden;
  }

  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
    border-radius: 55px;
    border-top-right-radius: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.349) 0%,
      rgba(255, 255, 255, 0.815) 100%
    );
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    transition: all 0.5s ease-in-out;
    padding-bottom: 30px;
  }

  .content {
    position: relative;
    transform: translate3d(0, 0, 26px);
    color: #000;
  }

  .title {
    font-weight: 900;
    font-size: 24px;
    margin-bottom: 15px;
    text-align: center;
  }

  .text {
    font-size: 16px;
    line-height: 1.6;
  }

  /* Keep the original hover 3D effect */
  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px,
                rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
    
  }
`;

export { ParagraphEffect };
