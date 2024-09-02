import { PrismaClient } from "@prisma/client";
import moment from "moment";

const prisma = new PrismaClient();

async function main() {
  await prisma.player.upsert({
    where: { id: "nishikori" },
    update: {},
    create: {
      id: "nishikori",
      firstName: "Kei",
      lastName: "Nishikori",
      dateOfBirth: moment().year(1989).month(12).date(29).toDate(),
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
