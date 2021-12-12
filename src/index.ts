export declare type Utxo = {
  txId: string;
  outputIndex: number;
  satoshis: number;
  address: string;
};

export declare type TokenUtxo = {
  txId: string;
  outputIndex: number;
  tokenAmount: string;
  tokenAddress: string;
};

export declare type NftUtxo = {
  txId: string;
  outputIndex: number;
  tokenIndex: string;
  tokenAddress: string;
};

export interface Provider {
  network: "mainnet" | "testnet";
  getUtxos(
    address: string,
    queryParams?: {
      cursor: number;
      size: number;
    }
  ): Promise<Utxo[]>;

  getRawTx(txid: string): Promise<string>;

  broadcast(rawtx: string): Promise<string>;

  getTokenUtxos(
    codehash: string,
    genesis: string,
    address: string,
    queryParams?: {
      cursor: number;
      size: number;
    }
  ): Promise<TokenUtxo[]>;

  getNftUtxos(
    codehash: string,
    genesis: string,
    address: string,
    queryParams?: {
      cursor: number;
      size: number;
    }
  ): Promise<NftUtxo[]>;

  getIsUtxoSpent(txId: string, outputIndex: number): Promise<boolean>;
}
