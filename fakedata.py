import json
import random
import numpy as np
import uuid


def generateElement(index):
    element = {
        "id": str(uuid.uuid4()),
        "height": random.randint(30, 100),
        "color": "#"+''.join([random.choice('0123456789ABCDEF') for j in range(6)]),
        "text": index
    }
    return element

with open("title.json", "r+") as file:
    lista = []
    for i in range(5):
        lista.append(generateElement(i))
    json.dump(lista, file, indent=4)
