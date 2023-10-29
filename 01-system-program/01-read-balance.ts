import * as Web3 from '@solana/web3.js';

async function main() {
    const publicKey = new Web3.PublicKey('G71oUZ9M4s3kp6fN79USHpXF4QrjbijhfMma2nwrnMM9');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);
}

main();