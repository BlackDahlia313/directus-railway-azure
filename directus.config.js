
module.exports = function (env) {
    return {
        // User inputs from railway starter button
        ADMIN_EMAIL: env.ADMIN_EMAIL,
        ADMIN_PASSWORD: env.ADMIN_PASSWORD,
        KEY: env.KEY,
        SECRET: env.SECRET,

        // Reference: https://docs.railway.app/deploy/exposing-your-app
        PORT: env.PORT,

        // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
        PUBLIC_URL: `https://${env.RAILWAY_STATIC_URL}`,

        // Database variables from Railway PostgreSQL Plugin
        // Reference: https://docs.railway.app/plugins/postgresql
        DB_CLIENT: 'pg',
        DB_HOST: env.PGHOST,
        DB_PORT: env.PGPORT,
        DB_DATABASE: env.PGDATABASE,
        DB_USER: env.PGUSER,
        DB_PASSWORD: env.PGPASSWORD,
        STORAGE_LOCATIONS: "azure",
        STORAGE_AZURE_DRIVER: "azure",
        STORAGE_AZURE_CONTAINER_NAME: env.STORAGE_AZURE_CONTAINER_NAME,
        STORAGE_AZURE_ACCOUNT_KEY: env.STORAGE_AZURE_ACCOUNT_NAME,
        STORAGE_AZURE_ENDPOINT: env.STORAGE_AZURE_ENDPOINT
    };
};
