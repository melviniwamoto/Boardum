import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBoard, faDiceFive } from '@fortawesome/free-solid-svg-icons';
import { WebSite } from '../../startup/both/WebSite';

const SiteLogo = ({ style }) => (
  <span
    style={style}
  >
    <FontAwesomeIcon icon={faChessBoard} />
    {` ${WebSite.name} `}
    <FontAwesomeIcon icon={faDiceFive} />
  </span>
);

export default SiteLogo;
