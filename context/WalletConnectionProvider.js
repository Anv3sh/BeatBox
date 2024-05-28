import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import { FC, useMemo } from 'react'
import { SOLANA_HOST } from '../utils/const'
import * as React from "react";

const WalletConnectionProvider = ({ children }) => {
  // const network = process.env.NEXT_PUBLIC_SOLANA_NETWORK as WalletAdapterNetwork;
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], [])

  const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{mounted && children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default WalletConnectionProvider
