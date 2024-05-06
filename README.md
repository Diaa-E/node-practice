# Node JS Practice Notes

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