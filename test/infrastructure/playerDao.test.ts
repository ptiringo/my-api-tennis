import { beforeAll, test } from '@jest/globals';
import { exec } from 'child_process';
import util from 'util';
import { getPlayerById } from '../../src/infrastructure/playerDao';

beforeAll(async () => {
  const execute = util.promisify(exec)
  const log = await execute('dotenv -e .env.test -- npx prisma migrate reset --force')
  console.log(log.stdout)
});

test("getPlayerById", async () => {
  console.log(process.env.DATABASE_URL)
  const player = await getPlayerById("nishikori");
  console.log(player);
});
