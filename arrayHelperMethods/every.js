const computers = [
  { name: "Apple", ram: "64" },
  { name: "Compac", ram: "4" },
  { name: "Accer", ram: "32" },
];

const allComputersCanRunProgram = true;

for (let index = 0; index < computers.length; index++) {
  const computer = computers[index];

  if (computer.ram < 16) {
    !allComputersCanRunProgram;
  }
}

console.log(allComputersCanRunProgram);
