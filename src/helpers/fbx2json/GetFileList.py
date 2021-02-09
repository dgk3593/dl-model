import os

directory = './fbx'
outputFile = 'fileList.js'

if __name__ == '__main__':
    fileList = os.listdir(directory)

    f = open(outputFile, 'w', encoding="utf-8")
    f.write("const fileList = [\n")

    for fileName in fileList:
        f.write(f'    "{fileName}",\n')

    f.write('];\n')
    f.write('export default fileList;')
    f.close
