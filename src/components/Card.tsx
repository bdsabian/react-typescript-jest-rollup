import * as React from 'react';

export interface CardProps {
  title: string;
  image: string;
  body: string;
}

export const Card = ({ title, image, body }: CardProps) => (
  <div className="card">
    <div className="title">{title}</div>
    <div className="image">
      <img src={image} />
    </div>
    <div className="body">{body}</div>
  </div>
);

export default Card;
