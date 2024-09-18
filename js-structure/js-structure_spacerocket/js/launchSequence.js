// Implement the launch sequence function here and export it as the default export.
import { loadPayload } from "./core/load.js";
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";
import { getNewRocket, getRocket } from "./core/rocket.js";

export default function launch() {
    window.rocket = getNewRocket();
    const payload = [NFSAT, FISHSAT];
    loadPayload(payload);
    fuel();
    const rocket = getRocket();
    rocket.fuel = true;  
    const countdownLength = rocket.requiredCountdown;
    for (let i = 0; i < countdownLength; i++) {
        countdown();
        console.log(`Countdown step ${i + 1}, rocket countdown: ${rocket.countdown}`);
    }
        if (rocket.countdown === rocket.requiredCountdown) {
            liftoff();
            rocket.liftoff = true;
        } else {
            throw new Error("Cannot lift off without the correct countdown sequence.")
        }
    
    deployPayload();
    rocket.payloadDeployed = true;
    }
