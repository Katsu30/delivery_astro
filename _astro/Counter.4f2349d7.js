import{r as i}from"./index.ed373d49.js";var l={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=i,x=Symbol.for("react.element"),m=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,d=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,s={},p=null,c=null;n!==void 0&&(p=""+n),t.key!==void 0&&(p=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)y.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:x,type:e,key:p,ref:c,props:s,_owner:d.current}}u.Fragment=m;u.jsx=_;u.jsxs=_;l.exports=u;var o=l.exports;const v=()=>{const[e,t]=i.useState(0),n=()=>{t(e+1)},r=()=>{t(e-1)};return o.jsxs(o.Fragment,{children:[o.jsx("p",{children:e}),o.jsx("button",{type:"button",onClick:n,children:"+"}),o.jsx("button",{type:"button",onClick:r,children:"-"})]})};export{v as Counter};
