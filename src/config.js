const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-bucket-jeffbob",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://l5gfy4cx63.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_amPJoV4jz",
    APP_CLIENT_ID: "3tb2p2mti9t00ef08pbho2mpv2",
    IDENTITY_POOL_ID: "us-east-1:f14d7c75-be18-433c-90c2-aff564ccc31a",
  },
};

export default config;