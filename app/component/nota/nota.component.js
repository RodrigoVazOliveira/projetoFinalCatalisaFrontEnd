import React from "react";

export default class FormularioNotaFiscal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numeroDaNota: '',
            cnpjOuCpfFornecedor: '',
            valorAPagar: '',
            dataDeEmissao: '',
            pedidoDeCompras: '',
            dataDeEnvio: '',
            emailDoResponsavel: ''
        };
    }
}