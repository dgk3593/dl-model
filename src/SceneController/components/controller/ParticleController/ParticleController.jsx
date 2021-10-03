import React, { useEffect } from "react";
import { useKey } from "@/SceneController/hook";
import { Button } from "@mui/material";
import { Add, AutoAwesome } from "@mui/icons-material";
import Accordion from "components/Accordion";
import AuraController from "./AuraController";

import "./ParticleController.css";

function ParticleController({ target }) {
    const { particle } = target;
    const [key, updateKey] = useKey();

    useEffect(() => {
        const { list } = particle;
        const listener = list.addEventListener("change", updateKey);

        return () => list.removeEventListener("change", listener);
    }, []);

    const addParticle = event => {
        event.stopPropagation();
        particle.add();
        updateKey();
    };

    return (
        <Accordion disableGutters className="ParticleController">
            <>
                <div className="title">
                    <AutoAwesome />
                    Particles
                </div>
                <Button
                    onClick={addParticle}
                    title="Add particles"
                    variant="contained"
                >
                    <Add />
                </Button>
            </>
            <React.Fragment key={key}>
                {particle.list.length
                    ? particle.list.map((aura, i) => (
                          <AuraController key={key + i} target={aura} />
                      ))
                    : "Click + to add particles"}
            </React.Fragment>
        </Accordion>
    );
}

export default ParticleController;
