seajs-css
=========

A Sea.js plugin for circular dependency

Install
-------

Install with spm:

    $ spm install seajs/seajs-circular


Usage
-----

```html
<script src="path/to/sea.js"></script>
<script src="path/to/seajs-circular.js"></script>

<script>

// seajs can load circular dependency module after loading circular plugin.
seajs.use("path/to/some")

</script>
```