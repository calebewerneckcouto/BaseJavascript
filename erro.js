try {
    const valor = 10/0;
    console.log(valor);
    
} catch (error) {
    console.error("Ocorreu um erro:" , error.message);
    
} finally{
    console.log("Este código é executado independente de exceções");
}