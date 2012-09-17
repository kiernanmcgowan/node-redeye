node-redeye
-----------

Is your code too fast, too readable, or just too good? 

Quitting your job and want to leave a mess?

Think coffee-script is a good language?

redeye will solve all your problems!

what is does
------------

A redeye is a cup of coffee with an espresso shot, a super cup of
energy. 

`redeye` will make
sure that you have to stay up all night trying to decipher the mess that
is your code base on coffee script. 

What makes redeye so great is that you can iterate the number of times
that you what to compile to coffee script. Meaning that you can
convert your lame javascript to coffee script, compile it back to
javascript, then covert it to coffee script again. Repeat until
fired.

example
-------

```
redeye
# converts all javascript files to coffee script with js2coffee

redeye -o
# converts all javascript files to coffee script, then replaces original .js files with compiled coffee script

redeye -n 5 -o
# same as above, but will then will convert compiled coffee script files back to coffe script and recompile them again
# the procedure will repeat 5 times, leaving terror in its wake
```



install
-------

```
npm install redeye -g
```

usage
-----

```
redeye -n <number of cross overs> -p <root path>

  Usage: redeye [options]

  Options:

    -h, --help             output usage information
    -V, --version          output the version number
    -n, --number <number>  number of times to convert from js to coffee [1]
    -p, --path <path>      root directory path [./]
    -o, --overwrite        overwrite existing javascript with compiled coffee script
```


license
-------

Copyright (c) 2012 Tim McGowan (dropdownmenu)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
