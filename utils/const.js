import { clusterApiUrl, PublicKey } from '@solana/web3.js'
import spotify from './spotify.json'

export const SOLANA_HOST = clusterApiUrl('devnet')

export const STABLE_POOL_PROGRAM_ID = new PublicKey(
  'G67AaRd7VPZyM5m27wkuFZYKP3Jb68oLHA1GsUukxWs8',
)

export const STABLE_POOL_IDL = spotify

//"G67AaRd7VPZyM5m27wkuFZYKP3Jb68oLHA1GsUukxWs8"
//"5wSMdEYxSW7iB3rdE7c8yB3bqBUrVtvggjDdY5viyDLk"