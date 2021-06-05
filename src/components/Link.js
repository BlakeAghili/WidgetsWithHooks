import React, { useState, useEffect } from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // so that holding down CTRL key opens the link in a new tab as browser's default behaviour.
    if (event.metakey || event.ctrlkey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
