import Link from "next/link";
import React from "react";

export default function ProductCard({
  id,
  imageUrl,
  title,
  description,
  price,
}) {
  return (
    // <div className="card bg-base-100 w-96 shadow-sm">
    //   <figure className="h-48 w-full overflow-hidden">
    //     <img
    //       src={imageUrl}
    //       alt={title}
    //       className="object-cover w-full h-full"
    //     />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">{title}</h2>
    //     <p>{description}</p>
    //     <div className="card-actions justify-end">
    //       <span className="text-xl">$29/mo</span>
    //       <button className="btn btn-primary">Explore</button>
    //     </div>
    //   </div>
    // </div>
    <div className="card bg-base-100 w-96 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <figure className="h-48 w-full overflow-hidden relative">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 badge badge-neutral">
          ${price}
        </div>
      </figure>

      <div className="card-body">
        <h2 className="card-title text-base-content mb-2">{title}</h2>
        <p className="text-base-content/70 mb-4">{description}</p>
        <div className="card-actions justify-center">
          <Link href={`/products/${id}`} className="btn btn-primary w-full">
            Explore Product
          </Link>
        </div>
      </div>
    </div>
  );
}
