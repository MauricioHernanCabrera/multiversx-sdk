export interface ScamInfo {
  type: "none" | "potentialScam" | "scam";
  info: string | null;
}
