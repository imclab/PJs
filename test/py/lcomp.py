#!/usr/bin/env python

print [x for x in range(5)]
print [y for y in xrange(10) for x in range(2)]

for nm in [(x,y,z) for x in range(3) for y in range(2) for z in range(4)]:
    print nm
    if nm[0] > nm[1]:
        print 'grear'

print [x for x in range(10) if x%2==0]
print [(x,y,z) for x in range(10) if x%2 == 0 for y in range(10) if y%2 == 1 for z in range(2)]


# vim: et sw=4 sts=4
