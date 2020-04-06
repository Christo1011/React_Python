from __future__ import print_function
from jupyter_react import Component 
import numpy as np
import pandas as pd
import pdb
import sys


class Thing(Component):
    module = 'Thing'
    sys.__stdout__.write("foo\n")
    def __init__(self, **kwargs):
        super(Thing, self).__init__(target_name='react.thing', **kwargs)
        self.messages = []
        self.results = []
        self.draft = 0 
        self.on_msg(self._handle_msg)
        

    #def doSend(self):
        #self.send(data)
        #self.send({'method':'update', 'data':self.messages[self]['data']['content']})

    
    
    def _handle_msg(self, msg):
        #self.messages.append(np.reshape(msg['content']['data']['content'], (-1, 1)))
        self.messages.append(msg['content']['data']['content'])
        self.results.append(10)
        self.draft.append(calcNewResult([['0', 'X', '.'], ['0', '/', 'X']]))
        self.send({'content':self.results})
        
    def calcNewResult(self,circuit):
        x  = len(circuit)
        B = []
        s = ""
        qubit_state = []
        for i in reversed(range(x)):
            s+= circuit[i][0]

        qubit_state = states(s)


        Hgate = 1/np.sqrt(2) * np.array([[1.0,1.0],[1.0,-1.0]])
        Xgate = np.array([[0.0,1.0],[1.0,0.0]])
        Zgate = np.array([[1.0,0.0],[0.0,-1.0]])
        Ygate = np.array([[0.0,-1j],[1j,0.0]])
        IDgate = np.array([[1.0,0.0],[0.0,1.0]])
        Cnot = np.array([[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,0,1,0]])
        for i in range(max(map(lambda x: len (x), circuit))):#len(circuit)):
            if(i>0):
                for k in range(len(circuit)):
                    if(circuit[k][i] == 'H'):
                        B.append(Hgate)
                    elif(circuit[k][i] == 'X'):
                        B.append(Xgate) 
                    elif(circuit[k][i] == 'Y'):
                        B.append(Ygate) 
                    elif(circuit[k][i] == 'Z'):
                        B.append(Zgate) 
                    elif(circuit[k][i] == '.'):
                        #print("i am here")
                        B.append(IDgate)
                    elif(circuit[k][i] == '/'):
                        B.append(IDgate)         
        for i in range(0,len(B),2):
            if(len(B[i]) == 4):
                qubit_state = np.dot(B[i],qubit_state)
            else:
                qubit_state = Estim(qubit_state,B[i],B[i+1])
        result = qubit_state.tolist()
        return result
    def states(s):
        q=[]
        if(s == '0'):
            q = [1,0]
        if(s == '1'):
            q = [0,1]
        if(s == '00'):
            q = [1,0,0,0]
        if(s == '01'):
            q = [0,1,0,0]
        if(s == '10'):
            q = [0,0,1,0]
        if(s == '11'):
            q = [0,0,0,1]
        return q
    
    def Estim(q,gate1,gate2):
        A = []
        B = []
        C = []
        D = []
        x = int(len(q)/2)
        E = np.zeros((4,4), np.float64)
        A = gate2[0][0] * gate1
        B = gate2[0][1] * gate1
        C = gate2[1][0] * gate1
        D = gate2[1][1] * gate1

        for i in range(len(E)):
            for j in range(len(E)):
                if(i < 2 and j < 2):
                    E[i][j] = A[i][j]
                if(i < 2 and j > 1):
                     E[i][j] = B[i%x][j%x]
                if(i > 1 and j < 2):
                    E[i][j] = C[i%x][j%x]
                if(i > 1 and j  > 1):
                    E[i][j] = D[i%x][j%x]

        return(np.dot(E,q))