import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const city1 = await prisma.city.create({
    data: {
      name: 'Wrocław',
    },
  });
  const city2 = await prisma.city.create({
    data: {
      name: 'Warszawa',
    },
  });
  const escapeRoom1 = await prisma.escapeRoom.create({
    data: {
      name: 'Opuszczony Hotel',
      description:
        '1954 rok. Sinwood, Anglia. W okolicy bez śladu giną kobiety, a sterroryzowani strachem mieszkańcy podejrzewają, że tajemnicze zaginięcia związane są ze starym opuszczonym hotelem, stojącym na wzgórzu pod lasem. Legendy głoszą, że wiktoriański pensjonat powstał w miejscu, które przed wiekami było opętane złem. Od lat nikt jeszcze nie odważył się odwiedzić tego miejsca…',
      cityId: 1,
    },
  });
  const escapeRoom2 = await prisma.escapeRoom.create({
    data: {
      name: 'Ślepa Furia',
      description:
        'Czyżby historia miała się powtórzyć? Wszyscy pamiętają o serii porwań dla okupu gdy dwaj bracia bez litości przetrzymywali i torturowali porwane osoby. W momencie gdy policja zaczęła znajdować ciała zaginionych osób i deptać po piętach porywaczom, oni zniknęli z całą kasą. Prawdopodobnie część pieniędzy ukryli w domu, w którym się wychowali ale nikt dotąd ich nie odnalazł. O braciach też nikt nie słyszał od 20 lat. Czy nadal żyją?',
      cityId: 2,
    },
  });
  console.log({ escapeRoom1, escapeRoom2, city1, city2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
