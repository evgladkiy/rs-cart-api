import { Injectable } from '@nestjs/common';


import { Client } from 'pg' 

const { PG_DATABASE, PG_USERNAME, PG_PASSWORD, PG_HOST, PG_PORT  } = process.env;

@Injectable()
export class PostgresClientService {
    private readonly host = PG_HOST;
    private readonly port = Number(PG_PORT);
    private readonly database = PG_DATABASE;
    private readonly user = PG_USERNAME;
    private readonly password = PG_PASSWORD;
    private readonly connectionTimeout: 5000;

    private getConnectionOptions() {
        return {
            host: this.host,
            port: this.port,
            database: this.database,
            user: this.user,
            password: this.password,
            connectionTimeout: this.connectionTimeout,
            ssl: {
              rejectUnauthorized: false,
            }
        }
    }

    async query(request): Promise<any> {
      console.log('try to set up connection')
      const client = new Client(this.getConnectionOptions());
      await client.connect();

      try {
        const result = await client.query(request);
        return result.rows;
      } catch(err) {
        console.log(err)
      } finally {
        client.end();
      }
    }
}