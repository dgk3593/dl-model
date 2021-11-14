export const allMatTypes = [
    {
        value: "Basic",
        title: "Most basic, doesn't respond to light",
    },
    {
        value: "Toon",
        title: "Toon shading, also called cell shading",
    },
    {
        value: "Lambert",
        title: "For matte or diffusely reflecting surface",
    },
    {
        value: "Phong",
        title: "For shiny surface",
    },
    {
        value: "Standard",
        title: "For physically based rendering",
    },
    {
        value: "Physical",
        title: "For physically based rendering, can simulate transparency like water or glass",
    },
    {
        value: "Matcap",
        title: "Material capture, doesn't respond to light",
    },
    {
        value: "MMDToon",
        label: "MMD Toon",
        title: "Combination of Phong, Toon, and Matcap material",
    },
];

export const gradientMapList = [
    {
        value: "none",
        label: "None",
    },
    {
        value: "127,255",
        label: "2 Tones",
    },
    {
        value: "85,170,255",
        label: "3 Tones",
    },
    {
        value: "64,128,172,255",
        label: "4 Tones",
    },
];

export const matcapList = [
    { label: "Fresnel", value: "matcap_fresnel.jpg" },
    { label: "Black Stone", value: "matcap_black_stone.jpg" },
    { label: "Chrome 1", value: "matcap_chrome_1.jpg" },
    { label: "Chrome 2", value: "matcap_chrome_2.jpg" },
    { label: "Brown Clay", value: "matcap_clay_brown.jpg" },
    { label: "Dark Brown Clay", value: "matcap_clay_dark_brown.jpg" },
    { label: "Flesh Clay", value: "matcap_clay_flesh_6.jpg" },
    { label: "Gray Clay", value: "matcap_clay_gray.jpg" },
    { label: "Metal Putty", value: "matcap_metal_putty.jpg" },
    { label: "Obsidian", value: "matcap_obsidian.jpg" },
    { label: "Pearl", value: "matcap_pearl.jpg" },
    { label: "Yellow Plastic", value: "matcap_plastic_yellow.jpg" },
    { label: "Sci-fi Plastic", value: "matcap_scifi_plastic.jpg" },
    { label: "Slick Mud", value: "matcap_slick_mud.jpg" },
    { label: "Shiny Metal", value: "metal_shiny.jpg" },
];
