import React from 'react';
import { useParams } from 'react-router-dom';
import mainLogo from '../../images/logo.png';


function PageLayout() {
  let { pageId } = useParams();
  return (<React.Fragment>
    <img src={mainLogo} height={50} width={50} />
    <h2>{`Page Layout ${pageId}`}</h2>
  </React.Fragment>);
}

export {
  PageLayout
};