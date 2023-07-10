export interface ActiveLog {
  id?: string
  userName?: string;
  timeImpact?: string;
  ipImpact?: string;
  operations?: string;
}
export interface resBodyActiveLog extends ActiveLog {}
