# Development Traps

> 1. For pure cljs without javascript, it is ok to make the compiler-options :advance,
>    however, with javascript this options should be avoid because json object like {abc: "123"}
>    it is likely to be optimize into {a: "123"}

> 1. Always use python -m SimpleHTTPServer to Test the release version instead of the vscode live server

> 1. in webpack targetLibrary should be commonjs which really resolves a lot, such as cljs and js cannot import es5 compiled files

> 1. in package.json remember to remove ^ in the package version

> 1. shadow-cljs 2.8.23 is stable use it
