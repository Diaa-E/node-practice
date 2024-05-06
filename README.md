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
    const objectName = require("path");

    //OR

    const { export1, export2 } = require("path");
    ```