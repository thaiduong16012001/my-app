export interface Service {
  name?: string;
  id?: string;
  description?: string;
  statusConnect?: boolean;
  time?: string;
}
export interface ServiceDetail {
  Stt: number;
  Status: number;
}
export interface ServiceDetailLocal {
  id: string;
  ListDetail: ServiceDetail[];
}
export interface ResBodyService extends Service {}
export interface ResBodyServiceDetail extends ServiceDetailLocal {}
