import { useAppData } from "@/data";
import { useAniSelectState } from "@/state";
import SimpleAniGallery from "../components/SimpleAniGallery";
import GunModeSelector from "./selectors/GunModeSelector";
import WeaponSelector from "./selectors/WeaponSelector";
import { gunMode as gunModeMap } from "@/SceneController/helper/processAniData/helper";

function WeaponAni({ onSelect }) {
    const { type, setType, gunMode, setGunMode } = useAniSelectState(
        state => state.advAni.weapon
    );

    const data = useAppData(state => state["ani-weapon"]);
    const gunData = useAppData(state => state["ani-gun"]);

    const aniList = data[type].map(ani => ({
        ...ani,
        fullName: `${type} ${ani.name}`,
    }));
    const gunAniList = gunData[gunMode].map(ani => ({
        ...ani,
        fullName: `${gunModeMap[gunMode]} Manacaster ${ani.name}`,
    }));

    return (
        <div className="WeaponAni">
            <WeaponSelector value={type} onClick={setType} />

            <SimpleAniGallery list={aniList} onClick={onSelect} />

            {type === "Manacaster" && (
                <>
                    <GunModeSelector value={gunMode} onClick={setGunMode} />
                    <SimpleAniGallery list={gunAniList} onClick={onSelect} />
                </>
            )}
        </div>
    );
}

export default WeaponAni;
