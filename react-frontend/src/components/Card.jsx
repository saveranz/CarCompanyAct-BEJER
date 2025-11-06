import React from 'react';

export default function Card({ icon: Icon, title, description }) {
  return (
    <div className="card card-panel">
      <div className="card-icon" aria-hidden>
        {Icon ? <Icon /> : null}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
    </div>
  );
}
