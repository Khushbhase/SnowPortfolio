import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const inspirations = [
  {
    name: "Inspiration 1",
    description: "Description of Inspiration 1",
    imageSrc: "image-url-1",
  },
  {
    name: "Inspiration 2",
    description: "Description of Inspiration 2",
    imageSrc: "image-url-2",
  },
  // Add more inspirations as needed
];

function Inspirations() {
  return (
    <div className="inspirations">
      <h2>Inspirations</h2>
      <div className="inspiration-list">
        {inspirations.map((inspiration, index) => (
          <div key={index} className="inspiration">
            <LazyLoadImage src={inspiration.imageSrc} alt={inspiration.name} />
            <h3>{inspiration.name}</h3>
            <p>{inspiration.description}</p>
          </div>
        ))}
      </div>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default Inspirations;
