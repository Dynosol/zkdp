// Replace:
// import fetch from 'node-fetch';
import fetch from 'node-fetch';
// With:


let currentSessionId: string | null = null;

interface CommitsResponse {
    commits: string[];
}

interface RandomResponse {
    random_bits: number[];
}

interface XorBitsResponse {
    xor_bits: number[];
}

interface XorCommitsResponse {
    xor_commits: string[];
}

interface ComputeSumResponse {
    final_sum: number;
}

interface ZResponse {
    z: string;
}

interface LhsRhsResponse {
    lhs: string;
    rhs: string;
}

async function initializeRunner(n: number, x: number[]) {
    const response = await fetch('http://127.0.0.1:9537/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ n, x }),
    });

    if (response.ok) {
        const data = await response.json(); // Parse as JSON instead of text
        currentSessionId = data.session_id; // Extract session_id from JSON
        console.log("Session ID:", currentSessionId);
    } else {
        console.error("Failed to initialize runner:", response.status, response.statusText);
        try {
            const errorData = await response.json();
            console.error("Error details:", errorData);
        } catch (e) {
            console.error("Failed to parse error response:", e);
        }
    }
}

async function getCommitments() {
    if (!currentSessionId) {
        console.error("No session ID available.");
        return undefined;
    }
    const response = await fetch('http://127.0.0.1:9537/commits', { // Changed to POST
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ session_id: currentSessionId }), // Send session_id in body
    });

    console.log("sessionid type:", typeof currentSessionId);

    if (response.ok) {
        const data = (await response.json()) as CommitsResponse;
        console.log("Commits:", data.commits);
        return data.commits;
    } else {
        console.error("Failed to get commits:", response.status, response.statusText);
        return undefined;
    }
}

async function sendRandomness(bits: number[]) {
    if (!currentSessionId) {
        console.error("No session ID available.");
        return;
    }
    const response = await fetch('http://127.0.0.1:9537/randomness', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bits, session_id: currentSessionId }), // Send session_id in body
    });
    if (response.ok) {
        const data: any = await response.json();
        console.log("Randomness Input:", data);
    } else {
        console.error("Failed to send randomness:", response.status, response.statusText);
        try {
            const errorData = await response.json();
            console.error("Error details:", errorData);
        } catch (e) {
            console.error("Failed to parse error response:", e);
        }
    }
}

async function getPublicRandom() {
    if (!currentSessionId) {
        console.error("No session ID available.");
        return undefined;
    }
    const response = await fetch('http://127.0.0.1:9537/public_random', { // Changed to POST
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ session_id: currentSessionId }), // Send session_id in body

    });

    if (response.ok) {
        const data = (await response.json()) as RandomResponse;
        console.log("Public Random Bits:", data.random_bits);
        return data.random_bits;
    } else {
        console.error("Failed to get public random:", response.status, response.statusText);
        return undefined;
    }
}

async function getXorBits() {
    if (!currentSessionId) {
        console.error("No session ID available.");
        return undefined;
    }
    const response = await fetch('http://127.0.0.1:9537/xor_bits', {  // Changed to POST
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ session_id: currentSessionId }), // Send session_id in body
    });

    if (response.ok) {
        const data = (await response.json()) as XorBitsResponse;
        console.log("XOR Bits:", data.xor_bits);
        return data.xor_bits;
    } else {
        console.error("Failed to get XOR bits:", response.status, response.statusText);
        return undefined;
    }
}

async function getXorCommits() {
    if (!currentSessionId) {
        console.error("No session ID available.");
        return undefined;
    }
    const response = await fetch('http://127.0.0.1:9537/xor_commits', { // Changed to POST
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ session_id: currentSessionId }), // Send session_id in body
    });

    if (response.ok) {
        const data = (await response.json()) as XorCommitsResponse;
        console.log("XOR Commits:", data.xor_commits);
        return data.xor_commits;
    } else {
        console.error("Failed to get XOR commits:", response.status, response.statusText);
        return undefined;
    }
}

async function computeSum() {
    if (!currentSessionId) {
        console.error("No session ID available.");
        return undefined;
    }
    const response = await fetch('http://127.0.0.1:9537/compute_sum', { // Changed to POST
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ session_id: currentSessionId }), // Send session_id in body
    });

    if (response.ok) {
        const data = (await response.json()) as ComputeSumResponse;
        console.log("Final Sum:", data.final_sum);
        return data.final_sum;
    } else {
        console.error("Failed to compute sum:", response.status, response.statusText);
        return undefined;
    }
}

async function getZ() {
    if (!currentSessionId) {
        console.error("No session ID available.");
        return undefined;
    }
    const response = await fetch('http://127.0.0.1:9537/z', { // Changed to POST
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ session_id: currentSessionId }), // Send session_id in body
    });

    if (response.ok) {
        const data = (await response.json()) as ZResponse;
        console.log("Z:", data.z);
        return data.z;
    } else {
        console.error("Failed to get Z:", response.status, response.statusText);
        return undefined;
    }
}

async function commitPedersons() {
    if (!currentSessionId) {
        console.error("No session ID available.");
        return;
    }
    const response = await fetch('http://127.0.0.1:9537/commit_pedersons', { // Changed to POST
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ session_id: currentSessionId }), // Send session_id in body
    });
    if (response.ok) {
        const data: any = await response.json();
        console.log("Pederson Commitments:", data);
    } else {
        console.error("Failed to commit Pedersons:", response.status, response.statusText);
        try {
            const errorData = await response.json();
            console.error("Error details:", errorData);
        } catch (e) {
            console.error("Failed to parse error response:", e);
        }
    }
}

async function getLhs() {
    if (!currentSessionId) {
        console.error("No session ID available.");
        return undefined;
    }
    const response = await fetch('http://127.0.0.1:9537/lhs', { // Changed to POST
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ session_id: currentSessionId }), // Send session_id in body
    });

    if (response.ok) {
        const data = (await response.json()) as LhsRhsResponse;
        console.log("LHS:", data.lhs);
        return data.lhs;
    } else {
        console.error("Failed to get LHS:", response.status, response.statusText);
        return undefined;
    }
}

async function getRhs() {
    if (!currentSessionId) {
        console.error("No session ID available.");
        return undefined;
    }
    const response = await fetch('http://127.0.0.1:9537/rhs', { // Changed to POST
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ session_id: currentSessionId }), // Send session_id in body
    });

    if (response.ok) {
        const data = (await response.json()) as LhsRhsResponse;
        console.log("RHS:", data.rhs);
        return data.rhs;
    } else {
        console.error("Failed to get RHS:", response.status, response.statusText);
        return undefined;
    }
}

// Example usage in TypeScript:
async function runFlow() {
    await initializeRunner(5, [1, 0, 1]);
    const commits = await getCommitments();
    console.log("Got commits:", commits);
    await sendRandomness([0, 1, 0, 1, 1]);
    const publicRandom = await getPublicRandom();
    console.log("Public Random:", publicRandom);
    const xorBits = await getXorBits();
    console.log("XOR Bits:", xorBits);
    const xorCommits = await getXorCommits();
    console.log("XOR Commits:", xorCommits);
    const sum = await computeSum();
    console.log("Computed Sum:", sum);
    const z = await getZ();
    console.log("Z:", z);
    await commitPedersons();
    const lhs = await getLhs();
    console.log("LHS:", lhs);
    const rhs = await getRhs();
    console.log("RHS:", rhs);
}

// Call the test function to execute the flow
runFlow();
