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
  metaTxId: string;
  metaOutputIndex: number;
};

export declare type Balance = {
  balance: number;
  pendingBalance: number;
  utxoCount: number;
};

export declare type TokenBalance = {
  balance: string;
  pendingBalance: string;
  utxoCount: number;
  decimal: number;
};

export declare type Token = {
  codehash: string;
  genesis: string;
  sensibleId: string;
  name: string;
  symbol: string;
  decimal: number;
  balance: string;
  pendingBalance: string;
};

export declare type NftCollection = {
  codehash: string;
  genesis: string;
  sensibleId: string;
  count: string;
};

export interface Provider {
  network: "mainnet" | "testnet";
  getRawTx(txid: string): Promise<string>;

  broadcast(rawtx: string): Promise<string>;

  getIsUtxoSpent(txId: string, outputIndex: number): Promise<boolean>;

  getUtxos(
    address: string,
    queryParams?: {
      cursor: number;
      size: number;
    }
  ): Promise<Utxo[]>;

  getBalance(address: string): Promise<Balance>;

  //Token
  getTokenUtxos(
    codehash: string,
    genesis: string,
    address: string,
    queryParams?: {
      cursor: number;
      size: number;
    }
  ): Promise<TokenUtxo[]>;

  getTokenBalance(
    codehash: string,
    genesis: string,
    address: string
  ): Promise<TokenBalance>;

  getTokenList(
    address: string,
    queryParams?: {
      cursor: number;
      size: number;
    }
  ): Promise<Token[]>;

  //Nft
  getNftUtxos(
    codehash: string,
    genesis: string,
    address: string,
    queryParams?: {
      cursor: number;
      size: number;
    }
  ): Promise<NftUtxo[]>;

  getNftUtxo(
    codehash: string,
    genesis: string,
    tokenIndex: string
  ): Promise<NftUtxo>;

  getNftCollectionList(
    address: string,
    queryParams?: {
      cursor: number;
      size: number;
    }
  ): Promise<NftCollection[]>;
}
