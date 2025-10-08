export const BasicTypes = () => {
  const name: string = "Gustavo";
  const age: number = 31;
  const isActive: boolean = true;

  const powers: string[] = ["React", "ReactNative", "Astro"];

  return (
    <>
      <h3> Tipos básicos</h3>
      {name} - {age} - {isActive ? "Activo" : "No Activo"}
      <p>{powers.join(", ")} </p>
    </>
  );
};
