class CaixaDaLanchonete {
    constructor() {
        this.menu = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        };
        
        this.extras = {
            chantily: "cafe",
            queijo: "sanduiche"
        };
    }

    calcularValorDaCompra(formaDePagamento, itens) {
        //declarando e iniciando uma variável para a função chamada 'total' para ser o resultado do cálculo
        let total = 0;
        
        // Validações das regras para quantidade de itens == 0 e forma de pagamento inválida
        //Nota: Essas duas exclusões não dependem do método split, por isso estão fora do bloco 'for of'
        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }
        if (!['debito', 'credito', 'dinheiro'].includes(formaDePagamento)) {
            return "Forma de pagamento inválida!";
        }

        for (let item of itens) {
        /*Para cada valor de itens['codigo,quantidade'] o método split divide o parametro em strings de dois
         *valores ['codigo', quantidade']*/ 
        //Para cada [codigo, quantidade] fazemos os testes e depois calculamos o total 
            const [codigo, quantidade] = item.split(',');
            // Primeiro testamos as exclusões 'item inválido', 'quantidade invalida', 'item extra sem principal'
            if (!this.menu[codigo]) {
                return "Item inválido!";
            }
            if (Number(quantidade) <= 0) {
                return "Quantidade inválida!";
            }
            if (this.extras[codigo] && !itens.some(i => i.startsWith(this.extras[codigo]))) {
                return "Item extra não pode ser pedido sem o principal";
            }
            //Incrementando o total:
            total += this.menu[codigo] * Number(quantidade);
        }

        //Aplicando as taxas ou descontos de acordo com a forma de pagamento.
        if (formaDePagamento === 'dinheiro') {
            total *= 0.95;
        } else if (formaDePagamento === 'credito') {
            total *= 1.03;
        }
        //Retorno com o valor fixado com duas casas decimais
        return `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
}


export { CaixaDaLanchonete };
