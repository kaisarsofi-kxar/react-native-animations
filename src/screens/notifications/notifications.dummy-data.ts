import { faker } from "@faker-js/faker";

const generateUsers = (count: number) =>
  Array.from({ length: count }, (_, i) => {
    // alternate between male/female portraits
    const gender = i % 2 === 0 ? "men" : "women";
    const randomId = faker.number.int({ min: 1, max: 99 }); // random portrait id

    return {
      key: faker.string.uuid(),
      image: `https://randomuser.me/api/portraits/${gender}/${randomId}.jpg`,
      name: faker.person.fullName(),
      jobTitle: faker.person.jobTitle(),
      email: faker.internet.email(),
    };
  });

export const NOTIFICATIONS = generateUsers(40);
