from __future__ import print_function
from jupyter_react import Component 

import pdb
class Thing(Component):
    module = 'Thing'

    def __init__(self, **kwargs):
        super(Thing, self).__init__(target_name='react.thing', **kwargs)
        self.messages = []
        self.on_msg(self._handle_msg)

    def doSend(self):
        self.send({'method':'update', 'props':self.props})

    def _handle_msg(self, msg):
        self.messages.append(msg)

