"use client";
import { useLocale, useLocalizedRouter } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { isUser } from "~/types/user";
import AuthClientProvider from "./AuthClientProvider";
import {
  ChainContext,
  ChainResult,
  CheckAllExpired,
  CheckLoading,
  CheckRefreshAvailable,
  ClaimGuard,
  RedirectIfFound,
  RedirectIfNotFound,
} from "./AuthGuardLogic";
import { useGetCurrentQuery } from "./auth.api";

type Props = {
  skip?: boolean;
  blockPageOnLoading?: boolean;
  claimGuard?: boolean;
  redirectIfFound?: boolean;
  redirectIfNotFound?: boolean;
  redirectIfFoundPath?: string;
  redirectIfNotFoundPath?: string;
  claims?: string[];
  redirectIfClaimNotFoundPath?: string;
};

type ChainEl = (ctx: ChainContext) => ChainResult;
type ChainList = ChainEl[];

const reduceChain = (
  chain: ChainList,
  ctx: ChainContext
): ChainResult | null => {
  if (chain.length === 0) return null;
  const res = chain[0](ctx);
  if (!res) {
    chain.shift();
    if (chain.length > 0) {
      return reduceChain(chain, ctx);
    }
  }
  return res;
};

export default function AuthGuard({
  children,
  skip = false,
  blockPageOnLoading = false,
  redirectIfFound = false,
  redirectIfNotFound = false,
  claimGuard = false,
  claims = [],
}: React.PropsWithChildren<Props>): JSX.Element {
  const path = usePathname();
  const query = useSearchParams();
  const router = useLocalizedRouter();
  const locale = useLocale();
  const { isLoading, data, error } = useGetCurrentQuery({}, { skip });
  const chain: ChainList = [
    CheckLoading,
    RedirectIfFound,
    RedirectIfNotFound,
    CheckRefreshAvailable,
    CheckAllExpired,
    ClaimGuard,
  ];

  const result = reduceChain(chain, {
    currentPath: path,
    query,
    blockPageOnLoading,
    loading: isLoading,
    error: error,
    data: data,
    claimGuard,
    redirectIfFound,
    redirectIfNotFound,
    claims,
    locale,
    router,
  });
  if (result) return result as JSX.Element;
  return (
    <AuthClientProvider user={isUser(data) ? data : null}>
      {children}
    </AuthClientProvider>
  );
}
