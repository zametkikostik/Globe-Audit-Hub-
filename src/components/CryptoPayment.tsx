"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { BrowserProvider, Contract, parseUnits, formatUnits } from "ethers";

// Official DAI (PoS) on Polygon
const DAI_ADDRESS = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";
const POLYGON_CHAIN_ID = "0x89"; // 137
const POLYGON_PARAMS = {
  chainId: POLYGON_CHAIN_ID,
  chainName: "Polygon Mainnet",
  nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  rpcUrls: ["https://polygon-rpc.com"],
  blockExplorerUrls: ["https://polygonscan.com"],
};

const DAI_ABI = [
  "function balanceOf(address) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
];

const RECIPIENT =
  process.env.NEXT_PUBLIC_PAYMENT_RECIPIENT ||
  "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";

export default function CryptoPayment() {
  const t = useTranslations("payment");
  const [account, setAccount] = useState<string | null>(null);
  const [amount, setAmount] = useState("10");
  const [status, setStatus] = useState<string>("");
  const [txHash, setTxHash] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState<string>("");

  const connect = async () => {
    if (!(window as any).ethereum) {
      setStatus("Установите MetaMask");
      return;
    }
    try {
      const provider = new BrowserProvider((window as any).ethereum);
      await provider.send("eth_requestAccounts", []);
      const network = await provider.getNetwork();
      if (Number(network.chainId) !== 137) {
        try {
          await (window as any).ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: POLYGON_CHAIN_ID }],
          });
        } catch (switchError: any) {
          if (switchError.code === 4902) {
            await (window as any).ethereum.request({
              method: "wallet_addEthereumChain",
              params: [POLYGON_PARAMS],
            });
          } else throw switchError;
        }
      }
      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      setAccount(addr);
      const dai = new Contract(DAI_ADDRESS, DAI_ABI, provider);
      const bal = await dai.balanceOf(addr);
      setBalance(formatUnits(bal, 18));
      setStatus(t("connected"));
    } catch (e: any) {
      setStatus(e?.message || "Ошибка подключения");
    }
  };

  const sendDai = async () => {
    if (!account || !amount) return;
    setLoading(true);
    setStatus("");
    setTxHash("");
    try {
      const provider = new BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();
      const dai = new Contract(DAI_ADDRESS, DAI_ABI, signer);
      const value = parseUnits(amount, 18);
      const tx = await dai.transfer(RECIPIENT, value);
      setTxHash(tx.hash);
      setStatus(t("txSuccess"));
      await tx.wait();
      const bal = await dai.balanceOf(account);
      setBalance(formatUnits(bal, 18));
    } catch (e: any) {
      setStatus(e?.reason || e?.message || "Ошибка транзакции");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 space-y-4">
      <h3 className="text-xl font-bold text-white">{t("dai")}</h3>
      <p className="text-xs text-slate-400 break-all">
        DAI (Polygon): {DAI_ADDRESS}
      </p>

      {!account ? (
        <button
          onClick={connect}
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl font-semibold transition"
        >
          {t("connect")}
        </button>
      ) : (
        <>
          <p className="text-sm text-slate-300 truncate">
            {account.slice(0, 6)}…{account.slice(-4)} · Balance: {balance} DAI
          </p>
          <div>
            <label className="block text-sm text-slate-400 mb-1">{t("amount")}</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={sendDai}
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 rounded-xl font-semibold transition"
          >
            {loading ? "…" : t("send")}
          </button>
        </>
      )}

      {status && <p className="text-sm text-cyan-400">{status}</p>}
      {txHash && (
        <a
          href={`https://polygonscan.com/tx/${txHash}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-400 underline break-all block"
        >
          {t("txHash")}: {txHash}
        </a>
      )}

      <div className="pt-4 border-t border-white/10">
        <p className="text-sm text-slate-400 mb-2">{t("stripe")}</p>
        <button
          onClick={() =>
            alert("Подключите Stripe keys в .env (NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)")
          }
          className="w-full py-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl font-medium transition"
        >
          Stripe Checkout
        </button>
      </div>
    </div>
  );
}
