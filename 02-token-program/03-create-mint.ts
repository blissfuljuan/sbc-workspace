import base58 from "bs58";
import * as Web3 from "@solana/web3.js";
import * as token from "@solana/spl-token";
import { mintCandyMachineV2Builder } from "@metaplex-foundation/js";

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"));
const publicKey = new Web3.PublicKey("G71oUZ9M4s3kp6fN79USHpXF4QrjbijhfMma2nwrnMM9");
const decoded = base58.decode("ghmYSG5mi3cTNJ3xQwZkffFrpwM59FJ6XuDCD9pMe8pir5rvutydUtQkPxwGwLPG5xLsnnEdSytEvHAtfJLQhc3");
const signer = Web3.Keypair.fromSecretKey(decoded);
const tokenMint = new Web3.PublicKey("81bC5WzSpQqCXZsgeEY9cC7mTk2dgX6fKavDbZPqvTGC");
const destinationKey = new Web3.PublicKey("DAovJL1Nt41mxpLrJ3dJQaQundGfCkZu9WBityDC929o");


async function main(){
    const mint = await token.mintTo(
        connection, // connection
        signer,    // payer
        tokenMint,  // mint acount
        destinationKey,  // destination account
        publicKey,
        100
    )
    
    console.log(tokenMint.toBase58());
}

main();