import * as React from 'react';
const rrd = require('react-router-dom');

rrd.BrowserRouter = ({children} : any) => <div>{children}</div>
module.exports = rrd;
