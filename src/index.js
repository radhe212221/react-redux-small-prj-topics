import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Root from './redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);
