#!/usr/bin/env python

'''here's a docstring for this module
and it's multi-line'''

class Bar:
    cattr = 'something'
    def __init__(self, a, b):
        print 'args', a, b

    @staticmethod
    def staticm(one, *alls):
        print 'from static', one, alls

    def bar(self, **baz):
        print 'bar_bar', baz

    def __str__(self):
        return '<Bar inst>'

    def __repr__(self):
        return str(self)

if __name__ == '__main__':
    Bar(3,4).bar(a=5,c='hoo')
    Bar.staticm(5,6,7,'i');
else:
    a=2
    foo(1,2,3,4,5,6)
    bar(r=5,t='man')
    print 'notmain'


# vim: et sw=4 sts=4
