/*** File generated by PJs http://jaredforsyth.com/projects/pjs ***/

// from source file /home/jared/clone/pjs/test/py2js/basic/del_dict.py

load("./build/pjslib.js");
var console = {log:function(){print.apply(this, arguments);}};
module('/home/jared/clone/pjs/test/py2js/basic/del_dict.py', function (_) {
    _.__doc__ = "";
    _.mydict = $b.dict([]);
    _.mydict.__setitem__($b.str('abc'), $b.str('def'));
    _.mydict.__setitem__($b.str('def'), $b.str('abc'));
    _.mydict.__setitem__($b.str('xyz'), $b.str('rst'));
    $b.print(_.mydict.__getitem__($b.str('abc')));//, true
    $b.print(_.mydict.__getitem__($b.str('def')));//, true
    $b.print(_.mydict.__getitem__($b.str('xyz')));//, true
    delete _.mydict.__getitem__($b.str('def'))
    if ($b.bool($b.do_ops($b.str('abc'), 'in', _.mydict)) === true) {
        $b.print($b.str('abc in mydict'));//, true
    } else $b.print($b.str('abc not in mydict'));//, true
    
    if ($b.bool($b.do_ops($b.str('def'), 'in', _.mydict)) === true) {
        $b.print($b.str('def in mydict'));//, true
    } else $b.print($b.str('def not in mydict'));//, true
    
    if ($b.bool($b.do_ops($b.str('xyz'), 'in', _.mydict)) === true) {
        $b.print($b.str('xyz in mydict'));//, true
    } else $b.print($b.str('xyz not in mydict'));//, true
});

__builtins__.__import__('sys').argv = __builtins__.list(arguments);
__builtins__.run_main('/home/jared/clone/pjs/test/py2js/basic/del_dict.py', ['/home/jared/clone/pjs', '/home/jared/clone/pjs', '/home/jared/python', '/usr/lib/python2.6', '/usr/lib/python2.6/plat-linux2', '/usr/lib/python2.6/lib-tk', '/usr/lib/python2.6/lib-old', '/usr/lib/python2.6/lib-dynload', '/usr/lib/python2.6/dist-packages', '/usr/lib/python2.6/dist-packages/PIL', '/usr/lib/python2.6/dist-packages/gst-0.10', '/usr/lib/pymodules/python2.6', '/usr/lib/python2.6/dist-packages/gtk-2.0', '/usr/lib/pymodules/python2.6/gtk-2.0', '/usr/local/lib/python2.6/dist-packages']);
