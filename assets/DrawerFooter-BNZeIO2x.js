import{r as n,l as d,m as u,n as p,p as h,q as f,s as g,u as m,t,T as j,S as i,L as _,v as S,x as L}from"./index-R88teZQy.js";var c={},C=u,b=p;Object.defineProperty(c,"__esModule",{value:!0});var v=c.default=void 0,R=b(n),q=C(d()),k=(0,q.default)(R.createElement("path",{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"}),"Brightness4");v=c.default=k;var l={},w=u,z=p;Object.defineProperty(l,"__esModule",{value:!0});var x=l.default=void 0,E=z(n),$=w(d()),D=(0,$.default)(E.createElement("path",{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"}),"Brightness7");x=l.default=D;const I=h(e=>f({container:{padding:"5px 0 15px 0"},icon:{color:e.palette.secondary.main,transition:"color 250ms","&:hover":{color:e.palette.primary.main,cursor:"pointer"}}}));function M(){const e=g(),r=m(),a=I();return t.jsx("div",{className:a.container,children:r.palette.type==="light"?t.jsx(x,{"data-testid":r.palette.type,onClick:e,fontSize:"large",className:a.icon}):t.jsx(v,{"data-testid":r.palette.type,onClick:e,fontSize:"large",className:a.icon})})}const T=h(e=>f({footer:{position:"fixed",bottom:0,padding:15,width:240},themeLabel:{textAlign:"center"},icon:{color:e.palette.primary.main,transition:"color 250ms",width:"100%","&:hover":{color:e.palette.secondary.main,cursor:"pointer"}}}));function B(){const e=T(),r=m(),[a,y]=n.useState();return n.useEffect(()=>{(async()=>{const o=await L();y(o)})()},[]),t.jsxs("div",{className:e.footer,children:[t.jsx(j,{className:e.themeLabel,color:"textSecondary",children:r.palette.type==="light"?"Give your eyes a break!":"Isn't that better?"}),t.jsx(i,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-start",children:t.jsx(M,{})}),t.jsx(i,{container:!0,direction:"row",justify:"space-around",alignItems:"flex-start",children:a==null?void 0:a.map((s,o)=>t.jsx(i,{item:!0,xs:3,children:t.jsx(_,{href:s.link,target:"_blank",rel:"noreferrer","aria-label":s.name,children:t.jsx(S,{iconKey:s.icon,iconClass:e.icon})})},o))})]})}export{B as default};
