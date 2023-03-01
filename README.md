# big_assets

This project contains two asset canisters. `big_assets_backend` is an empty asset canister, `big_assets_frontend` hosts the frontend to upload assets to `big_assets_backend` using the `@dfinity/assets` library.

You can modify settings for the `AssetManager` in `src/big_assets_frontend/src/index.js`, check the documentation of [`@dfinity/assets`](https://agent-js.icp.xyz/assets/index.html#using-assetmanager) for more information.

## deployment

-   run `dfx start --clean --background`
-   run `dfx deploy`
-   add the anonymous principal to the controllers of the asset canister by calling `dfx canister call big_assets_backend authorize '(principal "2vxsx-fae")'`, so we don't have to deal with autorization (repeat this step each time you reinstall the canister)
-   run `npm install` and `npm run start` from the project root
-   open the frontend at `http://localhost:8080/`
-   pick a file and upload it
-   get the canister id for `big_assets_backend` by running `dfx canister id big_assets_backend`
-   now open the following url in your browser: `http://127.0.0.1:4943/<name_of_the_file_you_uploaded>?canisterId=<canister_id_of_big_assets_backend>`
    -   for example `http://127.0.0.1:4943/image.png?canisterId=r7inp-6aaaa-aaaaa-aaabq-cai`
