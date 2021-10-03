/**
 * @type {BreadcrumbCategory[]}
 */
export const categories = [
    {
        value: "chara",
        label: "Adventurer",
        icon: "img/appIcon/chara.png",
        options: [
            { value: "regular", label: "Regular" },
            { value: "allies", label: "Allies" },
            { value: "enemies", label: "Enemies" },
        ],
    },
    {
        value: "dragon",
        label: "Dragon",
        icon: "img/appIcon/dragon.png",
        options: [
            { value: "regular", label: "Regular" },
            { value: "special", label: "Special" },
        ],
    },
    {
        value: "weapon",
        label: "Weapon",
        icon: "img/appIcon/weapon.png",
        options: [
            { value: "regular", label: "Regular" },
            { value: "special", label: "Special" },
            { value: "extra", label: "Extra" },
        ],
    },
    {
        value: "boss",
        label: "Boss",
        icon: "img/appIcon/boss.png",
        options: [
            {
                value: "archdemon",
                label: "Archdemon",
                icon: "img/appIcon/archdemon.png",
            },
            { value: "agito", label: "Agito", icon: "img/appIcon/agito.png" },
            { value: "raid", label: "Raid", icon: "img/appIcon/raid.png" },
            { value: "void", label: "Void", icon: "img/appIcon/void.png" },
            { value: "others", label: "Others" },
        ],
    },
];
