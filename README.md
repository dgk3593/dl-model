[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/dgk3593/dl-model-test)

Sample terminal program:

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
