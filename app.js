const head=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
    [React.createElement("h1",{id:"head"},"hello  world"),
    React.createElement("h1",{id:"heading"},"IAm H2 head")]
),React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"head"},"hello  world"),
React.createElement("h1",{id:"heading"},"IAm H2 head")]
)])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(head)