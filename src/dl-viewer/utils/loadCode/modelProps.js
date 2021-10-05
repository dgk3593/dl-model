export const modelProps = {
    mat: {
        keys: ["material", "code"],
        valueMap: value => value.slice(1, -1),
    },
    ol: {
        keys: ["outline", "code"],
        valueMap: value => value.slice(1, -1),
    },
    ei: {
        keys: ["face", "eyeBaseIdx"],
    },
    et: {
        keys: ["face", "eyeTexture"],
    },
    mi: {
        keys: ["face", "mouthBaseIdx"],
    },
    mt: {
        keys: ["face", "mouthTexture"],
    },
    tx: {
        keys: ["texture"],
    },
    scl: {
        keys: ["scale"],
    },
};
