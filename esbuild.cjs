const {build} = require("esbuild");
const { nodeExternalsPlugin } = require("esbuild-node-externals");
build({
  entryPoints: ["./src/index.js"],
  outfile: "dist/index.js",
  bundle: true,
  minify: true,
  treeShaking: true,
  platform: "node",
  format: "cjs",
  target: "esnext",
  plugins: [ nodeExternalsPlugin()]
}).catch(() => process.exit(1));
