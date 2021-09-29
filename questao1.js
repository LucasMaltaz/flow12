async function main() {
    const one = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("um");
        }, 1300);
      });
    };
  
    const two = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("dois");
        }, 2000);
      });
    };
  
    const three = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("três");
        }, 2000);
      });
    };
    
    const startTime = Date.now();
    
    // O código seria executado aqui
    // OBS.: Não é necessário implementar
    
    const endTime = Date.now();
  
    console.log('Tempo de execução:', endTime - startTime);
  }
  
  main();

// Metodo: código 
// não consegui entender a sacada deste exercicio, tenho em mim que possui alguma pegadinha ou sacada diferente 
// para poder entender e resolver o problema 