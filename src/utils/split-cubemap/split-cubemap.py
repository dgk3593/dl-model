# Split a png cubemap/skymap image into 6 separated image files
# Requires Pillow > https://pypi.org/project/Pillow/

from PIL import Image
from operator import itemgetter
import os

path = os.path.abspath("")
inputPath = f"{path}/input"
outputPath = f"{path}/output"

faces = [
    {"name": 'py', "x": 1, "y": 0},
    {"name": 'ny', "x": 1, "y": 2},
    {"name": 'nx', "x": 0, "y": 1},
    {"name": 'pz', "x": 1, "y": 1},
    {"name": 'px', "x": 2, "y": 1},
    {"name": 'nz', "x": 3, "y": 1},
]


def split(imgName):
    name = os.path.splitext(file)[0]
    outputDir = f"{outputPath}/{name}"
    if not os.path.exists(outputDir):
        os.makedirs(outputDir)

    img = Image.open(f"{inputPath}/{imgName}")
    size = img.size[0] / 4

    for face in faces:
        name, x, y = itemgetter('name', 'x', 'y')(face)
        cropped = crop(img, x, y, size)
        saveImg(cropped, outputDir, name)


def crop(img, xCoord, yCoord, size):
    startX = xCoord * size
    endX = startX + size

    startY = yCoord * size
    endY = startY + size

    area = (startX, startY, endX, endY)
    return img.crop(area)


def saveImg(img, path, name):
    try:
        img.save(f"{path}/{name}.png")
    except:
        print (f"*   ERROR: Could not save {name}.")
        pass


if __name__ == '__main__':
    inputList = os.listdir(inputPath)
    for file in inputList:
        split(file)
