(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{18:function(e,n,t){},19:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),o=t(13),s=t.n(o),a=(t(18),t(9)),c=(t(19),t(11)),l=t(7),d=t(1),u=new(t(21).Converter);var h="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n\n",f=function(){var e=Object(r.useState)(h),n=Object(a.a)(e,2),t=n[0],i=n[1];return Object(d.jsxs)("div",{className:"App container",children:[Object(d.jsx)("div",{className:"editor",children:Object(d.jsxs)(l.a,{controlId:"formControlsTextarea",children:[Object(d.jsx)(c.a.Label,{children:Object(d.jsx)("h2",{children:"Markdown Input"})}),Object(d.jsx)(c.a.Control,{id:"editor",as:"textarea",placeholder:"Enter Markdown",value:t,onChange:function(e){return function(e){i(e)}(e.target.value)}})]})}),Object(d.jsxs)("div",{className:"preview",children:[Object(d.jsx)("h2",{children:"Markdown Output"}),Object(d.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:u.makeHtml(t)}})]})]})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,o=n.getLCP,s=n.getTTFB;t(e),r(e),i(e),o(e),s(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),j()}},[[24,1,2]]]);
//# sourceMappingURL=main.6ee7b6d4.chunk.js.map