/*** File generated by PJs http://jaredforsyth.com/projects/pjs ***/

// from source file /home/jared/clone/pjs/test/py2js/lists/extend.py

load("./build/pjslib.js");
var console = {log:function(){print.apply(this, arguments);}};
module('/home/jared/clone/pjs/test/py2js/lists/extend.py', function (_) {
    _.__doc__ = "";
    _.list1 = $b.list([1, 2, $b.str('f'), 44]);
    _.list2 = $b.list([$b.str('a'), 99, 77]);
    _.list3 = _.list1.__getitem__($b.slice(null, null, 1));
    _.list3.extend(_.list2);
    var __pjs_iter0 = $b.foriter(_.list3);
    while (__pjs_iter0.trynext()) {
        _.item = __pjs_iter0.value;
    
        $b.print(_.item);//, true
    }
});

__builtins__.__import__('sys').argv = __builtins__.list(arguments);
__builtins__.run_main('/home/jared/clone/pjs/test/py2js/lists/extend.py', ['/home/jared/clone/pjs', '/home/jared/clone/pjs', '/home/jared/python', '/usr/lib/python2.6', '/usr/lib/python2.6/plat-linux2', '/usr/lib/python2.6/lib-tk', '/usr/lib/python2.6/lib-old', '/usr/lib/python2.6/lib-dynload', '/usr/lib/python2.6/dist-packages', '/usr/lib/python2.6/dist-packages/PIL', '/usr/lib/python2.6/dist-packages/gst-0.10', '/usr/lib/pymodules/python2.6', '/usr/lib/python2.6/dist-packages/gtk-2.0', '/usr/lib/pymodules/python2.6/gtk-2.0', '/usr/local/lib/python2.6/dist-packages']);
