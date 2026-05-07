'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CopyButtonProps {
  text: string;
  className?: string;
  label?: string;
  copiedLabel?: string;
  variant?: 'icon' | 'page';
}

export function CopyButton({
  text,
  className,
  label = 'Copy',
  copiedLabel = 'Copied',
  variant = 'icon'
}: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (variant === 'page') {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          'mt-1 inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-[13px] font-medium text-neutral-600 transition-all hover:bg-neutral-50',
          isCopied && 'text-emerald-700',
          className
        )}
        aria-label="Copy page for LLM"
      >
        <span className="relative flex h-3.5 w-3.5 items-center justify-center">
          <Copy
            className={cn(
              'absolute h-3.5 w-3.5 transition-all duration-200',
              isCopied
                ? 'scale-75 -rotate-12 opacity-0'
                : 'scale-100 rotate-0 opacity-100'
            )}
          />
          <Check
            className={cn(
              'absolute h-3.5 w-3.5 text-emerald-600 transition-all duration-300',
              isCopied
                ? 'scale-100 rotate-0 opacity-100'
                : 'scale-75 rotate-12 opacity-0'
            )}
          />
        </span>
        <span className="transition-colors duration-200">
          {isCopied ? copiedLabel : label}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(className)}
      aria-label="Copy to clipboard"
    >
      <span className="relative flex h-4 w-4 items-center justify-center">
        <Copy
          className={cn(
            'absolute h-4 w-4 transition-all duration-200',
            isCopied
              ? 'scale-75 -rotate-12 opacity-0'
              : 'scale-100 rotate-0 opacity-100'
          )}
        />
        <Check
          className={cn(
            'absolute h-4 w-4 text-emerald-500 transition-all duration-300',
            isCopied
              ? 'scale-100 rotate-0 opacity-100'
              : 'scale-75 rotate-12 opacity-0'
          )}
        />
      </span>
    </button>
  );
}
