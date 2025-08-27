import React from "react";

export default function ProductCard({ imageUrl, title, description }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Explore</button>
        </div>
      </div>
    </div>
  );
}
