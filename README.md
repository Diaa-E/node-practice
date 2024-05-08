# Node JS Practice Notes

1. [Global Objects](#global-objects)
1. [Common JS](#common-js)
1. [ES Modules](#es-modules)
1. [NPM Scripts](#npm-scripts)
1. [Environment Variables](#environment-variables)
1. [File System Module](#file-system-module)
1. [Path Module](#path-module)
1. [Global Process Object](#global-process-object)

## Global Objects 

1. window ❌ -> global ✅
1. document ❌ -> process ✅

## Common JS

1. Export
    ```js
    module.exports = defaultExport;

    //OR

    module.exports = { export1, export2 }
    ```

1. Import
    ```js
    const objectName = require("path/module"); //.js is not required

    //OR

    const { export1, export2 } = require("path/module");
    ```
## ES Modules

1. To use ES Modules, either add use .mjs as js file extenstion or add to package.json:
    ```json
    {
        "type": "module"
    }
    ```

1. Export 
    ```js
    export default defaultExport;

    //OR

    export {
        export1,
        export2
    }

    //OR

    export const export1;
    export const export2;

    //OR

    export default defaultExport;
    export const export1;
    ```

1. Import
    ```js
    import defaultExport from "path/module.js"; //.js is required

    //OR

    import { export1, export2 } from "path/module.js";

    //OR

    import { export1 as alias1 } from "path/module.js"; 

    //OR

    import defaultExport, { export1 } from "path/module.js"; 
    ```

## NPM Scripts

1. Some script names don't require ```npm run``` like ```npm start```

## Environment variables

1. .env file that contains any hidden information that shouldn't be in a repository i.e API keys.
1. All envrironment variables defined in the .env file are available in the ```process.env.VARIABLE_NAME```.

## File System Module

1. File paths are absolute (starting from root directory)
1. many function from the callback version module have a sync version, they are the same function but are blocking.

## Path Module

1. ```path.join()``` not ```[...].join("/")``` because not all systems use the same delimeters, path module uses the one fit for the current working system.

## Global Process Object

1. ```process.argv``` contains by default 2 arguments, node location and current file location. Arguments can be added to the array by passing them while running the file with node ex: ```node dir/file.js -flag``` -flag is added to the end of the argv array. this is useful for creating CLIs.
1. ```process.env``` comes with some environment variables about the running computer beside what is added in the loaded .env file, ex: ```process.env.LOGNAME``` returns the current logged in user.