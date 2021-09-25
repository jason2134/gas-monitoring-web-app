import time
from datetime import datetime

realtime = datetime.now().replace(microsecond=0)
print(realtime) 

'''
result:
datetime.now() = 2021-06-17 14:54:02.549874
datetime.now().replace(microsecond=0) = 2021-06-17 14:55:20
'''