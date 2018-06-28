import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#fed136',
    headerFontColor: '#261B03',
    headerFontSize: '15px',
    botBubbleColor: '#fed136',
    botFontColor: '#261B03',
    userBubbleColor: '#fff',
    userFontColor: 'grey',
  };

const Message = (props) => {

    var response = 'Descupe, mas não há irei conseguir responder a sua pergunta'

    var test1, test2, test3;
    test1 = new RegExp('^(?=.*fixo)(?=.*preço).*$|^(?=.*constante)(?=.*preço).*$|^(?=.*preço)(?=.*produto).*$', 'im')
    
    //test2 = new RegExp('preço')

    if( test1.test(question) )
        response = 'Os preços dos produtos/serviços são inseridos pelos nossos fornecedores podendo sofrer ajustes de orçamento.'
    
    test1 = new RegExp('^(?=.*produto)(?=.*vendido).*$|^(?=.*produto)(?=.*exposto).*$|^(?=.*item)(?=.*vendido).*$', 'im')


    if( test1.test(question))
        response = 'Os itens possuem imagens meramente ilustrativas podendo ser personalizada por nossos fornecedores.'

    test1 = new RegExp('^(?=.*produto)(?=.*solicitar).*$|^(?=.*produto)(?=.*solicito).*$|^(?=.*solicitar)(?=.*serviço).*$', 'im')

    if( test1.test(question))
        response = 'Você poderá solicitar produtos/serviços únicos, porém depende exclusivamente do fornecedor aceitar.'

    test1 = new RegExp('^(?=.*solicitar)(?=.*orçamento).*$|^(?=.*solicito)(?=.*orçamento).*$|^(?=.*orçamento).*$', 'im')

    if( test1.test(question))
        response = 'Deverá ser feito uma solicitação de orçamento após selecionar o item.'

    test1 = new RegExp('^(?=.*third).*$|^(?=.*party).*$', 'im')

    if( test1.test(question))
        response = 'O Third Party é uma plataforma de comércio eletrônico para aquisição/venda de itens para casamento.'

    test1 = new RegExp('^(?=.*fornecedor)(?=.*entrar).*$|^(?=.*fornecedor)(?=.*parte).*$|^(?=.*fornecedor)(?=.*produto).*$|^(?=.*vender)(?=.*produto).*$', 'im')

    if( test1.test(question))
        response = 'Entre em contato com thirdparty@gmail.com'

    test1 = new RegExp('^(?=.*passo)(?=.*comprar).*$|^(?=.*fazer)(?=.*comprar).*$|^(?=.*faço)(?=.*comprar).*$', 'im')

    if( test1.test(question))
        response = 'Você deve: cadastrar, selecionar os itens, enviar solicitação, aguarda resposta e finalizar a compra. '

    test1 = new RegExp('^(?=.*tipo)(?=.*produto).*$|^(?=.*categoria).*$|^(?=.*tipo)(?=.*serviço).*$', 'im')

    if( test1.test(question))
        response = 'Os itens de festas oferecidos pelos nossos parceiros são divididos em categorias como: Buffet; Decoração; Bebida; Equipe de Som & Animação; Fotografia; Equipe de Segurança; Lembranças e artesanatos; Serviço de confeitaria; Salão de festa; Salão de Beleza; Animadores de Festa;'

    test1 = new RegExp('^(?=.*pagar)(?=.*taxa).*$|^(?=.*taxa).*$|^(?=.*pagar)(?=.*valor).*$', 'im')
    if( test1.test(question))
        response = 'Para participar do Third Party não paga nada.'

    test1 = new RegExp('^(?=.*contratar)(?=.*evento).*$|^(?=.*festa).*$|^(?=.*hoje)(?=.*contrato).*$', 'im')
    if( test1.test(question))
        response = 'Para contratar algum item de festa sendo produto/serviço precisa de pelo menos 7 dias.'
        

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
            message: 'Olá, Eu sou o Third. Como posso ajudar?',
            trigger: '2',
        },
        {
            id: '2',
            validator: (value) => {
                if (isNaN(value)) {
                    question = value
                    //console.log(question)
                }
                return true;
              },
            user: true,
            trigger: '3',
        },
        {
            id: '3',
            component: <Message/>,
            trigger: '4',
        },
        {
            id: '4',
            message: 'Você deseja fazer outra pergunta?',
            trigger: '5',
        },
        {
            id: '5',
            options: [
              { value: 1, label: 'Sim', trigger: '6' },
              { value: 2, label: 'Não', trigger: '7' },
            ],
        },
        {
            id: '6',
            message: 'Qual pergunta deseja fazer?',
            trigger: '2',
        },
        {
            id: '7',
            message: 'Até a proxima, falou!',
            end: true
        },
    ]
    const ThemedExample = () => (
        <ThemeProvider theme={theme}>
          <ChatBot steps={steps} />;
        </ThemeProvider>
      );

    return (
        
        <div id="chatbot">
        <ThemeProvider theme={theme}>
            <ChatBot
                placeholder="Por favor, digite sua mensagem"
                steps={ steps }
            />
        </ThemeProvider>
        </div>
    )
}