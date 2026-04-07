import React from 'react';

const SectionTitle = ({ children, light = false }) => (
  <div className={`section-title-container ${light ? 'light' : 'dark'}`}>
    <h2>{children}</h2>
    <div className="section-title-line"></div>
  </div>
);

export default SectionTitle;
