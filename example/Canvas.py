from __future__ import print_function
from jupyter_react import Component 

class Canvas(Component):
    module = 'canvas'

    def __init__(self,  **kwargs):
        super(Canvas, self).__init__(target_name='react.Canvas', **kwargs)
        self.on_msg(self._handle_msg)

    def _handle_msg(self, msg):
        print(msg)
