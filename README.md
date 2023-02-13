# L4d2PanelPluginTemplate

This template project allows you to compile your Vue.js components as web components and load them in other Vue.js applications dynamically.

## Getting start

### Steps to write your plugins

1. Clone repository to local with command `git clone https://github.com/deximy/L4d2PanelPluginTemplate.git`.

2. Install dependencies with command `npm install`.

2. Write your components normally, and invoke it in `App.vue`.

### Steps to debug your plugins

1. **Comment** `customElement: true,` in `vite.config.ts`.

2. Use command `npm dev` or `vite` to start dev server like normal Vue.js project.

### Steps to build your plugins

1. Customize your web components' tag names in `src/lib-main.ts` with `customElements.define`.

2. Modify `public/index.html`. Load a JavaScript library named after the project name (like "l4d2panel.plugin.template.js"), which can be modified in `package.json`, between `<head>` and `</head>` with a `<script>` tag and invoke your web components with your custom tag names between `<body>` and `</body>`.

3. **Uncomment** `customElement: true,` in `vite.config.ts`.

4. Build your Vue.js application as web component with command `npm build`. It should generate a JavaScript library named after the project name (like `l4d2panel.plugin.template.js`), which can be modified in `package.json`.

### Steps before publishing your plugins

1. Use command `npm preview` or `vite preview` to start preview server. It can help you test whether your web components would work fine in normal web page or not.

2. You can modify `public/index.html` further to emulate the real scenario.
