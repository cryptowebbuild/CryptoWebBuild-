import React from 'react';
import BlogPostLayout from '../../components/blog/BlogPostLayout';
import ExpertBox from '../../components/blog/ExpertBox';

const PresaleGuide: React.FC = () => {
  return (
    <BlogPostLayout
      title="How to Build a Secure Token Presale DApp: The Technical Roadmap (2026)"
      description="Don't launch a broken presale. A technical guide to building secure, high-concurrency ICO dashboards. Smart contracts, React integration, and anti-bot security."
      publishedTime="2026-01-10"
      image="https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=1200&q=80"
      category="Technical Guide"
      readTime="15 min read"
      keywords={['Build Presale DApp', 'ICO Website Development', 'Token Sale Smart Contract', 'Web3 Presale Dashboard', 'Launchpad Development']}
      canonical="/how-to-build-presale-dapp"
    >
      <p className="lead">
        A Presale (or ICO) is the most critical moment for a crypto project. It's the singular event where you ask strangers to trust you with their money (ETH, SOL, or USDT) in exchange for a promise (your token). If your website crashes, your smart contract jams, or the "Claim" button fails, your project is effectively dead on arrival.
      </p>
      <p>
        I have audited and built over 20 presale dashboards. I’ve seen projects raise $5M in 10 minutes without a hitch, and I’ve seen others lose $200k to a simple re-entrancy bug or a crashed server.
      </p>
      <p>
        This is not a marketing guide. This is a <strong>Technical Roadmap</strong> for developers and founders who want to build a "Fort Knox" grade presale DApp.
      </p>

      <ExpertBox type="warning" title="The High Concurrency Problem">
        Standard websites handle traffic sequentially. Presales are different. 10,000 users will try to hit "Buy" at the <strong>exact same second</strong> the round opens (FOMO). If your RPC nodes aren't load-balanced, your UI will freeze, wallet connections will drop, and investors will scream "SCAM" in your Telegram.
      </ExpertBox>

      <h2 id="architecture">1. The Architecture (React + Wagmi + Smart Contract)</h2>
      <p>
        Do not use WordPress. Do not use Wix. You need a dedicated, compiled React application served from the Edge.
      </p>
      <p>
        Here is the battle-tested stack for 2026:
      </p>

      <h3>The Frontend Stack</h3>
      <ul>
        <li><strong>Framework:</strong> Vite (React) or Next.js (Static Export). We need instant loading.</li>
        <li><strong>Wallet Connection:</strong> AppKit (formerly Web3Modal) or RainbowKit. These libraries handle the messy edge cases of mobile wallets (MetaMask iOS, Phantom Android) better than anything else.</li>
        <li><strong>State Management:</strong> TanStack Query (React Query). You need to cache blockchain data. Fetching the "Total Raised" from the contract on every re-render will rate-limit your RPC provider instantly.</li>
        <li><strong>Contract Interaction:</strong> Viem (via Wagmi). It is 10x smaller and faster than Ethers.js.</li>
      </ul>

      <h3>The Backend (Optional but Recommended)</h3>
      <p>
        Strictly speaking, a DApp doesn't <em>need</em> a backend. However, for a presale, a simple Node.js/PostgreSQL backend is useful for:
      </p>
      <ul>
        <li><strong>Off-Chain Whitelists:</strong> Saving gas by using Merkle Trees or ECDSA signatures.</li>
        <li><strong>Leaderboards:</strong> Indexing "Top Buyers" events efficiently.</li>
        <li><strong>Geo-Blocking:</strong> Restricting access from OFAC sanctioned countries (Legal requirement).</li>
      </ul>

      <h2 id="smart-contract">2. The Smart Contract (The Vault)</h2>
      <p>
        Your contract is a bank vault. Once deployed, it cannot be changed (unless it's a proxy, which introduces centralization risks).
      </p>
      <p>
        Here is a simplified standard for a Presale Contract in Solidity:
      </p>

      <pre><code className="language-solidity">{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Presale is Ownable, ReentrancyGuard {
    IERC20 public saleToken;
    IERC20 public usdtToken;

    uint256 public pricePerToken; // e.g. 0.05 USD
    uint256 public totalSold;

    event TokensPurchased(address indexed buyer, uint256 amount);

    function buyTokens(uint256 usdtAmount) external nonReentrant {
        require(usdtAmount > 0, "Amount must be > 0");

        // 1. Transfer USDT from User to Contract
        usdtToken.transferFrom(msg.sender, address(this), usdtAmount);

        // 2. Calculate Token Amount
        uint256 tokenAmount = (usdtAmount * 1e18) / pricePerToken;

        // 3. Update State
        totalSold += tokenAmount;

        // 4. Emit Event
        emit TokensPurchased(msg.sender, tokenAmount);
    }
}`}</code></pre>

      <ExpertBox type="pro" title="Vesting Strategy">
        <strong>Don't distribute tokens immediately.</strong> If you do, bots will dump on the liquidity pool the second you launch on Uniswap. Implement a <strong>Claim Portal</strong> where users come back *after* the launch to claim their tokens. Use linear vesting (e.g., 10% TGE, then 10% monthly) to stabilize the price.
      </ExpertBox>

      <h2 id="frontend-integration">3. Frontend Integration (Wagmi & Viem)</h2>
      <p>
        Connecting React to Solidity is where most juniors fail. They use `useEffect` poorly and cause infinite re-renders.
      </p>
      <p>
        Use the `useReadContract` and `useWriteContract` hooks from Wagmi.
      </p>

      <pre><code className="language-typescript">{`import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseUnits } from 'viem';
import { presaleAbi } from './abis';

const BuyButton = () => {
  const { data: hash, writeContract } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const handleBuy = async () => {
    writeContract({
      address: '0x...',
      abi: presaleAbi,
      functionName: 'buyTokens',
      args: [parseUnits('100', 6)], // Buying with 100 USDT
    });
  };

  return (
    <button
      onClick={handleBuy}
      disabled={isConfirming}
      className="bg-blue-600 text-white px-6 py-3 rounded-xl"
    >
      {isConfirming ? 'Processing...' : 'Buy Now'}
    </button>
  );
};`}</code></pre>

      <h2 id="security-checklist">4. The "Anti-Rug" Security Checklist</h2>
      <p>
        Before you deploy, run through this list. If you miss one, you are vulnerable.
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200 dark:border-white/10">
              <th className="py-4 px-4 font-black bg-gray-100 dark:bg-white/5 rounded-tl-xl">Vector</th>
              <th className="py-4 px-4 font-black bg-gray-100 dark:border-white/10 dark:bg-white/5 rounded-tr-xl">Protection Measure</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 dark:border-white/5">
              <td className="py-4 px-4 font-bold text-red-600 dark:text-red-400">Re-entrancy</td>
              <td className="py-4 px-4">Use `nonReentrant` modifier on all withdraw/buy functions.</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-white/5">
              <td className="py-4 px-4 font-bold text-red-600 dark:text-red-400">Integer Overflow</td>
              <td className="py-4 px-4">Use Solidity 0.8+ (Built-in overflow protection).</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-white/5">
              <td className="py-4 px-4 font-bold text-red-600 dark:text-red-400">DNS Hijacking</td>
              <td className="py-4 px-4">Use Cloudflare with DNSSEC enabled. Monitor DNS records.</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-white/5">
              <td className="py-4 px-4 font-bold text-red-600 dark:text-red-400">Bot Sniping</td>
              <td className="py-4 px-4">Implement a "Max Transaction Amount" per wallet during TGE.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="ux-flow">5. User Experience: The Conversion Funnel</h2>
      <p>
        Your UI should be a funnel. Remove distractions.
      </p>
      <ol>
        <li><strong>Network Switching:</strong> If a user is on Ethereum Mainnet but your presale is on Base, your UI should detect this and prompt a network switch automatically. Don't make them do it manually in Metamask.</li>
        <li><strong>Real-Time Pricing:</strong> Fetch the price of ETH/SOL in USD every 10 seconds (using Chainlink Oracles or CoinGecko API) so the user knows exactly how much they are paying.</li>
        <li><strong>Approvals:</strong> For ERC-20 tokens (USDT), remember the "Approve" step. You need TWO transactions: 1. Approve Spend, 2. Transfer. Explain this in the UI ("Step 1 of 2: Unlock USDT").</li>
      </ol>

      <ExpertBox type="insight" title="Mobile First">
        70% of presale traffic comes from mobile devices (via Twitter/Telegram links). Test your DApp inside the MetaMask mobile browser and Phantom mobile browser. If it doesn't work there, you lose 70% of your revenue.
      </ExpertBox>

      <h2 id="conclusion">Conclusion</h2>
      <p>
        Building a presale site is not about installing a template. It's about engineering a high-security financial application. The cost of failure is total.
      </p>
      <p>
        If you are planning a launch, don't guess. Hire a team that has deployed contracts holding millions of dollars securely.
      </p>
    </BlogPostLayout>
  );
};

export default PresaleGuide;
