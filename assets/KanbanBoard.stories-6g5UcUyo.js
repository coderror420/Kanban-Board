import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-yIsmwZOr.js";const I=({task:o,onClick:s,draggable:c=!1,onDragStart:i,onDragEnd:d})=>{const[u,r]=g.useState(!1),a={urgent:"border-red-500",high:"border-orange-500",medium:"border-yellow-500",low:"border-green-500"}[o.priority||"low"],l=m=>{r(!0),i==null||i(m)},t=m=>{r(!1),d==null||d(m)};return e.jsxs("div",{draggable:c,onDragStart:l,onDragEnd:t,onClick:()=>s==null?void 0:s(o),className:`bg-white rounded-lg p-3 mb-2 cursor-pointer border-l-4 transition 
        ${a} 
        ${u?"opacity-50 scale-95":"hover:shadow-lg shadow-md"}
      `,children:[e.jsx("h3",{className:"font-semibold text-gray-800",children:o.title}),o.description&&e.jsx("p",{className:"text-sm text-gray-500 mt-1 line-clamp-2",children:o.description})]})};I.__docgenInfo={description:"",methods:[],displayName:"KanbanCard",props:{task:{required:!0,tsType:{name:"KanbanTask"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(task: KanbanTask) => void",signature:{arguments:[{type:{name:"KanbanTask"},name:"task"}],return:{name:"void"}}},description:""},draggable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDragStart:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.DragEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:""},onDragEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.DragEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const K=({column:o,tasks:s,onTaskClick:c,onAddTask:i,onDrop:d,onDragOver:u,onDragStart:r})=>e.jsxs("div",{className:"flex flex-col w-80 bg-gray-50 rounded-lg shadow h-[80vh] overflow-hidden",onDragOver:n=>{n.preventDefault(),u(n)},onDrop:n=>d(n,o.id),children:[e.jsx("div",{className:"sticky top-0 z-10 p-3 text-white font-semibold text-lg rounded-t-lg",style:{backgroundColor:o.color},children:o.title}),e.jsx("div",{className:"flex-1 overflow-y-auto p-3 space-y-2",children:s.length>0?s.map(n=>e.jsx("div",{draggable:!0,onDragStart:a=>r(a,n.id,o.id),children:e.jsx(I,{task:n,onClick:()=>c==null?void 0:c(n)})},n.id)):e.jsx("p",{className:"text-center text-gray-400 italic mt-6",children:"No tasks yet"})}),e.jsx("button",{onClick:i,className:"m-3 py-2 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition",children:"+ Add Task"})]});K.__docgenInfo={description:"",methods:[],displayName:"KanbanColumn",props:{column:{required:!0,tsType:{name:"KanbanColumnType"},description:""},tasks:{required:!0,tsType:{name:"Array",elements:[{name:"KanbanTask"}],raw:"KanbanTask[]"},description:""},onTaskClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(task: KanbanTask) => void",signature:{arguments:[{type:{name:"KanbanTask"},name:"task"}],return:{name:"void"}}},description:""},onAddTask:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDrop:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.DragEvent<HTMLDivElement>, toColumnId: string) => void",signature:{arguments:[{type:{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"},{type:{name:"string"},name:"toColumnId"}],return:{name:"void"}}},description:""},onDragOver:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.DragEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:""},onDragStart:{required:!0,tsType:{name:"signature",type:"function",raw:`(\r
  e: React.DragEvent<HTMLDivElement>,\r
  taskId: string,\r
  fromColumnId: string\r
) => void`,signature:{arguments:[{type:{name:"ReactDragEvent",raw:"React.DragEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"},{type:{name:"string"},name:"taskId"},{type:{name:"string"},name:"fromColumnId"}],return:{name:"void"}}},description:""}}};const j=({isOpen:o,onClose:s,onSave:c,onDelete:i,task:d})=>{const[u,r]=g.useState({id:"",title:"",description:"",priority:"low",status:"todo",createdAt:new Date});g.useEffect(()=>{r(d||{id:"",title:"",description:"",priority:"low",status:"todo",createdAt:new Date})},[d]);const n=l=>{const{name:t,value:m}=l.target;r(p=>({...p,[t]:m}))},a=()=>{u.title.trim()&&(c(u),s())};return o?e.jsx("div",{className:"fixed inset-0 bg-black/40 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white p-6 rounded-2xl w-96 shadow-xl",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:d?"Edit Task":"Add Task"}),e.jsx("input",{type:"text",name:"title",placeholder:"Task title *",value:u.title,onChange:n,className:"w-full border p-2 rounded mb-3",required:!0}),e.jsx("textarea",{name:"description",placeholder:"Description",value:u.description||"",onChange:n,className:"w-full border p-2 rounded mb-3"}),e.jsxs("select",{name:"priority",value:u.priority,onChange:n,className:"w-full border p-2 rounded mb-4",children:[e.jsx("option",{value:"urgent",children:"Urgent"}),e.jsx("option",{value:"high",children:"High"}),e.jsx("option",{value:"medium",children:"Medium"}),e.jsx("option",{value:"low",children:"Low"})]}),e.jsxs("div",{className:"flex justify-between items-center mt-4",children:[i&&e.jsx("button",{onClick:i,className:"bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600",children:"Delete"}),e.jsxs("div",{className:"flex gap-2 ml-auto",children:[e.jsx("button",{onClick:s,className:"bg-gray-300 text-gray-800 px-3 py-2 rounded hover:bg-gray-400",children:"Cancel"}),e.jsx("button",{onClick:a,className:"bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600",children:d?"Update":"Save"})]})]})]})}):null};j.__docgenInfo={description:"",methods:[],displayName:"TaskModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSave:{required:!0,tsType:{name:"signature",type:"function",raw:"(task: KanbanTask) => void",signature:{arguments:[{type:{name:"KanbanTask"},name:"task"}],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},task:{required:!1,tsType:{name:"union",raw:"KanbanTask | null",elements:[{name:"KanbanTask"},{name:"null"}]},description:""}}};const N=({onTaskMove:o})=>{const[s,c]=g.useState(null),i=g.useCallback((r,n,a)=>{c(n),r.dataTransfer.setData("fromColumn",a),r.dataTransfer.effectAllowed="move"},[]),d=g.useCallback(r=>{r.preventDefault()},[]),u=g.useCallback((r,n,a=0)=>{r.preventDefault();const l=r.dataTransfer.getData("fromColumn");s&&l&&n&&o(s,l,n,a),c(null)},[s,o]);return{draggedTaskId:s,handleDragStartWithColumn:i,handleDragOver:d,handleDrop:u}},D=({columns:o,tasks:s,onTaskMove:c,onTaskCreate:i,onTaskUpdate:d,onTaskDelete:u})=>{const[r,n]=g.useState(!1),[a,l]=g.useState(null),[t,m]=g.useState(null),{handleDragStartWithColumn:p,handleDrop:v,handleDragOver:y}=N({onTaskMove:c}),h=k=>{l(k),m(null),n(!0)},b=k=>{m(k),n(!0)},f=k=>{t?d==null||d(t.id,k):a&&(i==null||i(a,k)),n(!1)},E=()=>{t&&(u==null||u(t.id),n(!1))};return e.jsxs("div",{className:"flex gap-4 overflow-x-auto p-4 bg-blue-400 min-h-screen",children:[o.map(k=>e.jsx(K,{column:k,tasks:k.taskIds.map(M=>s[M]),onAddTask:()=>h(k.id),onTaskClick:b,onDrop:v,onDragOver:y,onDragStart:p},k.id)),e.jsx(j,{isOpen:r,onClose:()=>n(!1),onSave:f,onDelete:t?E:void 0,task:t})]})};D.__docgenInfo={description:"",methods:[],displayName:"KanbanBoard",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"KanbanColumn"}],raw:"KanbanColumn[]"},description:""},tasks:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"KanbanTask"}],raw:"Record<string, KanbanTask>"},description:""},onTaskMove:{required:!0,tsType:{name:"signature",type:"function",raw:`(\r
  taskId: string,\r
  fromColumn: string,\r
  toColumn: string,\r
  newIndex: number\r
) => void`,signature:{arguments:[{type:{name:"string"},name:"taskId"},{type:{name:"string"},name:"fromColumn"},{type:{name:"string"},name:"toColumn"},{type:{name:"number"},name:"newIndex"}],return:{name:"void"}}},description:""},onTaskCreate:{required:!0,tsType:{name:"signature",type:"function",raw:"(columnId: string, task: KanbanTask) => void",signature:{arguments:[{type:{name:"string"},name:"columnId"},{type:{name:"KanbanTask"},name:"task"}],return:{name:"void"}}},description:""},onTaskUpdate:{required:!0,tsType:{name:"signature",type:"function",raw:"(taskId: string, updates: Partial<KanbanTask>) => void",signature:{arguments:[{type:{name:"string"},name:"taskId"},{type:{name:"Partial",elements:[{name:"KanbanTask"}],raw:"Partial<KanbanTask>"},name:"updates"}],return:{name:"void"}}},description:""},onTaskDelete:{required:!0,tsType:{name:"signature",type:"function",raw:"(taskId: string) => void",signature:{arguments:[{type:{name:"string"},name:"taskId"}],return:{name:"void"}}},description:""}}};const S={title:"Components/KanbanBoard",component:D},q={"task-1":{id:"task-1",title:"Design homepage",description:"Create Figma mockups for homepage layout",status:"todo",priority:"high",createdAt:new Date},"task-2":{id:"task-2",title:"API integration",description:"Connect frontend with backend endpoints",status:"in-progress",priority:"medium",createdAt:new Date},"task-3":{id:"task-3",title:"Testing",description:"Write unit tests for task module",status:"done",priority:"low",createdAt:new Date}},R=[{id:"todo",title:"To Do",color:"#1E40AF",taskIds:["task-1"]},{id:"in-progress",title:"In Progress",color:"#D97706",taskIds:["task-2"]},{id:"done",title:"Done",color:"#15803D",taskIds:["task-3"]}],T=()=>{const[o,s]=g.useState(R),[c,i]=g.useState(q),d=(a,l,t,m)=>{s(p=>{const v=p.map(f=>({...f})),y=v.find(f=>f.id===l),h=v.find(f=>f.id===t);if(!y||!h)return p;y.taskIds=y.taskIds.filter(f=>f!==a);const b=Math.min(m,h.taskIds.length);return h.taskIds.splice(b,0,a),v}),i(p=>({...p,[a]:{...p[a],status:t}}))},u=(a,l)=>{const t=`task-${Date.now()}`,m={...l,id:t,status:a,createdAt:new Date};i(p=>({...p,[t]:m})),s(p=>p.map(v=>v.id===a?{...v,taskIds:[...v.taskIds,t]}:v))},r=(a,l)=>{i(t=>{const m=t[a];return m?{...t,[a]:{...m,...l}}:t})},n=a=>{i(l=>{const t={...l};return delete t[a],t}),s(l=>l.map(t=>({...t,taskIds:t.taskIds.filter(m=>m!==a)})))};return e.jsx(D,{columns:o,tasks:c,onTaskMove:d,onTaskCreate:u,onTaskUpdate:r,onTaskDelete:n})};T.__docgenInfo={description:"",methods:[],displayName:"Default"};var C,w,x;T.parameters={...T.parameters,docs:{...(C=T.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [columns, setColumns] = useState<KanbanColumn[]>(sampleColumns);
  const [tasks, setTasks] = useState<Record<string, KanbanTask>>(sampleTasks);

  /**Move a task between columns */
  const handleTaskMove = (taskId: string, fromColumn: string, toColumn: string, newIndex: number) => {
    setColumns(prevCols => {
      const updatedCols = prevCols.map(col => ({
        ...col
      }));
      const fromCol = updatedCols.find(c => c.id === fromColumn);
      const toCol = updatedCols.find(c => c.id === toColumn);
      if (!fromCol || !toCol) return prevCols;
      fromCol.taskIds = fromCol.taskIds.filter(id => id !== taskId);
      const insertIndex = Math.min(newIndex, toCol.taskIds.length);
      toCol.taskIds.splice(insertIndex, 0, taskId);
      return updatedCols;
    });
    setTasks(prev => ({
      ...prev,
      [taskId]: {
        ...prev[taskId],
        status: toColumn
      }
    }));
  };

  /** Create a new task */
  const handleTaskCreate = (columnId: string, task: Omit<KanbanTask, "id" | "createdAt" | "status">) => {
    const id = \`task-\${Date.now()}\`;
    const newTask: KanbanTask = {
      ...task,
      id,
      status: columnId,
      createdAt: new Date()
    };
    setTasks(prev => ({
      ...prev,
      [id]: newTask
    }));
    setColumns(prevCols => prevCols.map(col => col.id === columnId ? {
      ...col,
      taskIds: [...col.taskIds, id]
    } : col));
  };

  /** Update task details */
  const handleTaskUpdate = (taskId: string, updates: Partial<KanbanTask>) => {
    setTasks(prev => {
      const task = prev[taskId];
      if (!task) return prev;
      return {
        ...prev,
        [taskId]: {
          ...task,
          ...updates
        }
      };
    });
  };

  /** Delete a task */
  const handleTaskDelete = (taskId: string) => {
    // Remove task from tasks list
    setTasks(prev => {
      const updated = {
        ...prev
      };
      delete updated[taskId];
      return updated;
    });

    // Remove taskId from its column
    setColumns(prevCols => prevCols.map(col => ({
      ...col,
      taskIds: col.taskIds.filter(id => id !== taskId)
    })));
  };
  return <KanbanBoard columns={columns} tasks={tasks} onTaskMove={handleTaskMove} onTaskCreate={handleTaskCreate} onTaskUpdate={handleTaskUpdate} onTaskDelete={handleTaskDelete} // Pass delete handler here
  />;
}`,...(x=(w=T.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const A=["Default"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:T,__namedExportsOrder:A,default:S},Symbol.toStringTag,{value:"Module"}));export{T as D,L as K};
