![Logo](https://dgk3593.github.io/dl-model/logo192.png)
<img src="https://dgk3593.github.io/dl-model/logo192.png" title="Dragalia Lost Model Viewer" alt="Logo" width="128" height="128" />

# Dragalia Lost Model Viewer

A web app to view 3D models from the game Dragalia Lost

## Features

-   All adventurers, dragons, weapons, bosses, and more with their animations
-   Apply arbitrary animations on any model and chaining them together
-   Customizable body parts if available
-   Customizable body texture (overdrive, version 1, etc.)
-   Change facial expression of adventurer and dragon models
-   Swap face texture between adventurer models
-   Attach fully customizable models to any joint of another model
-   Customizable outline and material
-   Add aura particles
-   Upload and use animations from FBX files
-   Scene time control
-   Auto rotate
-   Download models as FBX
-   Record video of current animation or custom record
-   Get screenshot or get all frames of current animation with or without background
-   Make GIF of current animation
-   Special capture (rotate, speed draw)
-   Customizable background (solid color, image, or skybox)
-   Customizable lighting
-   Post processing effects
-   Transparent background when loaded in an iframe
-   Add to homescreen to use like a native app on mobile

## Authors

-   [@dgk3593](https://www.github.com/dgk3593)

[!["Buy me a coffee"](https://cdn.ko-fi.com/cdn/kofi5.png?v=2 | height = 48)](https://ko-fi.com/L4L83VOAP)

## Sample terminal programs:

### Gabriel and Pinon:

```js
viewer.disposeAllModels();

const gabriel = await viewer.loadDLModel("d210145_01");
viewer.add(gabriel);
gabriel.animation.addChain("DC_d210145_01_90_01");
gabriel.face.eyeBaseIdx = gabriel.face.mouthBaseIdx = 5;
gabriel.parts.Plushie.current = "None";

viewer.camera.position.set(-0.915, 3.135, 3.728);
viewer.controls.target.set(0.087, 1.877, 0.017);

const pinon = await viewer.loadDLModel("c110366_01");
pinon.attachTo(gabriel, "jHandR");
pinon.animation.addChain("ROD_SKL_02_01_11000902").then(() => {
    pinon.animation.pause();
    pinon.animation.setTime(1.085);
});
pinon.position.set(0.315, -0.19, 0.22);
pinon.scale = 1.2;
pinon.model.quaternion.set(-0.7071, 0, 0.2185, 0.6725);
```

### Laxi and Mascula:

```js
viewer.disposeAllModels();
viewer.background = "img:img/bg/Roost.png";
viewer.camera.position.set(0, 0.5, 2.33);

const mascula = await viewer.loadDLModel("c100045_01");
viewer.add(mascula);
mascula.position.x = -0.5;
mascula.particle.add("aura", { spread: 0, auraOpacity: 0.25 });

const masculaBlade = await viewer.loadDLModel("w397004_01");
masculaBlade.attachTo(mascula, "jWeaponR");
masculaBlade.particle.add("aura", { spread: 5, speed: 5, threshold: 0.7 });

const laxi = await viewer.loadDLModel("c100032_04");
viewer.add(laxi);
laxi.position.x = 0.5;
const laxiAura = laxi.particle.add("aura", {
    color: "#ff0000",
    color2: "#ff0000",
    spread: 0,
});
laxiAura.auraOpacity = 0.75;

const laxiWeaponAuraParam = {
    color: "#ff0000",
    color2: "#ffff00",
    spread: 5,
    speed: 5,
};

const laxiWeaponL = await viewer.loadDLModel("w399012_01");
laxiWeaponL.attachTo(laxi, "jWeaponL");
laxiWeaponL.particle.add("aura", laxiWeaponAuraParam);

const laxiWeaponR = await viewer.loadDLModel("w399011_01");
laxiWeaponR.attachTo(laxi, "jWeaponR");
laxiWeaponR.particle.add("aura", laxiWeaponAuraParam);

await mascula.animation.addChain(
    "KAT_WIN_01_10004501&@0=(mi=2)&@55=(ei=3)&@65=(ei=2)&@75=(mi=4)>KAT_WIN_02_10004501",
    false
);
await laxi.animation.addChain(
    "DAG_WIN_01_10003204&@0=(mi=2)&@55=(ei=3)&@65=(ei=2)&@75=(mi=4)>DAG_WIN_02_10003204",
    false
);

mascula.animation.play();
laxi.animation.play();
```
