# ZKDP (Zero-Knowledge Differential Privacy Demo)

NOTE: This project wouldn't have been possible without the assistance of <a href="https://randomwalks.xyz/">Ari Biswas</a>, and was largely inspired by his paper: <a href="https://wrap.warwick.ac.uk/id/eprint/175621/1/WRAP-Interactive-proofs-differentially-private-counting-23.pdf">Interactive Proofs For Differentially Private Counting</a>. This project was completed by groupmates Emily Kang, Max Wagner, Jaray Liu, Sol Kim, and Weiyuan Gong for COMPSCI208: Applied Privacy for Data Science under James Honaker and Salil Vadhan.

## Overview

An interactive demo of verifiable differential privacy:

- **Frontend**: React app explaining zero-knowledge proofs, differential privacy, and sigma-OR protocols
- **Backend**: Rust API implementing verifiable DP with Pedersen commitments and cryptographic proofs

## Tech Stack

| Frontend | Backend |
|----------|---------|
| React 19, Vite, TypeScript | Rust, Actix-web |
| Tailwind CSS, MUI, Radix UI | curve25519-dalek, bulletproofs |

## Quick Start

**Frontend**
```bash
cd frontend && pnpm install && pnpm dev
```

**Backend**
```bash
cd backend && cargo run
```

Frontend runs on `http://localhost:5173`, backend on `http://127.0.0.1:9537`.

## API Reference

See [backend/README.md](backend/README.md) for full API documentation.
