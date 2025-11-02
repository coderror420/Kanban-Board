import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as t}from"./index-BxvCFfQM.js";import{M as i,C as o,S as a}from"./index-BABw-wLO.js";import{K as d,D as c}from"./KanbanBoard.stories-6g5UcUyo.js";import"./index-yIsmwZOr.js";import"./iframe-BPR4V1OS.js";import"./index-CZ_84MJS.js";import"./index-DLXLKNMB.js";import"./index-DrFu-skq.js";function e(s){const r={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:d}),`
`,n.jsx(r.h1,{id:"kanban-board-overview",children:"Kanban Board Overview"}),`
`,n.jsxs(r.p,{children:["The ",n.jsx(r.strong,{children:"Kanban Board"}),` component helps organize and visualize project tasks across\r
different workflow stages like `,n.jsx(r.strong,{children:"To Do"}),", ",n.jsx(r.strong,{children:"In Progress"}),", and ",n.jsx(r.strong,{children:"Done"}),"."]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"preview",children:"Preview"}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"props",children:"Props"}),`
`,n.jsxs(r.p,{children:[`| Prop | Type | Description |\r
|------|------|-------------|\r
| `,n.jsx(r.code,{children:"tasks"})," | ",n.jsx(r.code,{children:"KanbanTask[]"}),` | Tasks to display in board columns |\r
| `,n.jsx(r.code,{children:"columns"})," | ",n.jsx(r.code,{children:"string[]"}),` | Column names for board |\r
| `,n.jsx(r.code,{children:"onTaskMove"})," | ",n.jsx(r.code,{children:"(id: string, status: string) => void"})," | Called when a task moves |"]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"example-story",children:"Example Story"}),`
`,n.jsx(o,{children:n.jsx(a,{of:void 0})}),`
`,n.jsx(r.hr,{})]})}function v(s={}){const{wrapper:r}={...t(),...s.components};return r?n.jsx(r,{...s,children:n.jsx(e,{...s})}):e(s)}export{v as default};
