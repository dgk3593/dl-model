import { Vector3, Matrix3, Vector4 } from "three";
import { Geometry } from "three/examples/jsm/deprecated/Geometry";

const STLExporter = function () {};

STLExporter.prototype = {
    constructor: STLExporter,

    parse: function (scene, options = {}) {
        const { binary = false } = options;

        const objectList = getObjects(scene);

        return binary ? getBinarySTL(objectList) : getAsciiSTL(objectList);
    },
};

export { STLExporter };

function getObjects(scene) {
    const objects = [];

    scene.traverse(child => {
        if (!child.isMesh || !child.visible) return;

        const geometry = new Geometry().fromBufferGeometry(child.geometry);
        const normalMatrixWorld = new Matrix3().getNormalMatrix(
            child.matrixWorld
        );
        const { skeleton } = child;

        objects.push({
            object3d: child,
            geometry,
            normalMatrixWorld,
            skeleton,
        });
    });

    return objects;
}

function getAsciiSTL(objectList) {
    let output = "solid exported\n";

    const vector = new Vector3();

    objectList.forEach(obj => {
        const { object3d, geometry, normalMatrixWorld, skeleton } = obj;

        const { matrixWorld } = object3d;

        const { vertices, faces, skinIndices } = geometry;
        if (!faces) return;

        faces.forEach(face => {
            const normal = new Vector3()
                .copy(face.normal)
                .applyMatrix3(normalMatrixWorld)
                .normalize();
            output += `\tfacet normal ${normal.x} ${normal.y} ${normal.z}\n`;
            output += `\t\touter loop\n`;

            const indices = [face.a, face.b, face.c];

            indices.forEach(vertexIndex => {
                if (skinIndices?.length === 0) {
                    vector
                        .copy(vertices[vertexIndex])
                        .applyMatrix4(matrixWorld);
                    output += `\t\t\tvertex ${vector.x} ${vector.y} ${vector.z}\n`;
                } else {
                    vector.copy(vertices[vertexIndex]);
                    const finalVector = new Vector4();

                    const boneIndices = [
                        skinIndices[vertexIndex].x,
                        skinIndices[vertexIndex].y,
                        skinIndices[vertexIndex].z,
                        skinIndices[vertexIndex].w,
                    ];

                    const skinWeights = geometry.skinWeights[vertexIndex];
                    const weights = [
                        skinWeights.x,
                        skinWeights.y,
                        skinWeights.z,
                        skinWeights.w,
                    ];

                    const { bones, boneInverses } = skeleton;
                    const inverses = boneIndices.map(
                        index => boneInverses[index]
                    );

                    const skinMatrices = boneIndices.map(
                        index => bones[index].matrixWorld
                    );

                    const { morphTargets } = geometry;
                    if (morphTargets) {
                        const morphMatricesX = morphTargets.map(
                            mt => mt.vertices[vertexIndex].x
                        );
                        const morphMatricesY = morphTargets.map(
                            mt => mt.vertices[vertexIndex].y
                        );
                        const morphMatricesZ = morphTargets.map(
                            mt => mt.vertices[vertexIndex].z
                        );

                        if (object3d.geometry.morphTargets) {
                            const morphVector = new Vector4(
                                vector.x,
                                vector.y,
                                vector.z
                            );
                            morphTargets.forEach((_, i) => {
                                morphVector.lerp(
                                    new Vector4(
                                        morphMatricesX[i],
                                        morphMatricesY[i],
                                        morphMatricesZ[i]
                                    ),
                                    1
                                );
                            });
                        }
                    }

                    for (let k = 0; k < 4; k++) {
                        const tempVector = new Vector4(
                            vector.x,
                            vector.y,
                            vector.z
                        );
                        tempVector.multiplyScalar(weights[k]);

                        tempVector
                            .applyMatrix4(inverses[k])
                            .applyMatrix4(skinMatrices[k]);
                        finalVector.add(tempVector);
                    }
                    output += `\t\t\tvertex ${finalVector.x} ${finalVector.y} ${finalVector.z}`;
                }
            });

            output += "\t\tendloop\n";
            output += "\tendfacet\n";
        });
    });

    output += "endsolid exported\n";

    return output;
}

function getBinarySTL(objectList) {}
