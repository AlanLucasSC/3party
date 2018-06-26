import React from 'react'
import ChatBot from 'react-simple-chatbot';

const Message = (props) => {

    var response = 'Descupe, mas não há nenhuma resposta para essa pergunta'

    var test1, test2, test3;
    test1 = new RegExp('^(?=.*fixo)(?=.*preço).*$|^(?=.*constante)(?=.*preço).*$', 'im')
    console.log(test1)
    //test2 = new RegExp('preço')

    if( test1.test(question) )
        response = 'Os preços dos produtos/serviços são dados pelos nossos fornecedores podendo sofrer ajustes de orçamento.'
    
    test1 = new RegExp('itens')
    test2 = new RegExp('vendido')
    test3 = new RegExp('exposto')

    if( ( test1.test(question) && test2.test(question) ) || test1.test(question) && test3.test(question) )
        response = 'Os itens possuem imagens meramente ilustrativas podendo ser personalizada por nossos fornecedores.'

    
    return (
        <div className="text-dark">
            { response }
        </div>
    )
}

var question = ''

export default props => {
    var steps = [
        {
            id: '1',
            message: 'Qual é a sua pergunta?',
            trigger: '2',
        },
        {
            id: '2',
            validator: (value) => {
                if (isNaN(value)) {
                    question = value
                    console.log(question)
                }
                return true;
              },
            user: true,
            trigger: '3',
        },
        {
            id: '3',
            component: <Message/>,
            trigger: '1',
        },    
    ]

    return (
        <div id="chatbot">
            <ChatBot
                steps={ steps }
            />
        </div>
    )
}