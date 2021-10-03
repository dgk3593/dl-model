import * as THREE from "three";

const toneMappings = {
    "No Mapping": THREE.NoToneMapping,
    Linear: THREE.LinearToneMapping,
    Reinhard: THREE.ReinhardToneMapping,
    Cineon: THREE.CineonToneMapping,
    "ACES Filmic": THREE.ACESFilmicToneMapping,
};

export default toneMappings;
