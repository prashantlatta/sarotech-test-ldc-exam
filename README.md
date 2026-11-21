# SAROTECH Efficiency Test

**Developer:** Prashant Latta  
**Brand:** SAROTECH  
**Target:** Windows 10 / Windows 11, x64

## GitHub upload

1. Extract this ZIP.
2. Open the extracted `SAROTECH_Efficiency_Test` folder.
3. Select every item inside it, including the hidden-looking `.github` folder.
4. Upload those items to the root of `prashantlatta/sarotech_efficiency_test`.
5. Commit directly to the `main` branch.
6. Open **Actions** and select **Build Windows x64 installers**.

Do not upload the ZIP itself or the outer project folder as a nested folder.

The repository root must contain `.github`, `content`, `docs`, `src`, `src-tauri`, `package.json`, `index.html`, and `vite.config.ts`.

## Build

The GitHub Actions workflow builds Windows x64 NSIS `.exe` and MSI `.msi` installers and uploads them as a workflow artifact when the build succeeds.

## Project status

This is an initial application/source foundation, not a fully validated exam simulator. Full DOCX/XLSX editing fidelity, automated evaluation, and final official exam scoring rules still require implementation and verification.
