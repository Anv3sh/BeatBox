import * as anchor from '@coral-xyz/anchor'
import { Connection } from '@solana/web3.js'
import { WalletNotConnectedError } from '@solana/wallet-adapter-base'
import { STABLE_POOL_IDL, STABLE_POOL_PROGRAM_ID } from './const'

// This command makes an Lottery
export function getProgramInstance(connection, wallet) {
  if (!wallet.publicKey) throw new WalletNotConnectedError()
    const opts = {
      preflightCommitment: 'processed'
  };
  console.log("connection:",connection)
  const provider = new anchor.AnchorProvider(
    connection,
    wallet,
    opts.preflightCommitment
  );
  console.log(provider)
  // Read the generated IDL.
  const idl = STABLE_POOL_IDL
  console.log('IDL:', idl)
  // Address of the deployed program.
  const programId = STABLE_POOL_PROGRAM_ID
  console.log('Program ID:', programId)
  // Generate the program client from IDL.
  const program = new anchor.Program(idl, programId, provider)
  console.log(program)
  return program
}
