import * as Web3 from '@solana/web3.js';
import base58 from 'bs58';

async function main() {
    const decoded = base58.decode('ghmYSG5mi3cTNJ3xQwZkffFrpwM59FJ6XuDCD9pMe8pir5rvutydUtQkPxwGwLPG5xLsnnEdSytEvHAtfJLQhc3');
    const keyPair = Web3.Keypair.fromSecretKey(decoded);
    
    const publicKeyFrom = new Web3.PublicKey('G71oUZ9M4s3kp6fN79USHpXF4QrjbijhfMma2nwrnMM9');
    const publicKeyTo = new Web3.PublicKey('2Bm2ymMdPxqdTNFNFDH6M6vou79CaGhTbA6PVPG1n2Nu');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    })

    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair])
    console.log('txHash', txSignature);
}

main();