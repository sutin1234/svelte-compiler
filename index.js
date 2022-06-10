const svelteCompiler = require('svelte/compiler')
const fs = require('fs')
const path = require('path')

const svelteCompilerOptions = {
    name: 'Foo', format: 'esm', generate: 'ssr', cssHash: ({ hash, css }) => `thinny-${hash(css)}`
}

const pathToComponents = path.join(__dirname, './src/Component.svelte')
const svelteCode = fs.readFileSync(pathToComponents, 'utf-8')
const { js, css } = svelteCompiler.compile(svelteCode, svelteCompilerOptions)

fs.writeFileSync(path.join(__dirname, './output.js'), js.code, 'utf-8')
fs.writeFileSync(path.join(__dirname, './output.css'), css.code, 'utf-8')

