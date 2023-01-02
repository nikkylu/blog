import React from "react";
import PropTypes from "prop-types";

const Embed = ({ embedId }) => (
  <div className="Embed">
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      // title="Embedded youtube"
    />
  </div>
);

Embed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Embed;