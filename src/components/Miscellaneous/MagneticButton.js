import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

/** Internal app paths get a Router <Link> so navigation stays client-side. */
const isInternal = (href) =>
  typeof href === 'string' && href.startsWith('/') && !href.startsWith('/#');

const MagneticButton = ({
  href = '/#',
  children = "Let's Talk!",
  className = '',
  iconClass = 'bi bi-arrow-right ms-1',
  ...rest
}) => {
  const spanRef = useRef(null);

  const updatePosition = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const parentOffsetLeft = rect.left + window.scrollX;
    const parentOffsetTop = rect.top + window.scrollY;
    const relX = e.pageX - parentOffsetLeft;
    const relY = e.pageY - parentOffsetTop;

    if (spanRef.current) {
      spanRef.current.style.top = `${relY}px`;
      spanRef.current.style.left = `${relX}px`;
    }
  };

  const inner = (
    <>
      {children}
      <i className={`icon ${iconClass}`} />
      <span ref={spanRef} />
    </>
  );

  const props = {
    className: `btn magnetic-button ${className}`,
    onMouseEnter: updatePosition,
    onMouseLeave: updatePosition,
    ...rest,
  };

  /* A `download` href still starts with "/" (it's a same-origin file, e.g.
     "/files/cv.pdf") but must stay a plain <a> — a Router <Link> would try
     to client-route it instead of letting the browser fetch/save the file. */
  if (isInternal(href) && !props.download) {
    return <Link to={href} {...props}>{inner}</Link>;
  }

  return <a href={href} {...props}>{inner}</a>;
};

export default MagneticButton;
