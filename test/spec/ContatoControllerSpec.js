(function() {

    /**
     * O nome da suíte é tipicamente o nome da classe, função ou componente
    que desejamos testar. É o nome da suíte que será exibido com o resultado de
    seus testes no terminal. Nosso próximo passo será definir os comportamentos
    de ContatoController que desejamos testar.
     */
    describe("ContatoController", function() {

        it("Deve criar um Contato vazio quanto nenhum parametro de rota for passado", function() {
            expect($scope.contato._id).toBeUndefined()
        })
    })

})()