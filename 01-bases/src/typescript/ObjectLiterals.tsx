interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address;
}

interface Address {
  country: string;
  houseNo: string;
  street?: string;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 31,
    firstName: "Gustavo",
    lastName: "Herrera",
    address: {
      country: "Argentina",
      houseNo: "1039",
    },
  };

  return (
    <>
      <h3> Objetos literales</h3>

      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
