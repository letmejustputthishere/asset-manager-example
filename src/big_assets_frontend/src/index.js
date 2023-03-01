// Create asset manager instance
import { AssetManager } from "@dfinity/assets";
import { HttpAgent } from "@dfinity/agent";

const canisterId = process.env.BIG_ASSETS_BACKEND_CANISTER_ID; // Canister id of the asset canister
const agent = new HttpAgent(); // Agent with an authorized identity
if (process.env.DFX_NETWORK !== "ic") {
    agent.fetchRootKey().catch((err) => {
        console.warn(
            "Unable to fetch root key. Check to ensure that your local replica is running"
        );
        console.error(err);
    });
}
const assetManager = new AssetManager({
    canisterId,
    agent,
    concurrency: 32, // Optional (default: 32), max concurrent requests.
    maxSingleFileSize: 450000, // Optional bytes (default: 450000), larger files will be uploaded as chunks.
    maxChunkSize: 1900000, // Optional bytes (default: 1900000), size of chunks when file is uploaded as chunks.
});

// Select file and upload to asset canister in browser
const input = document.createElement("input");
input.type = "file";
input.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    const key = await assetManager.store(file); // example.csv
});
document.body.appendChild(input);
