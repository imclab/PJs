/*** File generated by PJs http://jaredforsyth.com/projects/pjs ***/

// from source file /home/jared/clone/pjs/test/py2js/basic/float2int.py

load("build/pjslib.js");
var console = {log:function(){print.apply(this, arguments);}};
var window  = this;
module('/home/jared/clone/pjs/test/py2js/basic/float2int.py', function (_) {
    _.__doc__ = "";
    var __pjs_iter_1 = $b.foriter($b.list([$b._float(123.456), $b._float(1.1), $b._float(-0.00045), $b._float(-1.45), $b._float(1.5), $b._float(1.02242e+06)]));
    while (__pjs_iter_1.trynext()) {
        _.f = __pjs_iter_1.value;
    
        _.i = $b._int(_.f);
        $b.print(_.i);//, true
    }
});

__builtins__.__import__('sys').argv = __builtins__.list(arguments);
var pjs_main = __builtins__.run_main('/home/jared/clone/pjs/test/py2js/basic/float2int.py', ['/home/jared/clone/pjs', '/home/jared/clone/pjs', '/home/jared/python', '/usr/lib/python2.6', '/usr/lib/python2.6/plat-linux2', '/usr/lib/python2.6/lib-tk', '/usr/lib/python2.6/lib-old', '/usr/lib/python2.6/lib-dynload', '/usr/lib/python2.6/dist-packages', '/usr/lib/python2.6/dist-packages/PIL', '/usr/lib/python2.6/dist-packages/gst-0.10', '/usr/lib/pymodules/python2.6', '/usr/lib/python2.6/dist-packages/gtk-2.0', '/usr/lib/pymodules/python2.6/gtk-2.0', '/usr/local/lib/python2.6/dist-packages']);
