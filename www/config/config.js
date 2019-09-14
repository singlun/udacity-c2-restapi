"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    "dev": {
        "username": process.env.POSTGRESS_USERNAME,
        "password": process.env.POSTGRESS_PASSWORD,
        "database": process.env.POSTGRESS_DATABASE,
        "host": process.env.POSTGRESS_HOST,
        "dialect": process.env.POSTGRESS_DIALECT,
        "aws_reigion": process.env.POSTGRESS_REGION,
        "aws_profile": process.env.POSTGRESS_PROFILE,
        "aws_media_bucket": process.env.POSTGRESS_BUCKET,
    },
    "prod": {
        "username": "",
        "password": "",
        "database": "udagram_prod",
        "host": "",
        "dialect": "postgres"
    }
};
//# sourceMappingURL=config.js.map