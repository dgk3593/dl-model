import os

directory = 'public/fbx'
outputFile = 'src/helpers/fbx2json/fileList.js'

if __name__ == '__main__':
    fileList = os.listdir(directory)

    f = open(outputFile, 'w', encoding="utf-8")
    f.write("const fileList = [\n")

    for fileName in fileList:
        if ".fbx" in fileName:
            f.write(f'    "{fileName}",\n')

    f.write('];\n')
    f.write('export default fileList;')
    f.close
