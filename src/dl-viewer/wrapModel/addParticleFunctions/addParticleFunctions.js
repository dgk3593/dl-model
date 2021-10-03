import { ArrayWithEvent } from "@/dl-viewer/utils/ArrayWithEvent";
import { createParticles } from "./helper";

export default function addParticleFunctions(container) {
    const { meshes } = container;

    const particle = {
        list: new ArrayWithEvent(),

        dispose() {
            this.list.forEach(group => group.dispose?.());
        },

        add(type = "aura", params = {}) {
            const particleGroup = createParticles(type)(meshes, params);
            particleGroup.onDispose = () => this.list.remove(particleGroup);
            this.list.push(particleGroup);

            container.addEventListener(
                "TimeUpdated",
                particleGroup.onTimeUpdate
            );

            return particleGroup;
        },
    };
    container.particle = particle;

    return container;
}
