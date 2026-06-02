import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(
        () => ({
            fullScreen: { enable: false },
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },
                modes: {
                    grab: {
                        distance: 180,
                        links: {
                            opacity: 0.6,
                            color: "#ff751a"
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: "#ff751a",
                },
                links: {
                    color: "#ff751a",
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 0.8,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 200,
                },
                opacity: {
                    value: 0.4,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    if (!init) {
        return null;
    }

    return (
        <Particles
            id="tsparticles"
            options={options}
        />
    );
};

export default React.memo(ParticlesBackground);
