(this["webpackJsonpgenerate-coords-try"]=this["webpackJsonpgenerate-coords-try"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(5),o=n.n(r),s=(n(4),n(2)),i=n(0);function l(){return Object(i.jsxs)("nav",{className:"flex justify-between items-center bg-gray-800",children:[Object(i.jsx)("h1",{className:"text-4xl text-white p-3",children:"Coords Generator"}),Object(i.jsx)("a",{className:"text-2xl text-white p-3",href:"https://urdreamboi.github.io",children:"backhome"})]})}function u(t,e,n){var c=t.coords.longitude,a=t.coords.latitude,r=e/111300,o=Math.random(),s=Math.random(),i=r*Math.sqrt(o),l=2*Math.PI*s,u=i*Math.cos(l),d=i*Math.sin(l),b=u/Math.cos(a);return{location:"Location ".concat(n),lat:d+a,lng:b+c}}var d=function(){var t=Object(c.useState)({coords:{longitude:"",latitude:""}}),e=Object(s.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),d=o[0],b=o[1],j=Object(c.useState)(""),h=Object(s.a)(j,2),x=h[0],g=h[1],m=Object(c.useState)([]),O=Object(s.a)(m,2),f=O[0],p=O[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsxs)("div",{className:"container mx-auto my-3",children:[Object(i.jsx)("h1",{className:"text-center",children:"This app generates random geo coordinates around you"}),Object(i.jsxs)("form",{className:"flex justify-center m-3",onSubmit:function(t){t.preventDefault(),!isNaN(d)&!isNaN(x)?a({coords:{longitude:x,latitude:d}}):alert("Enter Numbers")},children:[Object(i.jsx)("input",{className:"text-center border-2 border-black mx-2",type:"text",placeholder:"Enter Latitude",onChange:function(t){return b(t.target.value)}}),Object(i.jsx)("input",{className:"text-center border-2 border-black mx-2",type:"text",placeholder:"Enter Longitude",onChange:function(t){return g(t.target.value)}}),Object(i.jsx)("button",{className:"text-center bg-gray-300 p-2 rounded-lg",type:"submit",children:"Submit"})]}),Object(i.jsx)("button",{className:"text-center mx-auto block p-2 rounded-lg bg-gray-600 text-white",onClick:function(){navigator.geolocation.getCurrentPosition((function(t){a(t)})),p(function(t,e,n){for(var c=[],a=0;a<n;a++)c.push(u(t,e,a));return c}(n,1e5,500)),console.log(f)},children:"Or Press me for current location"}),Object(i.jsx)("p",{className:"text-center",children:n.coords.latitude?"".concat(n.coords.latitude,", ").concat(n.coords.longitude):""})]}),Object(i.jsx)("div",{className:"",children:Object(i.jsx)("div",{className:"container mx-auto bg-gray-400 border-2 border-black",children:f.map((function(t){return Object(i.jsx)("div",{children:"{location: ".concat(t.location,", lat : ").concat(t.lat,", lng : ").concat(t.lng,"},")})}))})})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),b()},4:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.2cb42a9e.chunk.js.map