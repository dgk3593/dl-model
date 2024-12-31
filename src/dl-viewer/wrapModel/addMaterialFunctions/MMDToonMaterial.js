import {
    AddOperation,
    TangentSpaceNormalMap,
    UniformsUtils,
    ShaderMaterial,
    MultiplyOperation,
} from "three";
import { MMDToonShader } from "./MMDToonShader";

class MMDToonMaterial extends ShaderMaterial {
    constructor(parameters) {
        super();

        this._matcapCombine = AddOperation;
        this.emissiveIntensity = 1.0;
        this.normalMapType = TangentSpaceNormalMap;

        this.combine = MultiplyOperation;

        this.wireframeLinecap = "round";
        this.wireframeLinejoin = "round";

        this.flatShading = false;

        this.lights = true;

        this.vertexShader = MMDToonShader.vertexShader;
        this.fragmentShader = MMDToonShader.fragmentShader;

        this.defines = Object.assign({}, MMDToonShader.defines);
        Object.defineProperty(this, "matcapCombine", {
            get: function () {
                return this._matcapCombine;
            },

            set: function (value) {
                this._matcapCombine = value;

                switch (value) {
                    case MultiplyOperation:
                        this.defines.MATCAP_BLENDING_MULTIPLY = true;
                        delete this.defines.MATCAP_BLENDING_ADD;
                        break;

                    default:
                    case AddOperation:
                        this.defines.MATCAP_BLENDING_ADD = true;
                        delete this.defines.MATCAP_BLENDING_MULTIPLY;
                        break;
                }
            },
        });

        this.uniforms = UniformsUtils.clone(MMDToonShader.uniforms);

        // merged from MeshToon/Phong/MatcapMaterial
        const exposePropertyNames = [
            "specular",
            "shininess",
            "opacity",
            "diffuse",

            "map",
            "matcap",
            "gradientMap",

            "lightMap",
            "lightMapIntensity",

            "aoMap",
            "aoMapIntensity",

            "emissive",
            "emissiveMap",

            "bumpMap",
            "bumpScale",

            "normalMap",
            "normalScale",

            "displacemantBias",
            "displacemantMap",
            "displacemantScale",

            "specularMap",

            "alphaMap",

            "envMap",
            "reflectivity",
            "refractionRatio",
        ];
        for (const propertyName of exposePropertyNames) {
            Object.defineProperty(this, propertyName, {
                get: function () {
                    return this.uniforms[propertyName].value;
                },

                set: function (value) {
                    this.uniforms[propertyName].value = value;
                },
            });
        }

        Object.defineProperty(
            this,
            "color",
            Object.getOwnPropertyDescriptor(this, "diffuse")
        );

        this.setValues(parameters);
    }

    copy(source) {
        super.copy(source);

        this.matcapCombine = source.matcapCombine;
        this.emissiveIntensity = source.emissiveIntensity;
        this.normalMapType = source.normalMapType;

        this.combine = source.combine;

        this.wireframeLinecap = source.wireframeLinecap;
        this.wireframeLinejoin = source.wireframeLinejoin;

        this.flatShading = source.flatShading;

        return this;
    }
}

MMDToonMaterial.prototype.isMMDToonMaterial = true;

export { MMDToonMaterial };
