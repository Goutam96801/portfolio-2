"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type Props = {
    provider: string;
    password: string;
};

export default function DemoCredentials({
    provider,
    password,
}: Props) {
    const [copied, setCopied] = useState<null | "provider" | "password">(null);

    const handleCopy = async (
        text: string,
        field: "provider" | "password"
    ) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(field);

            setTimeout(() => setCopied(null), 1500);
        } catch (e) {
            // ignore
        }
    };

    return (
        <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full min-w-0">
            {/* Provider */}
            <div className="flex items-center justify-between gap-3 bg-white border border-gray-200 px-4 py-2 shadow-sm flex-1 min-w-0 overflow-hidden">
                <div className="flex items-center gap-2 min-w-0 overflow-hidden">
                    <span className="text-sm text-gray-500 shrink-0">
                        Provider:
                    </span>

                    <span className="font-mono text-sm font-medium text-black truncate block">
                        {provider}
                    </span>
                </div>

                <button
                    onClick={() => handleCopy(provider, "provider")}
                    className="text-gray-400 hover:text-brand-orange transition-colors shrink-0 px-2"
                    title="Copy Provider"
                >
                    {copied === "provider" ? <Check size={16} className="text-green-500"/> : <Copy size={16} />}
                </button>
            </div>

            {/* Password */}
            <div className="flex items-center justify-between gap-3 bg-white border border-gray-200 px-4 py-2 shadow-sm flex-1 min-w-0 overflow-hidden">
                <div className="flex items-center gap-2 min-w-0 overflow-hidden">
                    <span className="text-sm text-gray-500 shrink-0">
                        Password:
                    </span>

                    <span className="font-mono text-sm font-medium text-black truncate block">
                        ***************
                    </span>
                </div>

                <button
                    onClick={() => handleCopy(password, "password")}
                    className="text-gray-400 hover:text-brand-orange transition-colors shrink-0"
                    title="Copy Password"
                >
                    {copied === "password" ? <Check size={16} className="text-green-500"/> : <Copy size={16} />}
                </button>
            </div>
        </div>
    );
}