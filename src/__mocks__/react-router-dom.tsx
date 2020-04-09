import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const rrd = require('react-router-dom');

// eslint-disable-next-line react/display-name
rrd.BrowserRouter = ({ children }: any) => <div>{children}</div>;
module.exports = rrd;
