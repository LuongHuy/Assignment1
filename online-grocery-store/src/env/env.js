const env = process.env.NODE_ENV;
// if (env == "development") {

// } else if (env == "production") {

// }

export const NEXT_PUBLIC_HOST =
  env === "development"
    ? "http://localhost:3000"
    : "http://awseb-e-m3d36inqhk-stack-awsebrdsdatabase-ptjqzvjf0c2z.cdass2k64sdo.us-east-1.rds.amazonaws.com";

export const NEXT_PUBLIC_DB_NAME = env === "development" ? "root" : "uts";

export const NEXT_PUBLIC_DB_PASSWORD =
  env === "development" ? "root" : "luonghuy123";

export const NEXT_PUBLIC_DB_HOST =
  env === "development"
    ? "localhost"
    : "awseb-e-m3d36inqhk-stack-awsebrdsdatabase-ptjqzvjf0c2z.cdass2k64sdo.us-east-1.rds.amazonaws.com";

export const NEXT_PUBLIC_DB_PORT = 3306;
